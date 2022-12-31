import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {colors} from '../../../helper/colors';
import {icons} from '../../../helper/iconsConstants';
import {strings} from '../../../helper/strings';
import {fontSize} from '../../../helper/utils';

import {style} from './styles';

const BagItemView = ({
  rentDateTime,
  productImgSource,
  dateTimeVisible,
  name,
  brand,
  size,
  price1,
  price2,
  onCancelPress,
  onEditPress,
  children,
  showCancelBtn,
  isEditButtonVisible,
}) => {
  return (
    <View style={style.mainContainer}>
      {dateTimeVisible && (
        <Text style={style.dateTimeTextStyle}>{rentDateTime}</Text>
      )}
      <View style={style.bagItemMainView}>
        <View style={style.itemImageView}>
          <Image
            source={productImgSource}
            style={style.productImageStyle}
            resizeMode={'cover'}
          />
        </View>
        <View style={style.itemDetailsView}>
          <Text style={style.dateTimeTextStyle} numberOfLines={1}>
            {name}
          </Text>
          <Text style={style.headerTextStyle} numberOfLines={1}>
            {brand}
          </Text>
          <Text style={style.headerTextStyle}>{size}</Text>
          <View style={style.priceAndEditTextViewStyle}>
            <View style={style.priceDetailsView}>
              <Text
                style={[
                  style.headerTextStyle,
                  {color: colors.placeholderText, lineHeight: fontSize(19)},
                ]}>
                {price1}
              </Text>
              <Text
                style={[
                  style.headerTextStyle,
                  {fontWeight: '500', lineHeight: fontSize(19)},
                ]}>
                {' '}
                | {price2}
              </Text>
            </View>
            {isEditButtonVisible && (
              <TouchableOpacity onPress={onEditPress}>
                <Text style={style.editTextStyle}>EDIT</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        {!showCancelBtn && (
          <TouchableOpacity
            onPress={onCancelPress}
            hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
            style={style.cancelViewStyle}>
            <Image
              source={icons.close}
              style={style.cancelImgStyle}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        )}
      </View>
      {children}
    </View>
  );
};

export default BagItemView;
