import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  HomeAuthButton,
  HomeTitleHeader,
  ProductListItem,
} from '../../components';
import {strings} from '../../helper/strings';
import {style} from './styles';
import {
  getBrandsWeLoveProducts,
  getMostLikedProduct,
  getOccasion,
} from '../../actions/discoverAction';
import {useDispatch, useSelector} from 'react-redux';
import {getProduct, getProductColor} from '../../actions/productAction';
import {getIsUserLogin, loginAlert} from '../../helper/global';

const Discover = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    async function setLoginState() {
      const val = await getIsUserLogin();
      setIsLogin(val);
    }

    setLoginState();
  }, []);

  useEffect(() => {
    if (isLogin) {
      dispatch(getProductColor());
    }
  }, [isLogin]);

  const {productList} = useSelector(state => state.product);

  const {navigate} = useNavigation();

  const dispatch = useDispatch();

  const {occasionList, mostLikedProductList, brandsWeLoveProducts} =
    useSelector(state => state.discover);

  const onLoginPress = () => navigate('Login');

  const onSignUpPress = () => navigate('Signup');

  const onWhatsNewBtnPress = () => {
    if (isLogin) {
      navigate('NewArrival', {screenType: 'New Arrival'});
    } else {
      loginAlert();
    }
  };

  const onMostLovedShopAllPress = () => {
    if (isLogin) {
      navigate('MostLoved');
    } else {
      loginAlert();
    }
  };

  const onOccassionPress = item => {
    if (isLogin) {
      navigate('NewArrival', {screenType: 'Shop by Occasion'});
    } else {
      loginAlert();
    }
  };

  const renderItem = ({item}) => {
    return (
      <ProductListItem
        item={item}
        itemId={item?.id}
        isLike={item?.like}
        checkLogin={true}
        onPress={() =>
          navigate('ListingItemDetails', {
            data: item,
            userId: item?.user,
          })
        }
      />
    );
  };

  const shopRenderItem = ({item}) => (
    <TouchableOpacity
      style={style.shopBtnViewStyle}
      onPress={() => onOccassionPress(item)}>
      <Text style={style.btnTextStyle}>{item.name}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    dispatch(getProduct({page: 1, sort: '-createdAt'}));
    dispatch(getOccasion());
    dispatch(getMostLikedProduct());
    dispatch(getBrandsWeLoveProducts());
  }, []);

  const ItemSeparatorComponent = () => <View style={style.itemSepratorStyle} />;

  const ListFooterComponent = () => <View style={style.footerStyle} />;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={style.mainContainer}>
      {!isLogin && (
        <HomeAuthButton
          firstText={strings.loginTitle}
          onFirstBtnPress={onLoginPress}
          secondText={strings.signupTitle}
          onSecondBtnPress={onSignUpPress}
        />
      )}
      <HomeTitleHeader
        firstText={strings.whatsNew}
        secondText={strings.shopAll}
        onBtnPress={onWhatsNewBtnPress}
      />
      <FlatList
        data={productList.slice(0, 3)}
        horizontal={true}
        renderItem={renderItem}
        style={style.flatList1Container}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListFooterComponent={ListFooterComponent}
      />
      <HomeTitleHeader
        firstText={strings.shopByOccassion}
        secondTitleVisible={true}
      />

      <FlatList
        data={occasionList}
        horizontal={true}
        renderItem={shopRenderItem}
        style={style.shopContainerStyle}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListFooterComponent={ListFooterComponent}
      />

      <View style={style.brandViewStyle}>
        <FlatList
          data={brandsWeLoveProducts}
          horizontal={true}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={
            <Text style={style.textStyle}>{strings.brandsWeLove}</Text>
          }
          ListFooterComponent={ItemSeparatorComponent}
          ItemSeparatorComponent={ItemSeparatorComponent}
        />
      </View>

      <HomeTitleHeader
        firstText={`${strings.mostLoved + ' '}`}
        secondText={strings.shopAll}
        onBtnPress={onMostLovedShopAllPress}
      />
      <FlatList
        data={mostLikedProductList.slice(0, 3)}
        horizontal={true}
        renderItem={renderItem}
        style={style.flatList2Container}
        keyExtractor={index => index}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={ItemSeparatorComponent}
        ListFooterComponent={ItemSeparatorComponent}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </ScrollView>
  );
};

export default Discover;
