import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import _ from 'lodash';

import {
  Header,
  DotIndicator,
  Rating,
  ClosetListingSection,
  ListingReviewListItem,
  Loader,
  AddToBagBottomButtons,
  ViewImageModal,
} from '../../components';
import {style} from './styles';
import {wp} from '../../helper/constants';
import {strings} from '../../helper/strings';
import {getUserProfile} from '../../actions/userActions';
import {getProductInfo} from '../../actions/productAction';
import {colors} from '../../helper/colors';

const ListingItemDetails = ({route}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [reviewImages, setReviewImages] = useState([]);
  const [selectedReviewImages, setSelectedReviewImages] = useState(null);
  const [viewImageModalVisible, setViewImageModalVisible] = useState(false);
  const {productInfo, productInfoLoading} = useSelector(
    state => state.productInfo,
  );
  const {userProfile} = useSelector(state => state.userProfile);
  const {user} = useSelector(state => state.user);

  const data = route?.params?.data || {};
  const userId = route?.params?.userId || '';

  const {navigate, goBack} = useNavigation();
  const dispatch = useDispatch();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(getProductInfo({itemID: data?.id}));
      dispatch(getUserProfile({userId: userId || ''}));
    }
  }, [isFocused]);

  useEffect(() => {
    const ratings = _.get(productInfo, 'rating', []);
    if (ratings?.length) {
      let allImages = [];
      _.forEach(ratings, item => {
        allImages = [...allImages, ..._.get(item, 'images', [])];
      });
      setReviewImages(allImages);
    }
  }, [productInfo]);

  const onUserNamePress = () => navigate('OtherUserCloset', {userId: userId});

  const onSnapToItem = index => setActiveImageIndex(index);

  const renderItem = ({item}) => (
    <Image style={style.itemImage} source={{uri: item}} resizeMode={'cover'} />
  );

  const renderRatingItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        setViewImageModalVisible(true);
        setSelectedReviewImages(_.get(item, 'url', null));
      }}>
      <Image
        style={style.reviewItem}
        resizeMode={'contain'}
        source={{uri: item?.url}}
      />
    </TouchableOpacity>
  );
  const onRentNowPress = () => {
    navigate('AddRentalToBag', {
      itemData: productInfo,
    });
  };
  const onPurchasePress = () => {
    navigate('AddPurchaseToBag', {
      itemData: productInfo,
    });
  };
  const minimumRentalPrice =
    _.get(_.minBy(productInfo?.rentPricing, 'days'), 'days') *
    _.get(_.minBy(productInfo?.rentPricing, 'days'), 'pricePerDay');
  const maximumRentalPrice =
    _.get(_.maxBy(productInfo?.rentPricing, 'days'), 'days') *
    _.get(_.maxBy(productInfo?.rentPricing, 'days'), 'pricePerDay');

  const onViewAllPress = () => {
    navigate('ItemReviews', {productId: productInfo?.id});
  };

  const title = `${_.get(productInfo, 'designer.name', '')} - ${_.get(
    productInfo,
    'subCategory.name',
    '',
  )}`;

  return (
    <>
      <Header leftCloseIcon onClosePress={goBack} />
      <ScrollView
        style={style.mainContainer}
        showsVerticalScrollIndicator={false}>
        <Loader visible={productInfoLoading} />
        <Carousel
          data={data?.images || []}
          renderItem={renderItem}
          sliderWidth={wp(100)}
          itemWidth={wp(100)}
          onSnapToItem={onSnapToItem}
        />
        <DotIndicator
          length={data?.images?.length || 1}
          activeIndex={activeImageIndex}
        />
        <View style={style.detailsContainer}>
          <View style={style.titleContainer}>
            <Text style={style.mainTitleText}>{title}</Text>
            <Text style={style.subTitleText}>
              {`$${productInfo?.sellingPrice} | $${productInfo?.originalPrice} Original Retail`}
            </Text>
            <View style={style.rowContainer}>
              <Rating
                defaultRating={productInfo?.avgRating}
                isDisabled={true}
                ratingContainerStyle={style.ratingStarContainer}
              />
              <Text style={style.subTitleText}>
                {`(${productInfo?.ratingCount})`}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={style.rowContainer}
            onPress={onUserNamePress}>
            <Image
              style={style.userImage}
              source={{uri: userProfile?.picture}}
              // defaultSource={{
              //   uri: 'https://chia-app-dev.s3.amazonaws.com/users/default/profile.jpg',
              // }}
            />
            <Text style={style.userNameText}>
              {`@${userProfile?.firstName || ''}`}
            </Text>
          </TouchableOpacity>
        </View>
        <ClosetListingSection
          title={strings.reviews}
          onRightButtonPress={onViewAllPress}
          rightButtonTitle={
            !_.isEmpty(productInfo?.rating) ? strings.viewAll : ''
          }>
          {!_.isEmpty(productInfo?.rating) ? (
            <>
              <FlatList
                data={reviewImages}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={style.reviewList}
                renderItem={renderRatingItem}
                keyExtractor={item => item?._id}
              />
              <ListingReviewListItem title={'LARGE'} count={'0'} />
              <ListingReviewListItem
                title={'TRUE TO SIZE'}
                progress={1}
                count={'20'}
              />
              <ListingReviewListItem title={'SMALL'} count={'0'} />
            </>
          ) : (
            <View>
              <Text style={style.listerNotesText}>No reviews available</Text>
            </View>
          )}
        </ClosetListingSection>
        <ClosetListingSection title={strings.listerNotes}>
          <Text style={style.listerNotesText}>
            {`${productInfo?.notes || ''}`}
          </Text>
          <Text
            style={
              style.listerNotesText
            }>{`\nSize & Fit: ${productInfo?.size?.standard?.join('/')}`}</Text>
          <Text style={style.listerNotesText}>
            {'\nMeasurements & Fabric Details:'}
          </Text>
        </ClosetListingSection>
        <View style={style.footerView} />
      </ScrollView>
      {userId !== user?.id && (
        <AddToBagBottomButtons
          leftButtonContainerStyle={{backgroundColor: colors.saveBtnBg}}
          rightButtonContainerStyle={{backgroundColor: colors.saveBtnBg}}
          rightButtonTopLineTitleStyle={{fontWeight: '700'}}
          leftButtonTopLineTitle={'PURCHASE'}
          leftButtonBottomLineTitle={`$${productInfo?.originalPrice || 0}`}
          rightButtonTopLineTitle={'RENT NOW'}
          rightButtonBottomLineTitle={`$${minimumRentalPrice || 0} - $${
            maximumRentalPrice || 0
          }`}
          onLeftButtonPress={onPurchasePress}
          onRightButtonPress={onRentNowPress}
          isLeftButtonVisible={data?.availableToPurchase}
        />
      )}
      <ViewImageModal
        modalVisible={viewImageModalVisible}
        imageUrl={selectedReviewImages || ''}
        onClose={() => {
          setViewImageModalVisible(false);
          setSelectedReviewImages(null);
        }}
      />
    </>
  );
};

export default ListingItemDetails;
