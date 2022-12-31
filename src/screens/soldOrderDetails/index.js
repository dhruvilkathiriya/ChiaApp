import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';

import {
  AddressDetailsView,
  AuthButton,
  CheckBoxView,
  Header,
  Loader,
  OrderDetailsCategory,
  OrderDetailsSubCategory,
  ProductItemView,
  ProfileHeader,
  Rating,
  UserProfile,
} from '../../components';
import {wp} from '../../helper/constants';
import {strings} from '../../helper/strings';
import {style} from './styles';
import moment from 'moment';
import _ from 'lodash';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getBuyerOptions,
  rateOrder,
  updateOrderRating,
} from '../../actions/ratingAction';
import {getClosetOrderInfo} from '../../actions/orderAction';

const SoldOrderDetails = ({route}) => {
  const {data} = route.params;
  const [reviewData, setReviewData] = useState([]);
  const [ratingCounter, setRatingCounter] = useState(0);
  const [comments, setComments] = useState([]);
  const [ratings, setRatings] = useState({});
  const [rateOrderFirstTime, setRateOrderFirstTime] = useState(true);

  const {buyerOptionList} = useSelector(state => state.rating);

  const {closetOrderInfo, closetOrderInfoLoading} = useSelector(
    state => state.order,
  );

  const {orderRating} = useSelector(state => state.rating);

  const dispatch = useDispatch();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(
        getClosetOrderInfo({
          orderId: data?.id,
        }),
      );
      dispatch(getBuyerOptions());
    }
  }, [isFocused]);

  useEffect(() => {
    if (!_.isEmpty(closetOrderInfo?.myRating)) {
      setRatings(closetOrderInfo?.myRating);
      setRatingCounter(closetOrderInfo?.myRating?.rate);
      setComments(closetOrderInfo?.myRating?.comment);
    } else {
      setRatings({});
      setRatingCounter(0);
      setComments([]);
    }
  }, [closetOrderInfo]);

  useEffect(() => {
    if (!_.isEmpty(orderRating?.id)) {
      setRatings(orderRating);
      setRatingCounter(orderRating?.rate);
      setComments(orderRating?.comment);
    } else {
      setRatings({});
      setRatingCounter(0);
      setComments([]);
    }
  }, [orderRating]);

  useEffect(() => {
    if (reviewData.length > 0) {
      let commentsData = _.filter(reviewData, {isSelected: true}).map(item => {
        return item.key;
      });
      setComments(commentsData);
    }
  }, [reviewData]);

  useEffect(() => {
    if (buyerOptionList.length > 0) {
      let finalData = buyerOptionList.map(item => {
        if (_.includes(ratings?.comment, item.key)) {
          return {...item, isSelected: true};
        } else {
          return {...item, isSelected: false};
        }
      });
      setReviewData(finalData);
    }
  }, [buyerOptionList, ratings]);

  const onReviewItemPress = item => {
    reviewData.map(reviewItem => {
      const reviewItemName = reviewItem;
      if (reviewItemName.key === item.key) {
        reviewItemName.isSelected = !reviewItemName.isSelected;
      } else {
        return {...reviewItemName};
      }
      return null;
    });
    updateRating(
      ratingCounter,
      _.filter(reviewData, {isSelected: true}).map(item => {
        return item.key;
      }),
    );
    setReviewData([...reviewData]);
  };

  const renderItem = ({item}) => {
    return (
      <CheckBoxView item={item} onItemPress={() => onReviewItemPress(item)} />
    );
  };

  const {navigate} = useNavigation();

  const onNeedHelpPress = () => {
    navigate('NeedHelp');
  };

  function updateRating(ratingStar, comment) {
    if (!_.isEmpty(ratings?.id)) {
      dispatch(
        updateOrderRating({
          ratingId: ratings?.id,
          comment: comment,
          ...(!_.isEqual(ratingStar, 0) && {rate: ratingStar}),
          images: [],
        }),
      );
    } else {
      if (rateOrderFirstTime) {
        setRateOrderFirstTime(false);
        dispatch(
          rateOrder({
            order: closetOrderInfo?.id,
            type: 'buyer',
            comment: comment,
            rate: ratingStar || 1,
            images: [],
          }),
        );
      }
    }
  }

  return (
    <View style={style.mainContainer}>
      <Header />
      <Loader visible={closetOrderInfoLoading} />
      <ProfileHeader
        title={strings.orderDetails}
        titleStyle={style.orderHistoryTitleStyle}
        mainContainer={style.profileHeaderContainer}
      />
      <ScrollView>
        <UserProfile
          userName={closetOrderInfo?.owner?.firstName || ''}
          profileName={`@${closetOrderInfo?.owner?.firstName || ''}`}
          userProfileImg={{uri: closetOrderInfo?.owner?.picture}}
        />
        <OrderDetailsCategory mainTitle={'SOLD'}>
          <OrderDetailsSubCategory
            leftText={`STATUS: ${closetOrderInfo?.status}`}
          />
          <OrderDetailsSubCategory
            leftText={`DATE: ${moment(
              closetOrderInfo?.deliveryDateStart,
            ).format('DD MMM YYYY')}`}
          />
        </OrderDetailsCategory>

        <ProductItemView
          name={closetOrderInfo?.product?.condition?.type || ''}
          brand={closetOrderInfo?.product?.description || ''}
          size={strings.size}
          price1={`$${closetOrderInfo?.product?.originalPrice || ''}`}
          price2={`$${closetOrderInfo?.product?.sellingPrice || ''}`}
          productImgSource={{uri: closetOrderInfo?.product?.images[0]}}
        />

        <OrderDetailsSubCategory
          leftText={'Item Price'}
          rightText={`$${closetOrderInfo?.product?.sellingPrice || ''}`}
          rightTextStyle={style.rightTextStyle}
        />
        {_.map(closetOrderInfo?.charges || [], item => {
          return (
            <OrderDetailsSubCategory
              leftText={`${item.name.replace('_', ' ')}`}
              rightText={`$${item.amount}`}
            />
          );
        })}
        <OrderDetailsSubCategory
          leftText={'Grand Total'}
          rightText={`$${closetOrderInfo?.total || ''}`}
          rightTextStyle={style.rightTextStyle}
        />

        <OrderDetailsCategory mainTitle={'YOUR EARNINGS'}>
          <OrderDetailsSubCategory
            leftText={'Grand Total'}
            rightText={`$${closetOrderInfo?.total || ''}`}
            rightTextStyle={style.rightTextStyle}
          />
          {_.map(closetOrderInfo?.ownerEarningCharges || [], item => {
            return (
              <OrderDetailsSubCategory
                leftText={`${item.name.replace('_', ' ')}`}
                rightText={`-$${item.amount}`}
              />
            );
          })}
          <OrderDetailsSubCategory
            leftText={'Total Earnings'}
            rightText={`$${closetOrderInfo?.totalEarnings || ''}`}
            leftTextStyle={style.rightTextStyle}
            rightTextStyle={style.rightTextStyle}
          />
        </OrderDetailsCategory>

        <OrderDetailsCategory
          mainTitle={'SHIPPING DETAILS'}
          mainContainer={style.shippingDetailsView}>
          <AddressDetailsView
            leftText={
              `${closetOrderInfo?.shippingAddress?.line1 || ''} ${
                closetOrderInfo?.shippingAddress?.line2 || ''
              } ${closetOrderInfo?.shippingAddress?.city || ''}\n` +
              `${closetOrderInfo?.shippingAddress?.state || ''}, ${
                closetOrderInfo?.shippingAddress?.country || ''
              } ${closetOrderInfo?.shippingAddress?.postalCode || ''}`
            }
            rightText={'View Shipping Label'}
          />
        </OrderDetailsCategory>
        {_.isEqual(closetOrderInfo?.status, 'confirmed') && (
          <>
            <OrderDetailsCategory
              mainTitle={'REVIEW BUYER'}
              titleStyle={style.renterPhotoText}>
              <FlatList
                data={reviewData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </OrderDetailsCategory>

            <Rating
              defaultRating={ratingCounter}
              size={wp(6.4)}
              onFinishRating={rating => {
                updateRating(rating, comments);
                setRatingCounter(rating);
              }}
            />
          </>
        )}

        <AuthButton
          title={'NEED HELP?'}
          onPress={onNeedHelpPress}
          containerStyle={style.saveBtnStyle}
          titleTextStyle={style.btnTitleStyle}
        />
      </ScrollView>
    </View>
  );
};

export default SoldOrderDetails;
