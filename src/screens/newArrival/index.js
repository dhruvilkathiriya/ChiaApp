import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import ProductListItem from '../../components/common/productListItem';
import {
  ClosetFiltersSection,
  Header,
  ItemByCategoryHeader,
} from '../../components';
import {getProduct} from '../../actions/productAction';
import {style} from './styles';
import {colors} from '../../helper/colors';
import RefineClosetModal from '../../components/common/refineClosetModal';

const NewArrival = ({route, navigation}) => {
  const [refineModalVisible, setRefineModalVisible] = useState(false);
  const [filterObj, setFilterObj] = useState({});

  const screenType = route?.params?.screenType || '';
  const {productList, productLoading, page, hasNextPage} = useSelector(
    state => state.product,
  );

  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const defaultParams = {
    ...(screenType === 'New Arrival' && {sort: '-createdAt'}),
  };

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     dispatch(getProduct({page: page, ...defaultParams}));
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  useEffect(() => {
    dispatch(getProduct({page: 1, ...defaultParams}));
  }, [screenType]);

  // useEffect(() => {
  //   if (hasNextPage) {
  //     dispatch(getProduct({page: page, ...defaultParams}));
  //   }
  // }, []);

  const renderItem = ({item}) => {
    return (
      <ProductListItem
        item={item}
        onPress={() =>
          navigate('ListingItemDetails', {data: item, userId: item?.user})
        }
        itemId={item?.id}
        isLike={item?.like}
      />
    );
  };

  const onRefinePress = () => {
    // navigate('RefineCloset')
    setRefineModalVisible(true);
  };

  const onCloseModalPress = () => {
    setRefineModalVisible(false);
  };

  const loadMoreProducts = useCallback(() => {
    if (hasNextPage && !productLoading) {
      dispatch(
        getProduct({
          page: page + 1,
          ...filterObj,
          ...defaultParams,
        }),
      );
    }
  }, [hasNextPage, productLoading, filterObj]);

  const renderFooter = () => {
    return (
      <View style={style.footer}>
        {productLoading ? (
          <View style={{flexDirection: 'row'}}>
            <ActivityIndicator color={colors.secondaryColor} />
            <Text style={style.footerTextStyle}>{'Loading...'}</Text>
          </View>
        ) : null}
      </View>
    );
  };

  const onDesignerItemPress = itemId => {
    dispatch(getProduct({page: 1, designer: itemId, ...defaultParams}));
    setRefineModalVisible(false);
    setFilterObj({designer: itemId});
  };

  const onOccasionItemPress = itemId => {
    dispatch(getProduct({page: 1, occasion: itemId, ...defaultParams}));
    setRefineModalVisible(false);
    setFilterObj({occasion: itemId});
  };

  const onStyleItemPress = itemId => {
    dispatch(getProduct({page: 1, style: itemId, ...defaultParams}));
    setRefineModalVisible(false);
    setFilterObj({style: itemId});
  };

  const onColorPress = selectedColor => {
    dispatch(getProduct({page: 1, color: selectedColor, ...defaultParams}));
    setRefineModalVisible(false);
    setFilterObj({color: selectedColor});
  };

  return (
    <>
      <Header />
      <View style={style.mainContainer}>
        <ItemByCategoryHeader title={screenType} />
        <ClosetFiltersSection onRefinePress={onRefinePress} />
        <SafeAreaView style={{flex: 1}}>
          <FlatList
            data={productList}
            scrollEnabled={true}
            renderItem={renderItem}
            style={style.containerStyle}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            onEndReachedThreshold={0.5}
            onEndReached={loadMoreProducts}
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

export default NewArrival;
