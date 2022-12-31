import React, {useEffect, useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';

import {icons} from '../../../helper/iconsConstants';
import {style} from './styles';
import {getIsUserLogin, loginAlert} from '../../../helper/global';

const Header = ({leftCloseIcon, onClosePress, onLayout}) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    async function setLoginState() {
      const val = await getIsUserLogin();
      setIsLogin(val);
    }

    setLoginState();
  }, []);

  const {navigate, dispatch} = useNavigation();

  const onSearchPress = () => {
    if (isLogin) navigate('Search');
    else loginAlert();
  };

  const onMyHeartPress = () => {
    if (isLogin) navigate('MyHearts');
    else loginAlert();
  };

  const onCartPress = () => {
    if (isLogin) navigate('Bag');
    else loginAlert();
  };

  const onMenuPress = () => {
    if (isLogin) dispatch(DrawerActions.toggleDrawer());
    else loginAlert();
  };

  return (
    <View style={style.mainContainer} onLayout={onLayout}>
      <View style={style.leftContainer}>
        <TouchableOpacity
          onPress={leftCloseIcon ? onClosePress : onMenuPress}
          style={style.menuIconContainerStyle}>
          <Image
            source={leftCloseIcon ? icons.close : icons.menu}
            style={style.menuIcon}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <Image
          source={icons.chiaLogo}
          style={style.chiaLogoIcon}
          resizeMode={'contain'}
        />
      </View>

      <View style={style.rightContainer}>
        <TouchableOpacity
          style={style.rightIconsContainer}
          onPress={onSearchPress}>
          <Image
            source={icons.search}
            style={style.searchIcon}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.rightIconsContainer}
          onPress={onMyHeartPress}>
          <Image
            source={icons.heart}
            style={style.rightIcons}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.rightIconsContainer}
          onPress={onCartPress}>
          <Image
            source={icons.cart}
            style={style.rightIcons}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
