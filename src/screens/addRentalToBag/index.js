import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import _ from 'lodash';

import {
  Header,
  AddToBagBottomButtons,
  ListingShippingAddON,
  Loader,
  ConfirmModal,
} from '../../components';
import BagItemInfoHeader from '../../components/common/bagItemInfoHeader';
import {ComposePicker} from '../../components/libraryComponent/DatePickerRange';
import {icons} from '../../helper/iconsConstants';
import {style} from './styles';
import {addProductToCart} from '../../actions/bagAction';
import {resetNavigationRoute} from '../../navigation/navigationsServices';

const AddRentalToBag = ({route}) => {
  const [rentalPeriod, setRentalPeriod] = useState('select');
  const [rentalStartDate, setRentalStartDate] = useState(null);
  const [rentalEndDate, setRentalEndDate] = useState(null);
  const [isCustomRentalPeriod, setIsCustomRentalPeriod] = useState(false);
  const [shippingOption, setShippingOption] = useState('select');
  const [insuranceAddOn, setInsuranceAddOn] = useState(
    itemData?.addonsRequireInsurance,
  );
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const {cartLoading} = useSelector(state => state.bag);

  const itemData = route?.params?.itemData || {};
  const unavailableDates = _.get(itemData, 'unavailableDates', []);

  const {navigate, goBack} = useNavigation();
  const dispatch = useDispatch();

  const onRentalPeriodChange = period => {
    if (period) {
      setRentalPeriod(Number(period));
      if (isCustomRentalPeriod) {
        setIsCustomRentalPeriod(false);
      }
    } else {
      setIsCustomRentalPeriod(true);
    }
  };

  useEffect(() => {
    setRentalStartDate(null);
    setRentalEndDate(null);
  }, [rentalPeriod]);

  const onRentalDateSelect = dates => {
    setRentalStartDate(dates?.startDate || null);
    setRentalEndDate(dates?.endDate || null);
  };

  const onRentalPeriodPress = () => {
    navigate('SelectRentalPeriod', {
      onRentalPeriodChange,
      onRentalDateSelect,
      rentData: itemData?.rentPricing || [],
      rentalPeriod: rentalPeriod === 'select' ? null : rentalPeriod,
    });
  };

  const onShippingSelect = val => {
    setShippingOption(val);
  };

  const onStandardShippingPress = () => {
    navigate('SelectStandardShippingOption', {
      selectedShippingOption: shippingOption,
      shipping: itemData?.shipping || {},
      onShippingSelect,
    });
  };

  const onToggleInsuranceAddOn = () => {
    setInsuranceAddOn(!insuranceAddOn);
  };

  const getShippingOption = () => {
    if (shippingOption === 'PICKUP') {
      return 'pickup';
    } else if (shippingOption === 'DROPOFF') {
      return 'drop_off';
    } else if (shippingOption === 'SAMEDAYDELIVERY') {
      return 'same_day';
    } else if (shippingOption === 'STANDARD') {
      return 'standard';
    } else {
      return '';
    }
  };

  const onAddRentalPress = () => {
    if (rentalPeriod === 'select') {
      Alert.alert('Please select rental period!', '');
    } else if (shippingOption === 'select') {
      Alert.alert('Please select shipping option!', '');
    } else if (rentalStartDate === null) {
      Alert.alert('Please select delivery date!', '');
    } else {
      const body = {
        data: {
          type: 'rent',
          product: itemData?.id,
          shippingOption: getShippingOption(),
          rentalPeriodDay: rentalPeriod,
          deliveryTimeStart: moment(rentalStartDate).toISOString(),
          deliveryDateStart: moment(rentalStartDate).toISOString(),
        },
        onSuccess: () => setSuccessModalVisible(true),
      };
      dispatch(addProductToCart(body));
    }
  };

  const minimumRentalPrice =
    _.get(_.minBy(itemData?.rentPricing, 'days'), 'days') *
    _.get(_.minBy(itemData?.rentPricing, 'days'), 'pricePerDay');
  const maximumRentalPrice =
    _.get(_.maxBy(itemData?.rentPricing, 'days'), 'days') *
    _.get(_.maxBy(itemData?.rentPricing, 'days'), 'pricePerDay');

  return (
    <>
      <Header />
      <ScrollView
        style={style.mainContainer}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={style.backContainerStyle} onPress={goBack}>
          <Image
            source={icons.backArrow}
            style={style.backIconStyle}
            resizeMode={'cover'}
          />
          <Text style={style.backTextStyle}>{'Back'}</Text>
        </TouchableOpacity>
        <BagItemInfoHeader
          leftSideText={'RENTAL PERIOD'}
          rightSideText={
            rentalPeriod === 'select' ? rentalPeriod : `${rentalPeriod} Days`
          }
          onRightTextPress={onRentalPeriodPress}
        />
        <View style={style.itemSepratorViewStyle} />
        <BagItemInfoHeader
          leftSideText={'SHIPPING OPTION'}
          rightSideText={shippingOption}
          onRightTextPress={onStandardShippingPress}
        />
        <View style={style.itemSepratorViewStyle} />
        <BagItemInfoHeader
          leftSideText={'DELIVERY DATE'}
          rightSideText={
            rentalStartDate
              ? moment(rentalStartDate).format('ddd, MMM D')
              : 'select'
          }
          rightSideTextStyle={style.rightText}
        />
        <View style={style.itemSepratorViewStyle} />
        <ComposePicker
          blockBefore={true}
          mode={'range'}
          dateRange={rentalPeriod === 'select' ? 0 : Number(rentalPeriod)}
          normalRange={isCustomRentalPeriod}
          startDate={rentalStartDate}
          endDate={rentalEndDate}
          onConfirm={onRentalDateSelect}
          unavailableDates={unavailableDates}
        />
        <View style={style.itemSepratorViewStyle} />
        <BagItemInfoHeader
          leftSideText={'DELIVERY TIME'}
          rightSideText={
            rentalStartDate
              ? moment(rentalStartDate).format('hh:mm A')
              : 'select'
          }
          rightSideTextStyle={style.rightText}
        />
        <View style={style.itemSepratorViewStyle} />
        <BagItemInfoHeader
          leftSideText={'SIZE'}
          rightSideText={itemData?.size?.standard.join(' / ')}
          rightSideTextStyle={style.rightText}
        />
        <View style={style.itemSepratorViewStyle} />
        {itemData?.addonsRequireInsurance && (
          <ListingShippingAddON
            title={'Insurance Add-On'}
            isTitleComponent
            value={insuranceAddOn}
            mainTitleTextStyle={style.switchTitleTextStyle}
            containerStyle={style.switchContainerStyle}
            onValueChange={onToggleInsuranceAddOn}
          />
        )}
      </ScrollView>
      <AddToBagBottomButtons
        leftButtonContainerStyle={style.leftButtonContainerStyle}
        rightButtonContainerStyle={style.rightButtonContainerStyle}
        leftButtonTopLineTitle={`$${minimumRentalPrice} - $${maximumRentalPrice}`}
        leftButtonBottomLineTitle={`$${itemData?.originalPrice} Original Retail`}
        rightButtonTopLineTitle={'ADD RENTAL'}
        rightButtonBottomLineTitle={'TO BAG'}
        rightButtonBottomLineTitleStyle={style.rightButtonBottomLineTitleStyle}
        rightButtonTopLineTitleStyle={style.rightButtonTopLineTitleStyle}
        leftButtonBottomLineTitleStyle={style.leftButtonBottomLineTitleStyle}
        leftButtonTopLineTitleStyle={style.leftButtonTopLineTitleStyle}
        onRightButtonPress={onAddRentalPress}
        isLeftButtonVisible={true}
      />
      <ConfirmModal
        modalVisible={successModalVisible}
        title={'Added to Bag'}
        button1={'CLOSE'}
        button2={'VIEW BAG'}
        onButton1Press={() => {
          setSuccessModalVisible(false);
          resetNavigationRoute('Home');
        }}
        onButton2Press={() => {
          setSuccessModalVisible(false);
          navigate('Bag');
        }}
      />
      <Loader visible={cartLoading} />
    </>
  );
};

export default AddRentalToBag;
