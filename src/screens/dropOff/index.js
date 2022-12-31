import _ from 'lodash';
import React, {useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ItemSelectionHeader, DropOffTextInputWithKey} from '../../components';
import {style} from './styles';
import {hp} from '../../helper/constants';
import customBaskPress from '../../helper/backPressHandler';

const DropOff = ({route}) => {
  const [dropOffFee, setDropOffFee] = useState('');
  const [dropOffWithIn, setDropOffWithIn] = useState('');
  const {goBack, canGoBack} = useNavigation();

  const onDropOffFeeChange = text => setDropOffFee(text);

  const onDropOffWithInChange = text => setDropOffWithIn(text);

  useEffect(() => {
    if (!_.isEmpty(route?.params?.dropOffDetails)) {
      setDropOffFee(route?.params?.dropOffDetails?.dropOffFee);
      setDropOffWithIn(route?.params?.dropOffDetails?.dropOffWithIn);
    } else {
      setDropOffFee('');
      setDropOffWithIn('');
    }
  }, [route.params]);

  useEffect(() => {
    if (
      route?.params?.onValueSelect &&
      typeof route?.params?.onValueSelect === 'function'
    ) {
      let data = {
        dropOffFee: dropOffFee,
        dropOffWithIn: dropOffWithIn,
      };
      route?.params?.onValueSelect(data);
    }
  }, [dropOffFee, dropOffWithIn]);

  const handleBackButton = () => {
    if (dropOffFee.length === 0) {
      Alert.alert('please enter drop off fee');
    } else if (dropOffWithIn.length === 0) {
      Alert.alert('please enter drop off within');
    } else {
      if (canGoBack()) {
        goBack();
      }
    }
    return true;
  };
  //custom back button
  customBaskPress(handleBackButton);

  return (
    <View style={style.mainContainer}>
      <ItemSelectionHeader title={'DROPOFF'} goBack={handleBackButton} />
      <View style={style.requireMainView}>
        <Text style={[style.headerTextStyle, {marginBottom: hp(1.5)}]}>
          {'DROPOFF REQUIREMENTS'}
        </Text>
        <DropOffTextInputWithKey
          title={'Select drop-off fee'}
          value={dropOffFee}
          placeholder={'20'}
          hideSubTitle
          onChangeText={onDropOffFeeChange}
          isPrefixAvailable
          prefixValue={'$'}
        />
        <DropOffTextInputWithKey
          title={'Drop off within'}
          value={dropOffWithIn}
          placeholder={'5'}
          hideSubTitle
          onChangeText={onDropOffWithInChange}
          isSuffixAvailable
          suffixValue={'mi'}
        />
      </View>
    </View>
  );
};

export default DropOff;
