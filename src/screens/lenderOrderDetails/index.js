import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, Image, View} from 'react-native';

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
  approveReviewedImages,
  getRenterOptions,
  rateOrder,
  updateOrderRating,
} from '../../actions/ratingAction';
import {getClosetOrderInfo} from '../../actions/orderAction';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../helper/colors';
import {icons} from '../../helper/iconsConstants';

const LenderOrderDetails = ({route}) => {
  const {data} = route.params;
  const [reviewData, setReviewData] = useState([]);
  const [ratingCounter, setRatingCounter] = useState(5);
  const [comments, setComments] = useState([]);
  const [ratings, setRatings] = useState({});
  const [otherUserRatings, setOtherUserRatings] = useState({});
  const [rateOrderFirstTime, setRateOrderFirstTime] = useState(true);

  const {closetOrderInfo, closetOrderInfoLoading} = useSelector(
    state => state.order,
  );

  const {orderRating, otherUserRating} = useSelector(state => state.rating);

  const {renterOptionList} = useSelector(state => state.rating);

  const dispatch = useDispatch();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(
        getClosetOrderInfo({
          orderId: data?.id,
        }),
      );
      dispatch(getRenterOptions());
    }
  }, [isFocused]);

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
    if (!_.isEmpty(closetOrderInfo?.otherUserRating)) {
      setOtherUserRatings(closetOrderInfo?.otherUserRating);
    } else {
      setOtherUserRatings({});
    }
  }, [closetOrderInfo]);

  useEffect(() => {
    if (!_.isEmpty(otherUserRating)) {
      setOtherUserRatings(otherUserRating);
    } else {
      setOtherUserRatings({});
    }
  }, [otherUserRating]);

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
    if (reviewData.length > 0) {
      let commentsData = _.filter(reviewData, {isSelected: true}).map(item => {
        return item.key;
      });
      setComments(commentsData);
    }
  }, [reviewData]);

  useEffect(() => {
    if (renterOptionList.length > 0) {
      let finalData = renterOptionList.map(item => {
        if (_.includes(ratings?.comment, item.key)) {
          return {...item, isSelected: true};
        } else {
          return {...item, isSelected: false};
        }
      });
      setReviewData(finalData);
    }
  }, [renterOptionList, ratings]);

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
      <TouchableOpacity
        style={style.photoViewStyle}
        onPress={() => {
          onApproveImagePress(item);
        }}>
        <View>
          <Image
            resizeMode={'cover'}
            source={{uri: item?.url}}
            style={style.photoViewStyle}
          />
          <View
            style={[
              style.tickContainer,
              {
                backgroundColor: item?.approved
                  ? colors.checkBoxBg
                  : colors.whiteBg,
              },
            ]}>
            {item?.approved && (
              <Image
                source={icons.tick}
                resizeMode={'contain'}
                style={style.tickIcon}
              />
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderReviewItem = ({item}) => {
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
            order: closetOrderInfo?.id,
            type: 'buyer',
            comment: comment,
            rate: ratingStar || 1,
            images: [],
          }),
        );
      }
    }
  };

  const onApproveImagePress = item => {
    dispatch(
      approveReviewedImages({
        ratingId: otherUserRatings?.id,
        imageId: item?._id,
        approved: !item?.approved,
      }),
    );
  };

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
        <OrderDetailsCategory mainTitle={'RENTING'}>
          <OrderDetailsSubCategory leftText={'STATUS: Returned'} />
          <OrderDetailsSubCategory
            leftText={`RENTAL DATES: ${moment(
              closetOrderInfo?.deliveryDateStart,
            ).format('MMM DD')}-${moment(
              new Date(closetOrderInfo?.deliveryDateStart),
              'DD-MM-YYYY',
            )
              .add(closetOrderInfo?.rentalPeriodDay - 1, 'days')
              .format('DD')}`}
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
          leftText={'Order Subtotal'}
          rightText={`$${closetOrderInfo?.subTotal || ''}`}
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
          rightText={`$${closetOrderInfo?.total || ''}`}
          rightTextStyle={style.rightTextStyle}
        />

        <OrderDetailsCategory mainTitle={'YOUR EARNINGS'}>
          <OrderDetailsSubCategory
            leftText={'Grand Total'}
            rightText={`$${closetOrderInfo?.total || ''}`}
            rightTextStyle={style.rightTextStyle}
          />
          {_.map(data.ownerEarningCharges || [], item => {
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
              `${closetOrderInfo?.billingAddress?.line1 || ''} ${
                closetOrderInfo?.billingAddress?.line2 || ''
              } ${closetOrderInfo?.billingAddress?.city || ''}\n` +
              `${closetOrderInfo?.billingAddress?.state || ''}, ${
                closetOrderInfo?.billingAddress?.country || ''
              } ${closetOrderInfo?.billingAddress?.postalCode || ''}`
            }
            rightText={'View Shipping Label'}
          />
        </OrderDetailsCategory>

        <OrderDetailsCategory mainTitle={'RETURN DETAILS'}>
          <AddressDetailsView
            leftText={
              'Renter Shipping Back 1000 Santa Monica Blvd Los Angeles, CA 90048'
            }
            rightText={'Change Address'}
          />
        </OrderDetailsCategory>

        {_.isEqual(closetOrderInfo?.status, 'confirmed') && (
          <>
            {closetOrderInfo?.otherUserRating?.images.length > 0 && (
              <OrderDetailsCategory
                mainTitle={"RENTER'S PHOTOS"}
                titleStyle={style.renterPhotoText}>
                <FlatList
                  data={otherUserRatings?.images}
                  horizontal={true}
                  renderItem={renderItem}
                  style={style.flatListStyle}
                  showsVerticalScrollIndicator={false}
                  ItemSeparatorComponent={() => (
                    <View style={style.itemSepratorView} />
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
              </OrderDetailsCategory>
            )}

            <OrderDetailsCategory
              mainTitle={'REVIEW RENTER'}
              titleStyle={style.renterPhotoText}>
              <FlatList
                data={reviewData}
                renderItem={renderReviewItem}
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

export default LenderOrderDetails;
