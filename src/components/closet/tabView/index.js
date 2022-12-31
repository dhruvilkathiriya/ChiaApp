import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {icons} from '../../../helper/iconsConstants';
import {style} from './style';

const TabView = ({
  onFirstTabPress,
  onSecondTabPress,
  firstTabTitle,
  secondTabTitle,
  indexCounter,
}) => {
  return (
    <View style={style.mainContainer}>
      <TouchableOpacity
        onPress={onFirstTabPress}
        style={
          indexCounter === 0 ? style.activeTabView : style.inactiveTabView
        }>
        <Text
          style={
            indexCounter === 0 ? style.activeTabText : style.inactiveTabText
          }>
          {firstTabTitle}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onSecondTabPress}
        style={
          indexCounter === 1 ? style.activeTabView : style.inactiveTabView
        }>
        <Text
          style={
            indexCounter === 1 ? style.activeTabText : style.inactiveTabText
          }>
          {secondTabTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default TabView;
