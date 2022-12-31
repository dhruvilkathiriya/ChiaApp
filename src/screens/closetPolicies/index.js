import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, View} from 'react-native';

import {
  Header,
  ProfileHeader,
  ProfileCategory,
  ClosetSubListWithSwitch,
  Loader,
} from '../../components';
import {strings} from '../../helper/strings';
import {style} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {getClosetPolicies} from '../../actions/closetPoliciesAction';
import customBaskPress from '../../helper/backPressHandler';
import {editProfile} from '../../actions/profileActions';
import _ from 'lodash';
import {useNavigation} from '@react-navigation/native';

const ClosetPolicies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClosetPolicies());
  }, []);

  const {closetPolicies, closetPoliciesLoading} = useSelector(
    state => state.closetPolicies,
  );

  const {user} = useSelector(state => state.user);

  const {canGoBack, goBack} = useNavigation();

  const [closetPolicy, setClosetPolicy] = useState(user?.closetPolicy);

  const renderDryCleaningItem = ({item}) => {
    return (
      <ClosetSubListWithSwitch
        name={item?.key}
        value={closetPolicy?.dryCleaning === item?.key}
        onValueChange={(name, key) => {
          setClosetPolicy({
            ...closetPolicy,
            dryCleaning: item.key,
          });
        }}
        title={item?.description}
        container={style.container}
      />
    );
  };

  const renderRentalRequestItem = ({item}) => {
    return (
      <ClosetSubListWithSwitch
        name={item?.key}
        value={closetPolicy?.rentalRequests === item?.key}
        onValueChange={(name, key) => {
          setClosetPolicy({
            ...closetPolicy,
            rentalRequests: item.key,
          });
        }}
        title={item?.description}
        container={style.container}
      />
    );
  };

  const renderShippingItem = ({item}) => {
    return (
      <ClosetSubListWithSwitch
        name={item?.key}
        value={closetPolicy?.shipping === item?.key}
        onValueChange={(name, key) => {
          setClosetPolicy({
            ...closetPolicy,
            shipping: item.key,
          });
        }}
        title={item?.description}
        container={style.container}
      />
    );
  };

  const handleBackPress = () => {
    if (!_.isEqual(user?.closetPolicy, closetPolicy)) {
      dispatch(
        editProfile({
          closetPolicy: closetPolicy,
          editMode: 'editClosetPolicy',
        }),
      );
    }
  };

  //custom back button
  customBaskPress(handleBackPress);

  const onProfileHeaderBackPress = () => {
    handleBackPress();
    if (canGoBack()) {
      goBack();
    }
  };

  return (
    <View style={style.main}>
      <Loader visible={closetPoliciesLoading} />
      <Header />
      <ScrollView>
        <ProfileHeader
          title={strings.yourPolocies}
          isCustomBackPress={true}
          customBackPress={onProfileHeaderBackPress}
        />
        <ProfileCategory
          mainContainer={style.border}
          isSwitchVisible={true}
          mainTitle={strings.dryCleaning}
          titleStyle={style.mainTitle}
        />
        <FlatList
          data={closetPolicies?.policies?.dryCleaning || []}
          renderItem={renderDryCleaningItem}
          keyExtractor={item => item.key}
        />
        <ProfileCategory
          mainContainer={style.border}
          isSwitchVisible={true}
          mainTitle={strings.rentalRequest}
          titleStyle={style.mainTitle}
        />
        <FlatList
          data={closetPolicies?.policies?.rentalRequests || []}
          renderItem={renderRentalRequestItem}
          keyExtractor={item => item.key}
        />
        <ProfileCategory
          mainContainer={style.border}
          isSwitchVisible={true}
          mainTitle={strings.shipping}
          titleStyle={style.mainTitle}
        />
        <FlatList
          data={closetPolicies?.policies?.shipping || []}
          renderItem={renderShippingItem}
          keyExtractor={item => item.key}
        />
      </ScrollView>
    </View>
  );
};
export default ClosetPolicies;
