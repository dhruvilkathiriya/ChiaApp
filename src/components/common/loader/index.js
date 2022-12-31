import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {colors} from '../../../helper/colors';
import {style} from './styles';

const Loader = ({visible}) => {
  if (visible)
    return (
      <View style={style.mainContainer}>
        <View style={style.loaderContainer}>
          <ActivityIndicator size={'large'} color={colors.primaryColor} />
        </View>
      </View>
    );
  return null;
};

export default Loader;
