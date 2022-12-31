import React from 'react';
import {Text, View, Image} from 'react-native';

import CommonButton from '../commonButton';
import {icons} from '../../../helper/iconsConstants';
import {style} from './styles';
import {strings} from '../../../helper/strings';

const NoInternetConnection = ({onTryAgainPress}) => {
  return (
    <View style={style.mainContainer}>
      <View style={style.contentContainer}>
        <Image
          source={icons.noInternet}
          resizeMode={'contain'}
          style={style.internetIcon}
        />
        <Text style={style.titleText}>{strings.internetUnavailable}</Text>
        <Text style={style.noteText}>{strings.checkConnection}</Text>
      </View>
      <CommonButton title={strings.tryAgain} onPress={onTryAgainPress} />
    </View>
  );
};

export default NoInternetConnection;
