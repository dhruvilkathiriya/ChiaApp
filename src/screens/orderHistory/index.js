import React, {useCallback, useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';
import moment from 'moment';

import {
  Header,
  UserItemContent,
  ProfileHeader,
  RoundedTabView,
  Loader,
} from '../../components';
import {strings} from '../../helper/strings';
import {style} from './styles';
import {getOrders} from '../../actions/orderAction';
import {colors} from '../../helper/colors';
import {resetNavigationRoute} from '../../navigation/navigationsServices';

const OrderHistory = () => {
  const [isPastRental, setIsPastRental] = useState(true);

  const {
    orders,
    hasNextPage,
    rentOrderPage,
    orderLoading,
    purchaseOrderPage,
    pageLoading,
    limit,
  } = useSelector(state => state.order);

  const {navigate, canGoBack, goBack} = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getOrders({
        page: rentOrderPage,
        limit: limit,
        type: 'rent',
      }),
    );
  }, []);

  const onRentItemPress = item => navigate('RentingOrderDetails', {data: item});

  const onBoughtItemPress = item =>
    navigate('BoughtOrderDetails', {data: item});

  const onLeftTabPress = () => {
    setIsPastRental(true);
    dispatch(
      getOrders({
        page: 1,
        limit: limit,
        type: 'rent',
      }),
    );
  };

  const onRightTabPress = () => {
    setIsPastRental(false);
    dispatch(
      getOrders({
        page: 1,
        limit: limit,
        type: 'purchase',
      }),
    );
  };

  const loadMoreProducts = useCallback(() => {
    if (hasNextPage && !orderLoading && !_.isEmpty(orders)) {
      dispatch(
        getOrders({
          page: isPastRental ? rentOrderPage + 1 : purchaseOrderPage + 1,
          limit: limit,
          type: isPastRental ? 'rent' : 'purchase',
        }),
      );
    }
  }, [hasNextPage, orderLoading]);

  const emptyTransactionComponent = () => {
    return (
      <View style={style.emptyCartViewStyle}>
        <Text style={style.emptyCartTextStyle}>
          No Order History available...
        </Text>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View style={style.footer}>
        {orderLoading ? (
          <View style={{flexDirection: 'row'}}>
            <ActivityIndicator color={colors.secondaryColor} />
            <Text style={style.footerTextStyle}>{'Loading...'}</Text>
          </View>
        ) : null}
      </View>
    );
  };

  const renderItemRental = ({item}) => {
    const userName = `@${
      item?.owner?.firstName.toString().toLowerCase() || ''
    }`;
    const rentalStartDate = moment(item.deliveryDateStart).format('MM/DD');
    const rentalEndDate = moment(item.deliveryDateEnd).format('MM/DD');
    return (
      <UserItemContent
        profileImageUrl={item?.owner?.picture}
        isTopRightTextVisible
        isBottomRightTextVisible
        bottomRightText={'View Details'}
        bottomRightTexStyle={{textTransform: 'uppercase'}}
        descriptionTextStyle={{textTransform: 'uppercase'}}
        headerLeftText={userName}
        data={item}
        headerRightText={`${rentalStartDate}-${rentalEndDate}`}
        descriptionText={item?.product?.description}
        onBottomRightTextPress={() => onRentItemPress(item)}
        onItemPress={() => onRentItemPress(item)}
      />
    );
  };

  const renderItemPurchase = ({item}) => {
    const userName = `@${
      item?.owner?.firstName.toString().toLowerCase() || ''
    }`;
    const purchaseDate = moment(item?.deliveryDateStart).format('MM/DD');
    return (
      <UserItemContent
        profileImageUrl={item?.owner?.picture}
        isTopRightTextVisible
        isBottomRightTextVisible
        bottomRightText={'View Details'}
        bottomRightTexStyle={{textTransform: 'uppercase'}}
        descriptionTextStyle={{textTransform: 'uppercase'}}
        headerLeftText={userName}
        data={item}
        headerRightText={`${purchaseDate}`}
        descriptionText={item?.product?.description}
        onBottomRightTextPress={() => onBoughtItemPress(item)}
        onItemPress={() => onBoughtItemPress(item)}
      />
    );
  };

  const customBackPress = () => {
    if (!canGoBack()) {
      resetNavigationRoute('User');
    } else {
      goBack();
    }
  };

  return (
    <View style={style.mainContainer}>
      <Header />
      <ProfileHeader
        title={strings.orderHistory}
        titleStyle={style.orderHistoryTitleStyle}
        mainContainer={style.profileHeaderContainer}
        isCustomBackPress={true}
        customBackPress={customBackPress}
      />
      <RoundedTabView
        leftTabTitle={'PAST RENTAL'}
        rightTabTitle={'PAST PURCHASE'}
        onLeftTabPress={onLeftTabPress}
        onRightTabPress={onRightTabPress}
        isLeftTabSelected
      />
      {pageLoading && <Loader visible={pageLoading} />}
      <FlatList
        contentContainerStyle={{flexGrow: 1}}
        data={orders}
        renderItem={isPastRental ? renderItemRental : renderItemPurchase}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        onEndReachedThreshold={0.5}
        onEndReached={loadMoreProducts}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={emptyTransactionComponent}
      />
    </View>
  );
};

export default OrderHistory;
