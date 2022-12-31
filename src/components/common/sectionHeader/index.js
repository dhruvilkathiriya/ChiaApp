import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {style} from './styles';

const SectionHeader = ({
  headerLeftTitle,
  headerRightTitle,
  onRightBtnPress,
  rightViewVisible,
  mainContainer,
  children,
  outterContainerStyle,
  titleTextStyle,
  rightTextStyle,
  imageSource,
  imageVisible,
}) => {
  return (
    <View style={[style.outterContainer, outterContainerStyle]}>
      <View style={[style.mainContainer, mainContainer]}>
        <Text style={[style.header1Style, titleTextStyle]}>
          {headerLeftTitle}
        </Text>
        {!rightViewVisible && (
          <TouchableOpacity onPress={onRightBtnPress}>
            {!rightViewVisible && !imageVisible ? (
              <Text style={[style.header2Style, rightTextStyle]}>
                {headerRightTitle}
              </Text>
            ) : (
              <Image
                source={imageSource}
                style={style.imageStyle}
                resizeMode={'contain'}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
      {children}
    </View>
  );
};

export default SectionHeader;
