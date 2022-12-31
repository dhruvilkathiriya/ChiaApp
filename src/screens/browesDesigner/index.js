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
import {getProduct, resetProducts} from '../../actions/productAction';
import {style} from './styles';
import {colors} from '../../helper/colors';
import RefineClosetModal from '../../components/common/refineClosetModal';

const BrowesDesigner = ({route}) => {
  const [refineModalVisible, setRefineModalVisible] = useState(false);
  const [filterObj, setFilterObj] = useState({});

  const screenType = route?.params?.screenType || 'Browes Designer';
  const designerId = route?.params?.designerId;
  const {productList, productLoading, page, hasNextPage} = useSelector(
    state => state.product,
  );

  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetProducts());
    let data = {page: 1};
    if (designerId) {
      data.designer = designerId;
    }
    dispatch(getProduct(data));
  }, [designerId]);

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
    let data = {page: page + 1, ...filterObj};
    if (designerId) {
      data.designer = designerId;
    }
    if (hasNextPage && !productLoading) {
      dispatch(getProduct(data));
    }
  }, [hasNextPage, productLoading]);

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
    dispatch(getProduct({page: 1, designer: itemId}));
    setRefineModalVisible(false);
    setFilterObj({designer: itemId});
  };

  const onOccasionItemPress = itemId => {
    dispatch(getProduct({page: 1, occasion: itemId}));
    setRefineModalVisible(false);
    setFilterObj({occasion: itemId});
  };

  const onStyleItemPress = itemId => {
    dispatch(getProduct({page: 1, style: itemId}));
    setRefineModalVisible(false);
    setFilterObj({style: itemId});
  };

  const onColorPress = selectedColor => {
    dispatch(getProduct({page: 1, color: selectedColor}));
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

export default BrowesDesigner;
