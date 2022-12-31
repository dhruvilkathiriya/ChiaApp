import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import _ from 'lodash';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  Header,
  ProfileHeader,
  SectionHeader,
  SectionListItem,
} from '../../components';
import {strings} from '../../helper/strings';
import {style} from './styles';

const MyAddress = ({navigation}) => {
  const [shippingAddresses, setShippingAddresses] = useState([]);
  const [billingAddresses, setBillingAddresses] = useState([]);
  const [returnAddresses, setReturnAddresses] = useState([]);
  const {navigate} = useNavigation();

  const onAddAddressPress = item => {
    navigate('AddAddress', item);
  };

  const onEditAddressPress = item => navigate('EditAddress', {address: item});

  const {user} = useSelector(state => state.user);

  useEffect(() => {
    const addresses = user?.addresses || [];
    if (addresses?.length > 0) {
      let shippingAddressList = _.filter(addresses || [], {
        type: 'shipping',
      });
      let billingAddressList = _.filter(addresses || [], {
        type: 'billing',
      });
      let returnAddressList = _.filter(addresses || [], {
        type: 'return',
      });
      setShippingAddresses(shippingAddressList);
      setBillingAddresses(billingAddressList);
      setReturnAddresses(returnAddressList);
    }
  }, [user]);

  const renderItem = ({item}) => {
    return (
      <SectionListItem
        headerLeftTitle={`${item?.line1} ${item?.line2} ${item?.city}`}
        headerRightTitle={strings.edit}
        onItemPress={() => onEditAddressPress(item)}
      />
    );
  };

  return (
    <View style={style.mainContainer}>
      <Header />
      <KeyboardAwareScrollView bounces={false} nestedScrollEnabled>
        <ProfileHeader
          title={strings.myAddress}
          titleStyle={style.addAddressTitleStyle}
          closeIconContainer={style.closeIconContainer}
        />

        <SectionHeader
          headerLeftTitle={strings.savedAdresses}
          headerRightTitle={strings.add}
          onRightBtnPress={() => onAddAddressPress({type: 'shipping'})}>
          <FlatList
            data={shippingAddresses}
            renderItem={renderItem}
            scrollEnabled={false}
            keyExtractor={item => item._id}
          />
        </SectionHeader>

        <View style={style.itemSepratorViewStyle} />

        <SectionHeader
          headerLeftTitle={strings.billingAddress}
          headerRightTitle={strings.add}
          onRightBtnPress={() => onAddAddressPress({type: 'billing'})}>
          <FlatList
            data={billingAddresses}
            renderItem={renderItem}
            scrollEnabled={false}
            keyExtractor={item => item._id}
          />
        </SectionHeader>

        <View style={style.itemSepratorViewStyle} />

        <SectionHeader
          headerLeftTitle={strings.returnAddress}
          headerRightTitle={strings.add}
          onRightBtnPress={() => onAddAddressPress({type: 'return'})}>
          <FlatList
            data={returnAddresses}
            renderItem={renderItem}
            scrollEnabled={false}
            keyExtractor={item => item._id}
          />
        </SectionHeader>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default MyAddress;
