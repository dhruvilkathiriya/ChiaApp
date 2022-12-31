import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {icons} from '../../../helper/iconsConstants';
import {strings} from '../../../helper/strings';
import {style} from './styles';
import customBaskPress from '../../../helper/backPressHandler';
import {useDispatch} from 'react-redux';
import {resetPreSignedUrl} from '../../../actions/awsS3Actions';

const ListingHeader = () => {
  const {goBack, canGoBack} = useNavigation();
  const dispatch = useDispatch();

  const backHandler = () => {
    dispatch(resetPreSignedUrl());
    if (canGoBack) {
      goBack();
    }
  };

  customBaskPress(backHandler);

  return (
    <View style={style.mainContainer}>
      <View style={style.leftContainer}>
        <TouchableOpacity
          style={style.closeIconContainer}
          onPress={backHandler}>
          <Image
            source={icons.close}
            style={style.closeIcon}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
      <Text style={style.titleText}>{strings.listing}</Text>
      <View style={style.rightContainer} />
    </View>
  );
};

export default ListingHeader;
