import React, {useState} from 'react';
import {
  FlatList,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';

import {
  AddItemButton,
  ProfileCategory,
  SectionHeader,
  ProfileSubCategory,
} from '../../components';
import ClosetList from '../../components/closet/closetList';
import {strings} from '../../helper/strings';
import {icons} from '../../helper/iconsConstants';
import {editProfile} from '../../actions/profileActions';
import {style} from './style';

const EditCloset = () => {
  const {navigate} = useNavigation();

  const dispatch = useDispatch();
  const {user} = useSelector(state => state.user);
  const [vacationMode, setVacationMode] = useState(user?.vacationMode);
  const onListNewPress = () => navigate('Listing');

  // const onAvailablePress = () => navigate('AvailableTo');
  const onPolicyPress = () => navigate('ClosetPolicies');
  const onTransactionPress = () => navigate('YourTransactions');
  const onViewAllPress = () => navigate('InYourCloset');

  const ClosetItemList = ({item}) => {
    return <ClosetList item={item} />;
  };

  const onCheckPress = () => {
    dispatch(
      editProfile({
        vacationMode: !vacationMode,
        editMode: 'editVacationMode',
      }),
    );
    setVacationMode(!vacationMode);
  };

  const FlatListItemSeparator = () => {
    return <View style={style.flatlistSeprator} />;
  };
  const {products} = useSelector(state => state.currentUserProducts);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={style.mainView}>
      <AddItemButton onPress={onListNewPress} />
      <SectionHeader
        headerLeftTitle={strings.inYourCloset}
        headerRightTitle={strings.viewAll}
        mainContainer={style.mainContaiber}
        onRightBtnPress={onViewAllPress}
      />
      <View>
        <FlatList
          style={style.flatlistContainer}
          ItemSeparatorComponent={FlatListItemSeparator}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[].concat.apply(
            [],
            _.filter(products || [], {
              active: true,
            }).map(item => item.images[0]),
          )}
          renderItem={ClosetItemList}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={style.border} />
      <ProfileCategory
        isSwitchVisible={true}
        mainTitle={strings.receipts}
        mainContainer={style.subFieldMainText}>
        <ProfileSubCategory
          category={strings.viewAllPastTransation}
          onPress={onTransactionPress}
        />
      </ProfileCategory>
      <View style={style.border} />
      <ProfileCategory
        isSwitchVisible={true}
        mainTitle={strings.closetSetting}
        mainContainer={style.subFieldMainText}>
        <View style={style.vacationModeContainerStyle}>
          <Text style={style.vacationModeTextStyle}>Vacation Mode</Text>
          <TouchableOpacity
            style={style.checkBoxContainer}
            activeOpacity={1}
            onPress={onCheckPress}>
            {vacationMode && (
              <Image
                source={icons.tick}
                resizeMode={'contain'}
                style={style.tickIcon}
              />
            )}
          </TouchableOpacity>
        </View>
        <ProfileSubCategory
          category={strings.yourClodetPolicies}
          onPress={onPolicyPress}
        />
        {/* <ProfileSubCategory
            category={strings.availableTo}
            onPress={onAvailablePress}
          /> */}
      </ProfileCategory>
    </ScrollView>
  );
};

export default EditCloset;
