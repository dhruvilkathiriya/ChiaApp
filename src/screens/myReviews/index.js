import React, {useCallback, useEffect} from 'react';
import {Header, UserItemContent, ProfileHeader} from '../../components';
import {strings} from '../../helper/strings';
import {style} from './styles';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getReviews} from '../../actions/ratingAction';
import {navigate} from '../../navigation/navigationsServices';
import moment from 'moment';
import {getReviewText} from '../../helper/helperFunctions';
import _ from 'lodash';
import {useIsFocused} from '@react-navigation/native';
import {colors} from '../../helper/colors';

const MyReviews = ({navigation}) => {
  const dispatch = useDispatch();

  const {myReviews, reviewsLoading, page, hasNextPage} = useSelector(
    state => state.myReviews,
  );

  const isFocused = useIsFocused();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(
        getReviews({
          page: page,
        }),
      );
    });

    return unsubscribe;
  }, [navigation]);

  // useEffect(() => {
  //   if (isFocused && hasNextPage) {
  //     dispatch(
  //       getReviews({
  //         page: page,
  //       }),
  //     );
  //   }
  // }, [isFocused, hasNextPage]);

  const loadMoreProducts = useCallback(() => {
    if (hasNextPage && !reviewsLoading) {
      dispatch(
        getReviews({
          page: page + 1,
        }),
      );
    }
  }, [hasNextPage, reviewsLoading]);

  const renderFooter = () => {
    return (
      <View style={style.footer}>
        {reviewsLoading ? (
          <View style={{flexDirection: 'row'}}>
            <ActivityIndicator color={colors.secondaryColor} />
            <Text style={style.footerTextStyle}>{'Loading...'}</Text>
          </View>
        ) : null}
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <UserItemContent
        isTopRightTextVisible
        isBottomRightTextVisible
        bottomRightText={'Edit'}
        bottomRightTexStyle={{textTransform: 'uppercase'}}
        headerLeftText={`${item?.user?.firstName} ${item?.user?.lastName}`}
        headerLeftTextStyle={{textTransform: 'uppercase'}}
        headerRightText={`${moment(item?.createdAt).fromNow()}`}
        descriptionText={getReviewText(
          item.comment[_.random(item.comment.length - 1)],
        )}
        descriptionTextStyle={{textTransform: 'uppercase'}}
        profileImageUrl={item?.user?.picture}
        onBottomRightTextPress={() => {
          item?.type === 'seller'
            ? item?.order?.type === 'rent'
              ? navigate('RentingOrderDetails', {data: item?.order})
              : navigate('BoughtOrderDetails', {data: item?.order})
            : item?.order?.type === 'rent'
            ? navigate('LenderOrderDetails', {data: item?.order})
            : navigate('SoldOrderDetails', {data: item?.order});
        }}
      />
    );
  };

  return (
    <View style={style.mainContainer}>
      <Header />
      <ProfileHeader
        title={strings.myReviews}
        titleStyle={style.orderHistoryTitleStyle}
        mainContainer={style.profileHeaderContainer}
      />
      {_.isEmpty(myReviews) ? (
        <View style={style.noReviewViewStyle}>
          <Text style={style.noReviewTextStyle}>No reviews available</Text>
        </View>
      ) : (
        <FlatList
          data={myReviews}
          renderItem={renderItem}
          scrollEnabled={true}
          keyExtractor={item => item.id}
          onEndReachedThreshold={0.5}
          onEndReached={loadMoreProducts}
          ListFooterComponent={renderFooter}
        />
      )}
    </View>
  );
};

export default MyReviews;
