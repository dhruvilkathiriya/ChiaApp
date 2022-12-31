import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

import {style} from './styles';
import {icons} from '../../../helper/iconsConstants';

const SectionHeaderWithAddIcon = ({
  headerLeftTitle,
  mainContainer,
  outterContainerStyle,
  titleTextStyle,
  contentData,
  isContentAvailable,
  onIconPress,
  isOpen,
}) => {
  const [contentShow, setContentShow] = useState(false);

  const onRightIconPress = () => setContentShow(!contentShow);

  const isContentOpenOrClose = isContentAvailable ? contentShow : isOpen;

  return (
    <View style={[style.outterContainer, outterContainerStyle]}>
      <View style={[style.mainContainer, mainContainer]}>
        <Text style={[style.headerStyle, titleTextStyle]}>
          {headerLeftTitle}
        </Text>
        <TouchableOpacity
          onPress={isContentAvailable ? onRightIconPress : onIconPress}>
          <ImageBackground
            source={icons.horizontalLine}
            style={style.arrowImage}
            resizeMode={'contain'}>
            {!isContentOpenOrClose && (
              <Image
                source={icons.verticalLine}
                style={style.arrowImage}
                resizeMode={'contain'}
              />
            )}
          </ImageBackground>
        </TouchableOpacity>
      </View>
      {isContentAvailable && contentShow ? (
        <View style={style.contentContainerStyle}>
          <Text style={style.contentTextStyle}>{contentData}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default SectionHeaderWithAddIcon;
