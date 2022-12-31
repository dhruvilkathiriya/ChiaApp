import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import ProductListItem from '../../components/common/productListItem';
import {style} from './styles';
import {
  ClosetFiltersSection,
  Header,
  ItemByCategoryHeader,
} from '../../components';
import {getLikedProducts} from '../../actions/myHeartsAction';
import {colors} from '../../helper/colors';
import RefineClosetModal from '../../components/common/refineClosetModal';

const MyHearts = ({navigation}) => {
  const [refineModalVisible, setRefineModalVisible] = useState(false);
  const [filterObj, setFilterObj] = useState({});
  const {likedProducts, likedProductsLoading, page, hasNextPage} = useSelector(
    state => state.myHearts,
  );

  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(getLikedProducts({page: page}));
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (hasNextPage) {
      dispatch(getLikedProducts({page: page}));
    }
  }, []);

  const renderItem = ({item}) => {
    return (
      <ProductListItem
        item={item?.product}
        onPress={() =>
          navigate('ListingItemDetails', {
            data: item?.product,
            userId: item?.product?.user,
          })
        }
        itemId={item?.product?.id}
        isLike={item?.product?.like}
      />
    );
  };

  const loadMoreLikedProducts = useCallback(() => {
    if (hasNextPage && !likedProductsLoading) {
      dispatch(
        getLikedProducts({
          page: page + 1,
          ...filterObj,
        }),
      );
    }
  }, [hasNextPage, likedProductsLoading]);

  const onRefinePress = () => {
    // navigate('RefineCloset')
    setRefineModalVisible(true);
  };

  const onCloseModalPress = () => {
    setRefineModalVisible(false);
  };

  const renderFooter = () => {
    return (
      <View style={style.footer}>
        {likedProductsLoading ? (
          <View style={{flexDirection: 'row'}}>
            <ActivityIndicator color={colors.secondaryColor} />
            <Text style={style.footerTextStyle}>{'Loading...'}</Text>
          </View>
        ) : null}
      </View>
    );
  };

  const onDesignerItemPress = itemId => {
    dispatch(getLikedProducts({page: 1, designer: itemId}));
    setRefineModalVisible(false);
    setFilterObj({designer: itemId});
  };

  const onOccasionItemPress = itemId => {
    dispatch(getLikedProducts({page: 1, occasion: itemId}));
    setRefineModalVisible(false);
    setFilterObj({occasion: itemId});
  };

  const onStyleItemPress = itemId => {
    dispatch(getLikedProducts({page: 1, style: itemId}));
    setRefineModalVisible(false);
    setFilterObj({style: itemId});
  };

  const onColorPress = selectedColor => {
    dispatch(getLikedProducts({page: 1, color: selectedColor}));
    setRefineModalVisible(false);
    setFilterObj({color: selectedColor});
  };

  return (
    <>
      <Header />
      <View style={style.mainContainer}>
        <ItemByCategoryHeader title={'My Hearts'} />
        <ClosetFiltersSection onRefinePress={onRefinePress} />
        <SafeAreaView style={{flex: 1}}>
          <FlatList
            data={likedProducts}
            scrollEnabled={true}
            renderItem={renderItem}
            style={style.containerStyle}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            onEndReachedThreshold={0.5}
            onEndReached={loadMoreLikedProducts}
            ListFooterComponent={renderFooter}
          />
        </SafeAreaView>
      </View>
      <RefineClosetModal
        modalVisible={refineModalVisible}
        onClosePress={onCloseModalPress}
        onDesignerItemPress={onDesignerItemPress}
        onOccasionItemPress={onOccasionItemPress}
        onStyleItemPress={onStyleItemPress}
        onColorPress={onColorPress}
      />
    </>
  );
};

export default MyHearts;
