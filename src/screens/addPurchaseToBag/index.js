import React, {useState} from 'react';
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
  Loader,
  ConfirmModal,
} from '../../components';
import BagItemInfoHeader from '../../components/common/bagItemInfoHeader';
import {ComposePicker} from '../../components/libraryComponent/DatePickerRange';
import {icons} from '../../helper/iconsConstants';
import {style} from './styles';
import {addProductToCart} from '../../actions/bagAction';
import {resetNavigationRoute} from '../../navigation/navigationsServices';

const AddPurchaseToBag = ({route}) => {
  const [deliveryDate, setDeliveryDate] = useState(null);
  const [shippingOption, setShippingOption] = useState('select');
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const {cartLoading} = useSelector(state => state.bag);

  const itemData = route?.params?.itemData || {};
  const unavailableDates = _.get(itemData, 'unavailableDates', []);

  const {navigate, goBack} = useNavigation();
  const dispatch = useDispatch();

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

  const onAddToBagPress = () => {
    if (shippingOption === 'select') {
      Alert.alert('Please select shipping option!', '');
    } else if (deliveryDate === null) {
      Alert.alert('Please select delivery date!', '');
    } else {
      const body = {
        data: {
          type: 'purchase',
          product: itemData?.id,
          shippingOption: getShippingOption(),
          deliveryDateStart: moment(deliveryDate).toISOString(),
        },
        onSuccess: () => setSuccessModalVisible(true),
      };
      dispatch(addProductToCart(body));
    }
  };

  const onDeliveryDateSelect = dates => {
    setDeliveryDate(dates?.startDate || null);
  };

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
            deliveryDate ? moment(deliveryDate).format('ddd, MMM D') : 'select'
          }
          rightSideTextStyle={style.rightText}
        />
        <View style={style.itemSepratorViewStyle} />
        <ComposePicker
          blockBefore={true}
          mode={'single'}
          currentDate={deliveryDate}
          onConfirm={onDeliveryDateSelect}
          unavailableDates={unavailableDates}
        />
        <View style={style.itemSepratorViewStyle} />
        <BagItemInfoHeader
          leftSideText={'DELIVERY TIME'}
          rightSideText={
            deliveryDate ? moment(deliveryDate).format('hh:mm A') : 'select'
          }
          rightSideTextStyle={style.rightText}
        />
        <View style={style.itemSepratorViewStyle} />
        <BagItemInfoHeader
          leftSideText={'SIZE'}
          rightSideText={itemData?.size?.standard.join(' / ')}
          rightSideTextStyle={style.rightText}
        />
      </ScrollView>
      <AddToBagBottomButtons
        leftButtonContainerStyle={style.leftButtonContainerStyle}
        rightButtonContainerStyle={style.rightButtonContainerStyle}
        leftButtonTopLineTitle={`$${itemData?.sellingPrice}`}
        leftButtonBottomLineTitle={`$${itemData?.originalPrice} Original Retail`}
        rightButtonTopLineTitle={'ADD'}
        rightButtonBottomLineTitle={'TO BAG'}
        rightButtonBottomLineTitleStyle={style.rightButtonBottomLineTitleStyle}
        rightButtonTopLineTitleStyle={style.rightButtonTopLineTitleStyle}
        leftButtonBottomLineTitleStyle={style.leftButtonBottomLineTitleStyle}
        leftButtonTopLineTitleStyle={style.leftButtonTopLineTitleStyle}
        onRightButtonPress={onAddToBagPress}
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

export default AddPurchaseToBag;
