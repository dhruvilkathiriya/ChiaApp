import React from 'react';
import {SafeAreaView, TouchableOpacity, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {strings} from '../../../helper/strings';
import {style} from './styles';

const BackCloseHeader = ({backVisible, onClosePress}) => {
  const {goBack, navigate} = useNavigation();

  //const onClosePress = () => navigate('Hanger');

  return (
    <SafeAreaView style={style.mainContainer}>
      {backVisible ? (
        <TouchableOpacity onPress={goBack}>
          <Text style={style.textStyle}>{strings.back}</Text>
        </TouchableOpacity>
      ) : (
        <View />
      )}
      <TouchableOpacity onPress={onClosePress}>
        <Text style={style.textStyle}>{strings.close}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BackCloseHeader;
