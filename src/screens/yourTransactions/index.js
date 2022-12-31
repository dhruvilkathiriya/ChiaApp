import React, {useCallback, useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import _ from 'lodash';

import {
  Header,
  Loader,
  ProfileHeader,
  RoundedTabView,
  UserItemContent,
} from '../../components';
import {strings} from '../../helper/strings';
import {style} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {getOrdersForCurrentCloset} from '../../actions/orderAction';
import {colors} from '../../helper/colors';
const moment = require('moment');

const YourTransactions = ({navigation}) => {
  const [isLending, setIsLending] = useState('true');

  const {
    currentClosetOrders,
    hasNextPage,
    lendingOrderPage,
    soldOrderPage,
    currentClosetOrderLoading,
    pageLoading,
    limit,
  } = useSelector(state => state.transaction);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getOrdersForCurrentCloset({
        page: lendingOrderPage,
        limit: limit,
        type: 'rent',
      }),
    );
  }, []);

  const {navigate, canGoBack, goBack} = useNavigation();

  const onLendingItemPress = item =>
    navigate('LenderOrderDetails', {data: item});

  const onSoldItemPress = item => navigate('SoldOrderDetails', {data: item});

  const onLeftTabPress = () => {
    setIsLending(true);
    dispatch(
      getOrdersForCurrentCloset({
        page: 1,
        limit: limit,
        type: 'rent',
      }),
    );
  };
  const onRightTabPress = () => {
    setIsLending(false);
    dispatch(
      getOrdersForCurrentCloset({
        page: 1,
        limit: limit,
        type: 'purchase',
      }),
    );
  };

  const renderItemLending = ({item}) => {
    const userName = `@${
      item?.owner?.firstName.toString().toLowerCase() || ''
    }`;
    const rentalStartDate = moment(item.deliveryDateStart).format('MM/DD');
    const rentalEndDate = moment(item.deliveryDateEnd).format('MM/DD');
    return (
      <UserItemContent
        profileImageUrl={item?.product?.images[0]}
        isTopRightTextVisible
        isBottomRightTextVisible
        bottomRightText={'View Details'}
        bottomRightTexStyle={{textTransform: 'uppercase'}}
        descriptionTextStyle={{textTransform: 'uppercase'}}
        headerLeftText={userName}
        data={item}
        headerRightText={`${rentalStartDate}-${rentalEndDate}`}
        descriptionText={item?.product?.description}
        onBottomRightTextPress={() => onLendingItemPress(item)}
        onItemPress={() => onLendingItemPress(item)}
      />
    );
  };

  const renderItemSold = ({item}) => {
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
        onBottomRightTextPress={() => onSoldItemPress(item)}
        onItemPress={() => onSoldItemPress(item)}
      />
    );
  };

  const customBackPress = () => {
    if (!canGoBack()) {
      navigation.replace('HomeTab');
    } else {
      goBack();
    }
  };

  const loadMoreProducts = useCallback(() => {
    if (
      hasNextPage &&
      !currentClosetOrderLoading &&
      !_.isEmpty(currentClosetOrders)
    ) {
      dispatch(
        getOrdersForCurrentCloset({
          page: isLending ? lendingOrderPage + 1 : soldOrderPage + 1,
          limit: limit,
          type: isLending ? 'rent' : 'purchase',
        }),
      );
    }
  }, [hasNextPage, currentClosetOrderLoading]);

  const renderFooter = () => {
    return (
      <View style={style.footer}>
        {currentClosetOrderLoading ? (
          <View style={{flexDirection: 'row'}}>
            <ActivityIndicator color={colors.secondaryColor} />
            <Text style={style.footerTextStyle}>{'Loading...'}</Text>
          </View>
        ) : null}
      </View>
    );
  };

  const emptyTransactionComponent = () => {
    return (
      <View style={style.emptyCartViewStyle}>
        <Text style={style.emptyCartTextStyle}>
          No transactions available...
        </Text>
      </View>
    );
  };

  return (
    <View style={style.mainContainer}>
      <Header />
      <ProfileHeader
        title={strings.yourTransaction}
        titleStyle={style.orderHistoryTitleStyle}
        mainContainer={style.profileHeaderContainer}
        isCustomBackPress={true}
        customBackPress={customBackPress}
      />
      <RoundedTabView
        leftTabTitle={'LENDING'}
        rightTabTitle={'SOLD'}
        onLeftTabPress={onLeftTabPress}
        onRightTabPress={onRightTabPress}
        isLeftTabSelected
      />
      {pageLoading && <Loader visible={pageLoading} />}
      <FlatList
        contentContainerStyle={{flexGrow: 1}}
        data={currentClosetOrders}
        renderItem={isLending ? renderItemLending : renderItemSold}
        scrollEnabled={true}
        keyExtractor={item => item.id}
        onEndReachedThreshold={0.5}
        onEndReached={loadMoreProducts}
        ListEmptyComponent={emptyTransactionComponent}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export default YourTransactions;
