import moment from 'moment';
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
import _ from 'lodash';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getSellerOptions,
  rateOrder,
  updateOrderRating,
} from '../../actions/ratingAction';
import {getOrderInfo} from '../../actions/orderAction';

const BoughtOrderDetails = ({route}) => {
  const {data} = route.params;
  const [reviewData, setReviewData] = useState([]);
  const [ratingCounter, setRatingCounter] = useState(0);
  const [comments, setComments] = useState([]);
  const [ratings, setRatings] = useState({});
  const [rateOrderFirstTime, setRateOrderFirstTime] = useState(true);

  const {sellerOptionList} = useSelector(state => state.rating);

  const {orderInfo, orderInfoLoading} = useSelector(state => state.order);

  const {orderRating} = useSelector(state => state.rating);

  const dispatch = useDispatch();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(
        getOrderInfo({
          orderId: data?.id,
        }),
      );
      dispatch(getSellerOptions());
    }
  }, [isFocused]);

  useEffect(() => {
    if (sellerOptionList.length > 0) {
      let finalData = sellerOptionList.map(item => {
        if (_.includes(ratings?.comment, item.key)) {
          return {...item, isSelected: true};
        } else {
          return {...item, isSelected: false};
        }
      });
      setReviewData(finalData);
    }
  }, [sellerOptionList, ratings]);

  useEffect(() => {
    if (!_.isEmpty(orderInfo?.myRating)) {
      setRatings(orderInfo?.myRating);
      setRatingCounter(orderInfo?.myRating?.rate);
      setComments(orderInfo?.myRating?.comment);
    } else {
      setRatings({});
      setRatingCounter(0);
      setComments([]);
    }
  }, [orderInfo]);

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

  const updateRating = (ratingStar, comment) => {
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
            order: orderInfo?.id,
            type: 'seller',
            comment: comment,
            rate: ratingStar || 1,
            images: [],
          }),
        );
      }
    }
  };

  return (
    <View style={style.mainContainer}>
      <Header />
      <Loader visible={orderInfoLoading} />
      <ProfileHeader
        title={strings.orderDetails}
        titleStyle={style.orderHistoryTitleStyle}
        mainContainer={style.profileHeaderContainer}
      />
      <ScrollView>
        <UserProfile
          userName={orderInfo?.owner?.firstName || ''}
          profileName={`@${orderInfo?.owner?.firstName || ''}`}
          userProfileImg={{uri: orderInfo?.owner?.picture}}
        />
        <OrderDetailsCategory mainTitle={'BOUGHT'}>
          <OrderDetailsSubCategory
            leftText={`STATUS: ${orderInfo?.status || ''}`}
          />
          <OrderDetailsSubCategory
            leftText={`DATE: ${moment(orderInfo?.deliveryDateStart).format(
              'MMM DD',
            )}`}
          />
        </OrderDetailsCategory>

        <ProductItemView
          name={orderInfo?.product?.condition?.type || ''}
          brand={orderInfo?.product?.description || ''}
          size={strings.size}
          price1={`$${orderInfo?.product?.originalPrice || ''}`}
          price2={`$${orderInfo?.product?.sellingPrice || ''}`}
          productImgSource={{uri: orderInfo?.product?.images[0]}}
        />

        <OrderDetailsSubCategory
          leftText={'Item Price'}
          rightText={`$${orderInfo?.product?.sellingPrice || ''}`}
          rightTextStyle={style.rightTextStyle}
        />
        {_.map(data.charges || [], item => {
          return (
            <OrderDetailsSubCategory
              leftText={`${item.name.replace('_', ' ')}`}
              rightText={`$${item.amount}`}
            />
          );
        })}
        <OrderDetailsSubCategory
          leftText={'Grand Total'}
          rightText={`$${orderInfo?.total}`}
          rightTextStyle={style.rightTextStyle}
        />

        <OrderDetailsCategory
          mainTitle={'SHIPPING DETAILS'}
          mainContainer={style.shippingDetailsView}>
          <AddressDetailsView
            leftText={
              `${orderInfo?.shippingAddress?.line1 || ''} ${
                orderInfo?.shippingAddress?.line2 || ''
              } ${orderInfo?.shippingAddress?.city || ''}\n` +
              `${orderInfo?.shippingAddress?.state || ''}, ${
                orderInfo?.shippingAddress?.country || ''
              } ${orderInfo?.shippingAddress?.postalCode || ''}`
            }
            rightText={'Track Shipment'}
          />
        </OrderDetailsCategory>

        <OrderDetailsCategory
          mainTitle={'BILLING DETAILS'}
          mainContainer={style.shippingDetailsView}>
          <AddressDetailsView
            leftText={
              `${orderInfo?.billingAddress?.line1 || ''} ${
                orderInfo?.billingAddress?.line2 || ''
              } ${orderInfo?.billingAddress?.city || ''}\n` +
              `${orderInfo?.billingAddress?.state || ''}, ${
                orderInfo?.billingAddress?.country || ''
              } ${orderInfo?.billingAddress?.postalCode || ''}`
            }
            rightText={''}
          />
        </OrderDetailsCategory>
        {_.isEqual(orderInfo?.status, 'confirmed') && (
          <>
            <OrderDetailsCategory
              mainTitle={'REVIEW SELLER'}
              titleStyle={style.renterPhotoText}>
              <FlatList
                data={reviewData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
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

export default BoughtOrderDetails;
