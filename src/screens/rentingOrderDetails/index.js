import moment from 'moment';
import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ActionSheet from 'react-native-actionsheet';
import ImagePicker from 'react-native-image-crop-picker';

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
import {preSignedURL} from '../../actions/awsS3Actions';
import {
  getLenderOptions,
  rateOrder,
  updateOrderRating,
} from '../../actions/ratingAction';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {getOrderInfo} from '../../actions/orderAction';

const RentingOrderDetails = ({route}) => {
  const {data} = route.params;
  const [renterPhotos, setRenterPhotos] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [ratingCounter, setRatingCounter] = useState(0);
  const [comments, setComments] = useState([]);
  const [ratings, setRatings] = useState({});
  const [rateOrderFirstTime, setRateOrderFirstTime] = useState(true);

  const renderItem = ({item}) => {
    return (
      <View style={style.photoViewStyle}>
        <Image
          resizeMode={'cover'}
          source={{uri: item?.url}}
          style={style.photoViewStyle}
        />
      </View>
    );
  };

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
      renterPhotos,
      _.filter(reviewData, {isSelected: true}).map(item => {
        return item.key;
      }),
    );
    setReviewData([...reviewData]);
  };

  const renderReviewItem = ({item}) => {
    return (
      <CheckBoxView item={item} onItemPress={() => onReviewItemPress(item)} />
    );
  };

  const actionSheet = useRef();

  const dispatch = useDispatch();

  const {navigate} = useNavigation();

  const onImgSelectionPress = () => {
    actionSheet.current.show();
  };

  const onNeedHelpPress = () => {
    navigate('NeedHelp');
  };

  const openCamera = (width = 400, height = 400) => {
    ImagePicker.openCamera({
      width,
      height,
      cropping: true,
      includeBase64: true,
    }).then(data => {
      let filename = data?.path.substring(
        data?.path.lastIndexOf('/') + 1,
        data?.path.length,
      );
      // setRenterPhotos([...renterPhotos, data?.path]);
      const preSign = {
        key: filename,
        contentType: data?.mime,
        uri: data.path,
      };
      dispatch(preSignedURL(preSign));
    });
  };

  const openImagePicker = (width = 400, height = 400) => {
    ImagePicker.openPicker({
      width,
      height,
      cropping: true,
      includeBase64: true,
    }).then(data => {
      let filename = data?.path.substring(
        data?.path.lastIndexOf('/') + 1,
        data?.path.length,
      );
      // setRenterPhotos([...renterPhotos, data?.path]);
      const preSign = {
        key: filename,
        contentType: data?.mime,
        uri: data.path,
      };
      dispatch(preSignedURL(preSign));
    });
  };

  const {preSignedURLs, preSignedLoading} = useSelector(state => state.awsS3);

  const {lenderOptionList} = useSelector(state => state.rating);

  const {orderInfo, orderInfoLoading} = useSelector(state => state.order);

  const {orderRating} = useSelector(state => state.rating);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(
        getOrderInfo({
          orderId: data?.id,
        }),
      );
      dispatch(getLenderOptions());
    }
  }, [isFocused]);

  useEffect(() => {
    const preSignedData = preSignedURLs || null;
    if (preSignedData && preSignedData?.url) {
      let url = preSignedData?.url.split('?')[0];
      updateRating(ratingCounter, [...renterPhotos, {url: url}], comments);
      setRenterPhotos([...renterPhotos, {url: url}]);
    }
  }, [preSignedURLs]);

  useEffect(() => {
    if (!_.isEmpty(orderInfo?.myRating)) {
      if (orderInfo?.myRating?.images.length > 0) {
        setRenterPhotos(orderInfo?.myRating?.images);
      }
      setRatings(orderInfo?.myRating);
      setRatingCounter(orderInfo?.myRating?.rate);
      setComments(orderInfo?.myRating?.comment);
    } else {
      setRenterPhotos([]);
      setRatings({});
      setRatingCounter(0);
      setComments([]);
    }
  }, [orderInfo]);

  useEffect(() => {
    if (!_.isEmpty(orderRating?.id)) {
      if (orderRating?.images.length > 0) {
        setRenterPhotos(orderRating?.images);
      }
      setRatings(orderRating);
      setRatingCounter(orderRating?.rate);
      setComments(orderRating?.comment);
    } else {
      setRenterPhotos([]);
      setRatings({});
      setRatingCounter(0);
      setComments([]);
    }
  }, [orderRating]);

  useEffect(() => {
    if (lenderOptionList.length > 0) {
      let finalData = lenderOptionList.map(item => {
        if (_.includes(ratings?.comment, item.key)) {
          return {...item, isSelected: true};
        } else {
          return {...item, isSelected: false};
        }
      });
      setReviewData(finalData);
    }
  }, [lenderOptionList, ratings]);

  useEffect(() => {
    if (reviewData.length > 0) {
      let commentsData = _.filter(reviewData, {isSelected: true}).map(item => {
        return item.key;
      });
      setComments(commentsData);
    }
  }, [reviewData]);

  const updateRating = (ratingStar, images, comment) => {
    if (!_.isEmpty(ratings?.id)) {
      dispatch(
        updateOrderRating({
          ratingId: ratings?.id,
          images: _.map(images, item => {
            return {url: item.url};
          }),
          comment: comment,
          ...(!_.isEqual(ratingStar, 0) && {rate: ratingStar}),
        }),
      );
    } else {
      if (rateOrderFirstTime) {
        setRateOrderFirstTime(false);
        dispatch(
          rateOrder({
            order: orderInfo?.id,
            type: 'seller',
            images: _.map(images, item => {
              return {url: item.url};
            }),
            comment: comment,
            rate: ratingStar || 1,
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
          userProfileImg={{
            uri: orderInfo?.owner?.picture,
          }}
        />
        <OrderDetailsCategory mainTitle={'RENTING'}>
          <OrderDetailsSubCategory
            leftText={`STATUS: ${orderInfo?.status || ''}`}
          />
          <OrderDetailsSubCategory
            leftText={`DELIVERY BY: ${moment(
              orderInfo?.deliveryDateStart,
            ).format('MMM DD')} @ ${moment(orderInfo?.deliveryTimeStart).format(
              'hh:mmA',
            )}`}
          />
          <OrderDetailsSubCategory
            leftText={`RENTAL DATES: ${moment(
              orderInfo?.deliveryDateStart,
            ).format('MMM DD')}-${moment(
              new Date(orderInfo?.deliveryDateStart),
              'DD-MM-YYYY',
            )
              .add(orderInfo?.rentalPeriodDay - 1, 'days')
              .format('DD')}`}
          />
        </OrderDetailsCategory>

        <ProductItemView
          name={orderInfo?.product?.condition?.type || ''}
          brand={orderInfo?.product?.description || ''}
          size={strings.size}
          price1={`$${orderInfo?.product?.originalPrice || ''}`}
          price2={`$${orderInfo?.product?.sellingPrice || ''}`}
          productImgSource={{
            uri: orderInfo?.product?.images[0],
          }}
        />

        <OrderDetailsSubCategory
          leftText={'Order Subtotal'}
          rightText={`$${orderInfo?.subTotal || ''}`}
          rightTextStyle={style.rightTextStyle}
        />
        {_.map(orderInfo.charges || data.charges, item => {
          return (
            <OrderDetailsSubCategory
              leftText={`${item.name.replace('_', ' ')}`}
              rightText={`$${item.amount}`}
            />
          );
        })}
        <OrderDetailsSubCategory
          leftText={'Grand Total'}
          rightText={`$${orderInfo?.total || ''}`}
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
            rightText={''}
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

        <OrderDetailsCategory mainTitle={'RETURN DETAILS'}>
          <AddressDetailsView
            leftText={
              'Return Item Back 1000 Santa Monica Blvd Los Angeles, CA 90048'
            }
            rightText={'Change Address'}
          />
        </OrderDetailsCategory>
        {_.isEqual(orderInfo?.status, 'confirmed') && (
          <>
            <OrderDetailsCategory
              mainTitle={"RENTER'S PHOTOS"}
              titleStyle={style.renterPhotoText}>
              <FlatList
                data={renterPhotos}
                horizontal={true}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => (
                  <View style={style.itemSepratorView} />
                )}
                ListHeaderComponent={() => (
                  <View style={style.itemHeaderStyle} />
                )}
                ListFooterComponent={() => (
                  <View style={style.itemHeaderStyle} />
                )}
                keyExtractor={(item, index) => index.toString()}
              />

              <TouchableOpacity onPress={onImgSelectionPress}>
                <Text style={style.viewTextStyle}>{'ADD PHOTOS'}</Text>
              </TouchableOpacity>
            </OrderDetailsCategory>

            <OrderDetailsCategory
              mainTitle={'REVIEW LENDER'}
              titleStyle={style.renterPhotoText}>
              <FlatList
                data={reviewData}
                renderItem={renderReviewItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </OrderDetailsCategory>

            <Rating
              defaultRating={ratingCounter}
              size={wp(6.4)}
              onFinishRating={rating => {
                updateRating(rating, renterPhotos, comments);
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
      <ActionSheet
        ref={actionSheet}
        options={['Camera', 'Gallery', 'Cancel']}
        destructiveButtonIndex={2}
        cancelButtonIndex={2}
        onPress={index => {
          if (index === 0) {
            openCamera();
          } else if (index === 1) {
            openImagePicker();
          }
        }}
      />
      <Loader visible={preSignedLoading} />
    </View>
  );
};

export default RentingOrderDetails;
