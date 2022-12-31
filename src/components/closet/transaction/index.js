import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {style} from './styles';

const UserItemContent = ({
  isTopRightTextVisible,
  isBottomRightTextVisible,
  bottomRightText,
  headerLeftText,
  headerRightText,
  descriptionText,
  maineContainerStyle,
  bottomRightTexStyle,
  headerLeftTextStyle,
  headerRightTextStyle,
  descriptionTextStyle,
  onBottomRightTextPress,
  onItemPress,
}) => {
  return (
    <View style={[style.mainContainer, maineContainerStyle]}>
      <TouchableOpacity
        style={style.itemContainerViewStyle}
        onPress={onItemPress}>
        <View style={style.userProfileView} />
        <View style={style.itemDetailsView}>
          <View style={style.itemHeaderStyle}>
            <Text style={[style.headerLeftTextStyle, headerLeftTextStyle]}>
              {headerLeftText}
            </Text>
            {isTopRightTextVisible && (
              <Text style={[style.headerRightTextStyle, headerRightTextStyle]}>
                {headerRightText}
              </Text>
            )}
          </View>
          <Text style={[style.descriptionTextStyle, descriptionTextStyle]}>
            {descriptionText}
          </Text>
        </View>
      </TouchableOpacity>
      {isBottomRightTextVisible && (
        <TouchableOpacity onPress={onBottomRightTextPress}>
          <Text style={[style.bottomRightTexStyle, bottomRightTexStyle]}>
            {bottomRightText}
          </Text>
        </TouchableOpacity>
      )}
      <View style={style.horizontalLine} />
    </View>
  );
};

export default UserItemContent;
