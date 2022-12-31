import React from 'react';
import {View, Text, Image} from 'react-native';

import {colors} from '../../../helper/colors';
import {fontSize} from '../../../helper/utils';

import {style} from './styles';

const ProductItemView = ({
  name,
  brand,
  size,
  price1,
  price2,
  productImgSource,
}) => {
  return (
    <View style={style.mainContainer}>
      <View style={style.bagItemMainView}>
        <View style={style.itemImageView}>
          <Image
            source={productImgSource}
            style={style.productImageStyle}
            resizeMode={'cover'}
          />
        </View>
        <View style={style.itemDetailsView}>
          <Text style={style.productNameStyle}>{name}</Text>
          <Text style={style.productNameStyle}>{brand}</Text>
          <Text style={style.productNameStyle}>{size}</Text>
          <View style={style.priceAndEditTextViewStyle}>
            <View style={style.priceDetailsView}>
              <Text style={style.priceTextStyle}>{price1}</Text>
              <Text
                style={[
                  style.priceTextStyle,
                  {fontWeight: '500', color: colors.secondaryColor},
                ]}>
                {' '}
                | {price2}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductItemView;
