import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView, View, Alert, TextInput, FlatList} from 'react-native';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import ActionSheet from 'react-native-actionsheet';
import ImagePicker from 'react-native-image-crop-picker';
import _ from 'lodash';

import {
  Loader,
  ListingHeader,
  ListingSection,
  ListingEditPictures,
  ListingInfo,
  ListingPricing,
  ListingItemAvailability,
  ListingShippingAddON,
  CommonButton,
  TagInputSection,
  ColorView,
} from '../../components';
import {style} from './styles';
import {strings} from '../../helper/strings';
import {hp} from '../../helper/constants';
import {preSignedURL} from '../../actions/awsS3Actions';
import {createProduct, updateProduct} from '../../actions/listingActions';
import {getProductInfo} from '../../actions/productAction';

const Listing = ({route}) => {
  const {navigate, goBack} = useNavigation();

  const {listingProduct, isListingProductLoading} = useSelector(
    state => state.listing,
  );
  const {productInfo, productInfoLoading} = useSelector(
    state => state.productInfo,
  );

  const {productColorList} = useSelector(state => state.product);

  useEffect(() => {
    if (!_.isEmpty(route?.params)) {
      dispatch(getProductInfo({itemID: route?.params?.listedProductData?.id}));
    }
  }, []);

  useEffect(() => {
    if (!_.isEmpty(route?.params)) {
      if (_.isEqual(productInfo?.id, route?.params?.listedProductData?.id)) {
        setCategory(productInfo?.category);
        setSubCategory(productInfo?.subCategory);
        setDesigner(productInfo?.designer);
        setItemDesc(productInfo?.description);
        setPreSignedUrlList(productInfo?.images);
        setSelectedImgList(productInfo?.images);
        setSize(productInfo?.size);
        setCondition(productInfo?.condition);
        setPricingDetail({
          longerThenEight: productInfo?.longerThenEight,
          offerInMessage: productInfo?.offerInMessage,
          originalPrice: productInfo?.originalPrice,
          sellingPrice: productInfo?.sellingPrice,
          rentPricing: _.map(productInfo?.rentPricing, price => {
            delete price?._id;
            return price;
          }),
        });
        setEnhanceTags({...enhanceTags, tagsArray: productInfo?.keywords});
        setSelectedColor(productInfo?.color);
        setItemAvailable(productInfo?.available);
        setAvailableToPurchase(productInfo?.availableToPurchase);
        setPickUpLocationAvailable(productInfo?.shipping?.pickupAvailable);
        productInfo?.shipping?.pickupAvailable &&
          setPickUpLocations(productInfo?.shipping?.pickupLocations[0]);
        setDropOffAvailable(productInfo?.shipping?.dropOffAvailable);
        productInfo?.shipping?.dropOffAvailable &&
          setDropOffDetails({
            ...dropOffDetails,
            dropOffFee: productInfo?.shipping?.dropOffFee,
            dropOffWithIn: productInfo?.shipping?.dropOffWithin,
          });
        setSameDayDeliveryAvailable(
          productInfo?.shipping?.sameDayDeliveryAvailable,
        );
        productInfo?.shipping?.sameDayDeliveryAvailable &&
          setSameDayDeliveryDetails({
            ...sameDayDeliveryDetails,
            deliverWith: productInfo?.shipping?.sameDayDeliveryWith,
            sameDayDeliveryFee: productInfo?.shipping?.sameDayDeliveryFees,
          });
        setAddOnInsurance(productInfo?.addonsRequireInsurance);
        productInfo?.addonsRequireInsurance &&
          setInsuranceFee(productInfo?.addonsInsuranceFee);
        setAddOnCleaning(productInfo?.addonsRequireDryCleaning);
        productInfo?.addonsRequireDryCleaning &&
          setDryCleaningFee(productInfo?.addonsDryCleaningFee);
        setStandardShippingDetails({
          domesticShipping: productInfo?.shipping?.domesticShipping,
          nationWideShipping: productInfo?.shipping?.nationWideShipping,
          worldWideShipping: productInfo?.shipping?.worldWideShipping,
        });
      }
    }
  }, [productInfo]);

  const [category, setCategory] = useState({});

  const [subCategory, setSubCategory] = useState({});

  const [designer, setDesigner] = useState({});

  const [size, setSize] = useState({});

  const [selectedImgList, setSelectedImgList] = useState([]);

  const [preSignedUrlList, setPreSignedUrlList] = useState([]);

  const [colorData, setColorData] = useState([]);

  const [selectedColor, setSelectedColor] = useState('');

  const [enhanceTags, setEnhanceTags] = useState({
    tag: '',
    tagsArray: [],
    tagsSample: ['new', 'good', 'nice', 'pretty', 'simple'],
  });

  const [condition, setCondition] = useState({});

  const [pricingDetail, setPricingDetail] = useState(null);

  const [isPickUpLocationAvailable, setPickUpLocationAvailable] =
    useState(false);

  const [isDropOffAvailable, setDropOffAvailable] = useState(false);

  const [isSameDayDeliveryAvailable, setSameDayDeliveryAvailable] =
    useState(false);

  const [addOnCleaning, setAddOnCleaning] = useState(false);

  const [addOnInsurance, setAddOnInsurance] = useState(false);

  const [dryCleaningFee, setDryCleaningFee] = useState('');

  const [insuranceFee, setInsuranceFee] = useState('');

  const onDryCleaningFeeValueChange = text => setDryCleaningFee(text);

  const onInsuranceFeeValueChange = text => setInsuranceFee(text);

  const [pickUpLocations, setPickUpLocations] = useState({});

  const [dropOffDetails, setDropOffDetails] = useState({});

  const [sameDayDeliveryDetails, setSameDayDeliveryDetails] = useState({});

  const [standardShippingDetails, setStandardShippingDetails] = useState({});

  const [itemDesc, setItemDesc] = useState('');

  const [isItemAvailable, setItemAvailable] = useState(true);

  const [isAvailableToPurchase, setAvailableToPurchase] = useState(true);

  const togglePickUpLocation = () => {
    setPickUpLocationAvailable(prevState => !prevState);
  };

  const toggleDropOffAvailable = () => {
    setDropOffAvailable(prevState => !prevState);
  };

  const toggleSameDayDeliveryAvailable = () => {
    setSameDayDeliveryAvailable(prevState => !prevState);
  };

  const toggleItemAvailable = () => {
    setItemAvailable(prevState => !prevState);
  };

  const toggleAvailableToPurchase = () => {
    setAvailableToPurchase(prevState => !prevState);
  };

  const onItemDescChange = text => setItemDesc(text);

  const addOnsCleanBtn = () => {
    setAddOnCleaning(prevState => !prevState);
  };

  const addOnsInsuranceBtn = () => {
    setAddOnInsurance(prevState => !prevState);
  };

  const onCategoryPress = () => {
    const onValueSelect = value => {
      console.log('onValueSelect', value);
      setCategory(value);
      setSubCategory({});
      setSize({});
    };
    navigate('SelectCategory', {onValueSelect});
  };

  const onSubCategoryPress = () => {
    if (JSON.stringify(category) !== '{}') {
      const onValueSelect = value => {
        console.log('onValueSelect', value);
        setSubCategory(value);
      };
      navigate('SelectSubCategory', {onValueSelect, categoryId: category?.id});
    } else {
      Alert.alert('Please first select category!');
    }
  };

  const onSizesPress = () => {
    if (JSON.stringify(category) !== '{}') {
      const onValueSelect = value => {
        console.log('onValueSelect', value);
        setSize(value);
      };
      navigate('SelectSizes', {onValueSelect, categoryId: category?.id});
    } else {
      Alert.alert('Please first select category!');
    }
  };

  const onDesignersPress = () => {
    const onValueSelect = value => {
      console.log('onValueSelect', value);
      setDesigner(value);
    };
    navigate('SelectDesigners', {onValueSelect});
  };

  const onConditionsPress = () => {
    const onValueSelect = value => {
      console.log('onValueSelect', value);
      setCondition(value);
    };
    navigate('SelectCondition', {onValueSelect});
  };

  const onPickUpLocationPress = () => {
    const onValueSelect = value => {
      console.log('onValueSelect', value);
      setPickUpLocations(value);
    };
    navigate('SelectPickUpLocation', {
      onValueSelect,
      pickUpLocations: pickUpLocations,
    });
  };

  const onDropOffPress = () => {
    const onValueSelect = value => {
      console.log('onDropOffPress', value);
      setDropOffDetails(value);
    };
    navigate('DropOff', {onValueSelect, dropOffDetails: dropOffDetails});
  };

  const onSameDayDeliveryPress = () => {
    const onValueSelect = value => {
      console.log('sameDayDelivery', value);
      setSameDayDeliveryDetails(value);
    };
    navigate('SameDayDelivery', {
      onValueSelect,
      sameDayDeliveryDetails: sameDayDeliveryDetails,
    });
  };

  const onStandardShippingPress = () => {
    const onValueSelect = value => {
      console.log('onStandardShippingValue', value);
      setStandardShippingDetails(value);
    };
    navigate('StandardShipping', {
      onValueSelect,
      standardShippingDetails: standardShippingDetails,
    });
  };

  const onEditPricingPress = () => {
    const onValueSelect = value => {
      console.log('onEditPricingPress', value);
      setPricingDetail(value);
    };
    navigate('Pricing', {onValueSelect, pricingDetail: pricingDetail});
  };

  const isFocused = useIsFocused();

  // useEffect(() => {
  //   if (isFocused) {
  //     setPreSignedUrlList([]);
  //   }
  // }, [isFocused]);

  const onSavePress = () => {
    if (preSignedUrlList.length === 0) {
      Alert.alert('Please add item pictures!');
    } else if (itemDesc.length === 0) {
      Alert.alert('Please Enter item description');
    } else if (_.isEmpty(category)) {
      Alert.alert('Please Select Category!');
    } else if (_.isEmpty(subCategory)) {
      Alert.alert('Please Select Sub Category!');
    } else if (_.isEmpty(designer)) {
      Alert.alert('Please Select Designer!');
    } else if (_.isEmpty(size)) {
      Alert.alert('Please Select Sizes!');
    } else if (_.isEmpty(condition)) {
      Alert.alert('Please Select Condition!');
    } else if (_.isEmpty(pricingDetail)) {
      Alert.alert('Please Enter Pricing Detail!');
    } else if (enhanceTags?.tagsArray.length === 0) {
      Alert.alert('Please Enter tags or keyword!');
    } else if (isPickUpLocationAvailable && _.isEmpty(pickUpLocations)) {
      Alert.alert('Please Select pick up location!');
    } else if (isDropOffAvailable && _.isEmpty(dropOffDetails)) {
      Alert.alert('Please enter drop off details!');
    } else if (
      isSameDayDeliveryAvailable &&
      _.isEmpty(sameDayDeliveryDetails)
    ) {
      Alert.alert('Please enter same-day delivery details!');
    } else if (_.isEmpty(standardShippingDetails)) {
      Alert.alert('Please select standard shipping detail!');
    } else if (addOnCleaning && dryCleaningFee.length === 0) {
      Alert.alert('Please enter dry cleaning fee');
    } else if (addOnInsurance && insuranceFee.length === 0) {
      Alert.alert('Please enter insurance add-on mode');
    } else if (_.isEmpty(selectedColor)) {
      Alert.alert('Please select color');
    } else {
      const data = {
        images: preSignedUrlList,
        description: itemDesc,
        category: category?.id,
        subCategory: subCategory?.id,
        designer: designer?.id,
        size: size?.id,
        keywords: enhanceTags?.tagsArray,
        rentPricing: pricingDetail?.rentPricing,
        sellingPrice: pricingDetail?.sellingPrice,
        originalPrice: pricingDetail?.originalPrice,
        offerInMessage: pricingDetail?.offerInMessage,
        longerThenEight: pricingDetail?.longerThenEight,
        condition: condition?.type,
        available: isItemAvailable,
        color: selectedColor,
        availableToPurchase: isAvailableToPurchase,
        shipping: {
          pickupAvailable: isPickUpLocationAvailable,
          ...(isPickUpLocationAvailable && {
            pickupLocations: [pickUpLocations?._id],
          }),
          dropOffAvailable: isDropOffAvailable,
          ...(isDropOffAvailable && {
            dropOffFee: dropOffDetails?.dropOffFee,
            dropOffWithin: dropOffDetails?.dropOffWithIn,
          }),
          sameDayDeliveryAvailable: isSameDayDeliveryAvailable,
          ...(isSameDayDeliveryAvailable && {
            sameDayDeliveryFees: sameDayDeliveryDetails?.sameDayDeliveryFee,
            sameDayDeliveryWith: sameDayDeliveryDetails?.deliverWith,
          }),
          domesticShipping: standardShippingDetails?.domesticShipping?.key,
          nationWideShipping: standardShippingDetails?.nationWideShipping?.key,
          worldWideShipping: standardShippingDetails?.worldWideShipping?.key,
        },
        addonsRequireDryCleaning: addOnCleaning,
        ...(addOnCleaning && {addonsDryCleaningFee: dryCleaningFee}),
        addonsRequireInsurance: addOnInsurance,
        ...(addOnInsurance && {addonsInsuranceFee: insuranceFee}),
      };
      if (!_.isEmpty(route?.params)) {
        if (_.isEqual(productInfo?.id, route?.params?.listedProductData?.id)) {
          const updateData = {
            ...data,
            productId: productInfo?.id,
          };
          dispatch(updateProduct(updateData));
        }
      } else {
        dispatch(createProduct(data));
      }
    }
  };

  const actionSheet = useRef();

  const dispatch = useDispatch();

  const onImgSelectionPress = () => {
    actionSheet.current.show();
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
      setSelectedImgList([...selectedImgList, data?.path]);
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
      setSelectedImgList([...selectedImgList, data?.path]);
      const preSign = {
        key: filename,
        contentType: data?.mime,
        uri: data.path,
      };
      dispatch(preSignedURL(preSign));
    });
  };

  const {preSignedURLs, preSignedLoading} = useSelector(state => state.awsS3);

  useEffect(() => {
    const preSignedData = preSignedURLs || null;
    if (preSignedData && preSignedData?.url) {
      let url = preSignedData?.url.split('?')[0];
      setPreSignedUrlList([...preSignedUrlList, url]);
    }
  }, [preSignedURLs]);

  const updateTagState = state => {
    setEnhanceTags(state);
  };

  useEffect(() => {
    if (productColorList.length > 0) {
      setColorData(productColorList);
    }
  }, [productColorList]);

  const onColorPress = item => {
    setSelectedColor(item.hexCode);
  };

  const colorRenderItem = ({item}) => {
    return (
      <ColorView
        item={item}
        selectedColor={selectedColor}
        onColorPress={() => {
          onColorPress(item);
        }}
      />
    );
  };

  return (
    <>
      <ListingHeader />
      <ScrollView
        style={style.mainContainer}
        showsVerticalScrollIndicator={false}>
        <ListingSection title={strings.editPictures}>
          <ListingEditPictures
            data={selectedImgList || []}
            onImgSelectionPress={onImgSelectionPress}
          />
        </ListingSection>

        <ListingSection title={strings.itemDescription}>
          <TextInput
            multiline={true}
            style={style.itemDescriptionText}
            value={itemDesc}
            placeholder={'Please enter item description'}
            onChangeText={onItemDescChange}
          />
        </ListingSection>

        <View style={style.divider} />

        <ListingSection title={strings.info}>
          <ListingInfo
            title={strings.category}
            value={category?.name || 'select'}
            onPress={onCategoryPress}
          />
          <ListingInfo
            title={strings.subCategory}
            value={subCategory?.name || 'select'}
            onPress={onSubCategoryPress}
          />
          <ListingInfo
            title={strings.designers}
            value={designer?.name || 'select'}
            onPress={onDesignersPress}
          />
          <ListingInfo
            title={strings.size}
            value={size?.standard?.join('/') || 'select'}
            onPress={onSizesPress}
          />
          <ListingInfo
            title={strings.condition}
            value={condition?.key || 'select'}
            onPress={onConditionsPress}
          />
        </ListingSection>

        <View style={[style.divider, {marginTop: hp(1.5)}]} />

        <ListingSection
          title={strings.pricing}
          rightButtonTitle={strings.edit}
          onRightButtonPress={onEditPricingPress}>
          <ListingPricing
            mainTitle={strings.rentalPricing}
            value={pricingDetail?.rentPricing}
          />
          <ListingPricing
            title={strings.sellingPrice}
            value={
              _.isEmpty(pricingDetail) ? '-' : '$' + pricingDetail?.sellingPrice
            }
            isSingle
          />
          <ListingPricing
            title={strings.originalRetailPrice}
            value={
              _.isEmpty(pricingDetail)
                ? '-'
                : '$' + pricingDetail?.originalPrice
            }
            isSingle
          />
        </ListingSection>

        <View style={style.divider} />

        <ListingSection title={strings.enhanceListing}>
          <TagInputSection
            updateState={updateTagState}
            tags={enhanceTags}
            label={'+ ADD KEYWORD TAGS (Color, Style, Occasion ETC)'}
          />
        </ListingSection>

        <View style={style.divider} />

        <ListingSection title={strings.colors}>
          <FlatList
            data={colorData}
            scrollEnabled={false}
            numColumns={5}
            style={{alignSelf: 'center'}}
            renderItem={colorRenderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </ListingSection>

        <View style={style.divider} />

        <ListingSection title={strings.itemAvailability}>
          <ListingItemAvailability
            title={strings.itemAvailableNow}
            withSwitch
            value={isItemAvailable}
            onValueChange={toggleItemAvailable}
          />
          <ListingItemAvailability title={strings.rentTo} value={'Everyone'} />
          <ListingItemAvailability
            title={strings.itemAvailablePurchase}
            withSwitch
            value={isAvailableToPurchase}
            onValueChange={toggleAvailableToPurchase}
          />
        </ListingSection>

        <View style={style.divider} />

        <ListingSection title={strings.shipping}>
          <ListingShippingAddON
            value={isPickUpLocationAvailable}
            onValueChange={togglePickUpLocation}
            title={strings.pickUpAvailable}
            isTitleComponent
            containerStyle={{marginTop: 0}}
          />
          {isPickUpLocationAvailable ? (
            <ListingShippingAddON
              title={strings.pickupLocation}
              value={pickUpLocations?.postalCode || 'select'}
              onValueTextPress={onPickUpLocationPress}
            />
          ) : null}

          <ListingShippingAddON
            title={strings.dropoffAvailable}
            isTitleComponent
            value={isDropOffAvailable}
            onValueChange={toggleDropOffAvailable}
          />
          {isDropOffAvailable ? (
            <View>
              <ListingShippingAddON
                title={strings.dropoffAddedFee}
                value={
                  _.isEmpty(dropOffDetails)
                    ? 'select'
                    : '$' + dropOffDetails?.dropOffFee
                }
                onValueTextPress={onDropOffPress}
              />
              <ListingShippingAddON
                title={strings.dropoffWithin}
                value={
                  _.isEmpty(dropOffDetails)
                    ? 'select'
                    : dropOffDetails?.dropOffWithIn + 'mi'
                }
                onValueTextPress={onDropOffPress}
              />
            </View>
          ) : null}

          <ListingShippingAddON
            title={strings.samedayDeliveryAvailable}
            isTitleComponent
            value={isSameDayDeliveryAvailable}
            onValueChange={toggleSameDayDeliveryAvailable}
          />
          {isSameDayDeliveryAvailable ? (
            <View>
              <ListingShippingAddON
                title={strings.samedayDeliveryAddedFee}
                value={
                  _.isEmpty(sameDayDeliveryDetails)
                    ? 'select'
                    : '$' + sameDayDeliveryDetails?.sameDayDeliveryFee
                }
                onValueTextPress={onSameDayDeliveryPress}
              />
              <ListingShippingAddON
                title={strings.deliverWith}
                value={
                  _.isEmpty(sameDayDeliveryDetails)
                    ? 'select'
                    : sameDayDeliveryDetails?.deliverWith
                }
                onValueTextPress={onSameDayDeliveryPress}
              />
            </View>
          ) : null}

          <ListingShippingAddON
            title={strings.standardShipping}
            isTitleComponent
            hideSwitch
          />
          <ListingShippingAddON
            onValueTextPress={onStandardShippingPress}
            title={strings.shipNational}
            value={
              standardShippingDetails?.domesticShipping?.description || 'select'
            }
          />
          <ListingShippingAddON
            onValueTextPress={onStandardShippingPress}
            title={strings.shipWorldwide}
            value={
              standardShippingDetails?.nationWideShipping?.description ||
              'select'
            }
          />
          <ListingShippingAddON
            onValueTextPress={onStandardShippingPress}
            title={strings.shipDomestic}
            value={
              standardShippingDetails?.worldWideShipping?.description ||
              'select'
            }
          />
        </ListingSection>

        <View style={style.divider} />

        <ListingSection title={strings.addOns}>
          <ListingShippingAddON
            title={strings.requireDrycleaning}
            isTitleComponent
            value={addOnCleaning}
            onValueChange={addOnsCleanBtn}
          />
          {addOnCleaning ? (
            <ListingShippingAddON
              isTextInput
              title={strings.addedDrycleaningFee}
              value={dryCleaningFee === '' ? '' : `${dryCleaningFee}`}
              onChangeText={onDryCleaningFeeValueChange}
              isPrefixAvailable
              prefixValue={'$'}
            />
          ) : null}

          <ListingShippingAddON
            title={strings.requireAddonInsurance}
            isTitleComponent
            value={addOnInsurance}
            onValueChange={addOnsInsuranceBtn}
          />
          {addOnInsurance ? (
            <ListingShippingAddON
              title={strings.insuranceAddonFee}
              isTextInput
              value={insuranceFee === '' ? '' : `${insuranceFee}`}
              onChangeText={onInsuranceFeeValueChange}
              isPrefixAvailable
              prefixValue={'$'}
            />
          ) : null}
        </ListingSection>

        <CommonButton
          title={strings.save}
          onPress={onSavePress}
          containerStyle={style.saveButton}
        />
      </ScrollView>
      <Loader visible={preSignedLoading} />
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
      <Loader visible={isListingProductLoading || productInfoLoading} />
    </>
  );
};

export default Listing;
