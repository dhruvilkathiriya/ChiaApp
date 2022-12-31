import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import _ from 'lodash';

import {
  BackCloseHeader,
  BagItemView,
  CommonButton,
  ProfileHeader,
  SectionHeader,
  ConfirmModal,
  BillingList,
  SectionListItem,
  Loader,
} from '../../components';
import {colors} from '../../helper/colors';
import {hp} from '../../helper/constants';
import {strings} from '../../helper/strings';
import {createOrder} from '../../actions/orderAction';
import {style} from './style';
import {resetNavigationRoute} from '../../navigation/navigationsServices';

const CheckoutConfirm = ({route}) => {
  const [purchaseCartList, setPurchaseCartList] = useState([]);
  const [rentCartList, setRentCartList] = useState([]);
  const [shippingAddress, setShippingAddress] = useState({});
  const [billingAddress, setBillingAddress] = useState({});
  const [cardDetails, setCardDetails] = useState(route?.params?.cardDetails);
  const {bottom} = useSafeAreaInsets();
  const {navigate} = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [confirmBtnVisible, setConfirmBtnVisible] = useState(false);

  const {cartList} = useSelector(state => state.bag);
  const {user} = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (cartList?.items?.length > 0) {
      let purchaseList = _.filter(cartList?.items || [], {
        type: 'purchase',
      });
      let rentList = _.filter(cartList?.items || [], {
        type: 'rent',
      });
      setPurchaseCartList(purchaseList);
      setRentCartList(rentList);
    } else {
      setPurchaseCartList([]);
      setRentCartList([]);
    }
  }, [cartList]);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setShippingAddress(
        _.find(_.filter(user?.addresses, {type: 'shipping'}), {
          _id: route?.params?.shippingAddress?._id,
        }),
      );
      if (
        !_.isEqual(
          route?.params?.shippingAddress,
          route?.params?.billingAddress,
        )
      ) {
        setBillingAddress(
          _.find(_.filter(user?.addresses, {type: 'billing'}), {
            _id: route?.params?.billingAddress?._id,
          }),
        );
      }
    }
  }, [user, isFocused]);

  const {orderLoading} = useSelector(state => state.order);

  useEffect(() => {
    if (!orderLoading && confirmBtnVisible) {
      setShowModal(true);
    }
  }, [orderLoading, confirmBtnVisible]);

  const onConfirmOrderPress = () => {
    dispatch(createOrder());
    setConfirmBtnVisible(true);
  };

  const renderRentCartItem = ({item}) => {
    return (
      <BagItemView
        rentDateTime={`Delivery on ${moment(item?.deliveryDateStart).format(
          'MMM DD',
        )} by ${moment(item?.deliveryDateStart).format('HHa')}`}
        dateTimeVisible={true}
        productImgSource={{uri: item?.product?.images[0]}}
        name={item?.product?.condition || strings.itemName}
        brand={item?.product?.description || strings.itemBrand}
        size={strings.size}
        price1={`$${item?.product?.originalPrice}`}
        price2={`$${item?.total}`}
        showCancelBtn={true}
      />
    );
  };

  const listRentHeaderComponent = () =>
    !_.isEmpty(rentCartList) && (
      <Text style={style.itemHeaderTextStyle}>{strings.renting}</Text>
    );

  const renderPurchaseCartItem = ({item}) => {
    return (
      <BagItemView
        name={item?.product?.condition || strings.itemName}
        brand={item?.product?.description || strings.itemBrand}
        productImgSource={{uri: item?.product?.images[0]}}
        size={strings.size}
        price1={`$${item?.originalPrice}`}
        price2={`$${item?.total}`}
        showCancelBtn={true}
      />
    );
  };

  const renderChargesItem = ({item}) => {
    return (
      <BillingList
        title={item?.name.charAt(0).toUpperCase() + item?.name.slice(1)}
        subTitle={`$${item?.amount}`}
      />
    );
  };

  const listPurchaseHeaderComponent = () =>
    !_.isEmpty(purchaseCartList) && (
      <Text style={style.itemHeaderTextStyle}>{strings.purchasing}</Text>
    );

  const onEditShippingAddressPress = () => {
    navigate('EditAddress', {address: shippingAddress});
  };

  const onEditBillingAddressPress = () => {
    navigate('EditAddress', {address: billingAddress});
  };

  const onClosePress = () => {
    setShowModal(false);
    resetNavigationRoute('HomeTab');
  };

  const onHeaderClosePress = () => {
    navigate('Bag');
  };

  const onViewOrderPress = () => {
    setShowModal(false);
    //navigate('OrderHistory');
    resetNavigationRoute('OrderHistory');
  };

  return (
    <View style={style.mainContainer}>
      <BackCloseHeader backVisible onClosePress={onHeaderClosePress} />
      <ProfileHeader
        title={strings.checkoutConfirm}
        hideBack={true}
        mainContainer={style.headerContainer}
        titleStyle={style.headerTextStyle}
      />
      <ScrollView>
        <SectionHeader
          onRightBtnPress={onEditShippingAddressPress}
          headerLeftTitle={strings.shippingAddress}
          headerRightTitle={strings.edit}
          children={
            <Text style={style.textStyle}>
              {`${shippingAddress?.line1} ${shippingAddress?.line2} ${shippingAddress?.city}\n` +
                `${shippingAddress?.state}, ${shippingAddress?.country} ${shippingAddress?.postalCode}`}
            </Text>
          }
        />
        {!_.isEqual(
          route?.params?.shippingAddress,
          route?.params?.billingAddress,
        ) && (
          <SectionHeader
            onRightBtnPress={onEditBillingAddressPress}
            headerLeftTitle={strings.billingAddress}
            headerRightTitle={strings.edit}
            children={
              <Text style={style.textStyle}>
                {`${billingAddress?.line1} ${billingAddress?.line2} ${billingAddress?.city}\n` +
                  `${billingAddress?.state}, ${billingAddress?.country} ${billingAddress?.postalCode}`}
              </Text>
            }
          />
        )}
        <SectionHeader
          headerLeftTitle={strings.deliveryDate}
          headerRightTitle={strings.edit}
        />
        <SectionHeader
          headerLeftTitle={strings.billing}
          // headerRightTitle={strings.edit}
          children={
            <SectionListItem
              headerLeftTitle={`${cardDetails?.name || ''}...${
                cardDetails?.last4
              }`}
              headerRightTitle={`EXP ${
                cardDetails?.expMonth
              }/${cardDetails?.expYear.toString().substring(2)}`}
            />
          }
        />
        <FlatList
          data={rentCartList}
          scrollEnabled={false}
          renderItem={renderRentCartItem}
          ListHeaderComponent={listRentHeaderComponent}
          showsVerticalScrollIndicator={false}
          style={style.flatListStyle}
          keyExtractor={item => item._id}
        />

        <FlatList
          data={purchaseCartList}
          scrollEnabled={false}
          renderItem={renderPurchaseCartItem}
          ListHeaderComponent={listPurchaseHeaderComponent}
          showsVerticalScrollIndicator={false}
          style={style.flatListStyle}
          keyExtractor={item => item._id}
        />
        <BillingList
          title={strings.orderSubTotal}
          subTitle={`$${cartList?.subTotal}`}
        />
        <BillingList
          title={strings.shipping}
          subTitle={`$${cartList?.shippingCharge}`}
        />
        <FlatList
          data={cartList?.charges}
          scrollEnabled={false}
          renderItem={renderChargesItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item._id}
        />
        <BillingList
          title={strings.grandTotal}
          subTitle={`$${cartList?.totalAmount}`}
        />
      </ScrollView>
      <View
        style={{
          backgroundColor: colors.secondaryBg,
          paddingTop: hp(1.6),
          paddingBottom: bottom + hp(1.6),
        }}>
        <CommonButton
          title={strings.confirmOrder}
          onPress={onConfirmOrderPress}
        />
      </View>
      <ConfirmModal
        modalVisible={showModal}
        title={'ORDER CONFIRMED'}
        button1={'CLOSE'}
        button2={'VIEW ORDERS'}
        onButton1Press={onClosePress}
        onButton2Press={onViewOrderPress}
      />
      <Loader visible={orderLoading} />
    </View>
  );
};
export default CheckoutConfirm;
