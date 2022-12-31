import _ from 'lodash';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, ScrollView, FlatList, Text} from 'react-native';
import {useIsFocused, useNavigation} from '@react-navigation/native';

import {
  BackCloseHeader,
  ProfileHeader,
  BagItemView,
  BottomView,
  Loader,
} from '../../components';

import {strings} from '../../helper/strings';
import {style} from './styles';
import {
  getCurrentUserCart,
  removeProductFromCart,
} from '../../actions/bagAction';
import moment from 'moment';
import SimpleToast from 'react-native-simple-toast';

const Bag = () => {
  const [purchaseCartList, setPurchaseCartList] = useState([]);
  const [rentCartList, setRentCartList] = useState([]);

  const {navigate, goBack} = useNavigation();

  const dispatch = useDispatch();

  const onButtonPress = () => {
    if (!_.isEmpty(cartList?.items)) {
      navigate('CheckOut');
    } else {
      SimpleToast.show('Cart is empty. Add Some Product');
    }
  };

  const {cartList, cartLoading} = useSelector(state => state.bag);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(getCurrentUserCart());
    }
  }, [isFocused]);

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

  const onCancelItemPress = item => {
    const data = {
      product: item?.product?._id,
    };
    dispatch(removeProductFromCart(data));
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
        onCancelPress={() => onCancelItemPress(item)}
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
        onCancelPress={() => onCancelItemPress(item)}
      />
    );
  };

  const listPurchaseHeaderComponent = () =>
    !_.isEmpty(purchaseCartList) && (
      <Text style={style.itemHeaderTextStyle}>{strings.purchasing}</Text>
    );

  return (
    <View style={style.mainContainer}>
      <BackCloseHeader onClosePress={goBack} />
      <ProfileHeader
        title={strings.yourBag}
        hideBack={true}
        mainContainer={style.headerContainer}
        titleStyle={style.headerTextStyle}
      />
      {_.isEmpty(cartList?.items) ? (
        <View style={style.emptyCartViewStyle}>
          <Text style={style.emptyCartTextStyle}>
            Sorry your cart is Empty.. Add some products
          </Text>
        </View>
      ) : (
        <ScrollView bounces={false}>
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
        </ScrollView>
      )}
      <BottomView onPress={onButtonPress} subValue={cartList?.subTotal} />
      <Loader visible={cartLoading} />
    </View>
  );
};

export default Bag;
