import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {get} from 'lodash';

import {style} from './styles';
import {icons} from '../../../helper/iconsConstants';
import {
  createLikeProduct,
  deleteLikedProduct,
} from '../../../actions/myHeartsAction';
import {getIsUserLogin} from '../../../helper/global';
import {colors} from '../../../helper/colors';

const onHeartPress = (item, itemId, isLike, dispatch) => {
  if (isLike) {
    dispatch(
      deleteLikedProduct({
        itemID: itemId,
      }),
    );
  } else {
    dispatch(createLikeProduct({item}));
  }
};

const ProductListItem = ({item, itemId, isLike, onPress, checkLogin}) => {
  const [isLogin, setIsLogin] = useState(checkLogin ? false : true);

  const dispatch = useDispatch();

  useEffect(() => {
    async function setLoginState() {
      const val = await getIsUserLogin();
      setIsLogin(val);
    }

    if (checkLogin) setLoginState();
  }, []);

  const title = `${get(item, 'designer.name', '')} - ${get(
    item,
    'subCategory.name',
    '',
  )}`;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={
        item?.available && (checkLogin ? isLogin : true) ? false : true
      }>
      <ImageBackground
        source={item?.images ? {uri: item?.images[0]} : icons.itemBg}
        style={style.mainContainer}
        resizeMode={'cover'}>
        <TouchableOpacity
          style={style.heartViewStyle}
          onPress={() =>
            isLogin && onHeartPress(item, itemId, isLike, dispatch)
          }>
          <Image
            source={item?.like ? icons.filledHeart : icons.heart}
            style={[
              style.heartIcon,
              {tintColor: item?.like ? colors.whiteBg : colors.secondaryColor},
            ]}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <View style={style.textViewStyle}>
          <Text style={style.textStyle}>{title}</Text>
          {item?.originalPrice ? (
            <Text style={style.textStyle}>{`$${item?.originalPrice}`}</Text>
          ) : null}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ProductListItem;
