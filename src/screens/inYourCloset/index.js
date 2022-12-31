import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text, View, FlatList, ActivityIndicator} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import {
  Header,
  ItemByCategoryHeader,
  BagItemView,
} from '../../components/index';
import {style} from './style';
import _ from 'lodash';
import {navigate} from '../../navigation/navigationsServices';
import RefineClosetModal from '../../components/common/refineClosetModal';
import {getCurrentUserProducts} from '../../actions/currentUserProductAction';
import {colors} from '../../helper/colors';

const InYourCloset = () => {
  // const [rentProduct, setRentProduct] = useState([]);
  // const [saleProduct, setSaleProduct] = useState([]);
  const [filterObj, setFilterObj] = useState({});
  const [refineModalVisible, setRefineModalVisible] = useState(false);

  const {products, productsLoading, hasNextPage, page} = useSelector(
    state => state.currentUserProducts,
  );

  const isFocused = useIsFocused();

  const dispatch = useDispatch();

  useEffect(() => {
    if (isFocused) {
      dispatch(getCurrentUserProducts({page: 1}));
    }
  }, [isFocused]);

  // useEffect(() => {
  //   if (products?.length > 0) {
  //     let sale_data = _.filter(products || [], {
  //       availableToPurchase: true,
  //     });
  //     let rent_data = _.filter(products || [], {
  //       availableToPurchase: false,
  //     });
  //     setSaleProduct(sale_data);
  //     setRentProduct(rent_data);
  //   }
  // }, [products]);

  // console.log('Product ::--', products);

  const renderItem = ({item}) => {
    const title = `${_.get(item, 'designer.name', '')} - ${_.get(
      item,
      'subCategory.name',
      '',
    )}`;
    return (
      <BagItemView
        name={title}
        brand={item?.description || ''}
        size={'SIZE'}
        price1={`$${item?.originalPrice || 0}`}
        price2={`$${item?.sellingPrice || 0}`}
        isEditButtonVisible
        showCancelBtn={true}
        productImgSource={{uri: item?.images[0]}}
        onEditPress={() => onEditPress(item)}
      />
    );
  };

  const loadMoreLikedProducts = useCallback(() => {
    if (hasNextPage && !productsLoading) {
      dispatch(
        getCurrentUserProducts({
          page: page + 1,
          ...filterObj,
        }),
      );
    }
  }, [hasNextPage, productsLoading, filterObj]);

  const renderFooter = () => {
    return (
      <View style={style.footer}>
        {productsLoading ? (
          <View style={{flexDirection: 'row'}}>
            <ActivityIndicator color={colors.secondaryColor} />
            <Text style={style.footerTextStyle}>{'Loading...'}</Text>
          </View>
        ) : null}
      </View>
    );
  };

  const onFilterIconPress = () => {
    // navigate('RefineCloset');
    setRefineModalVisible(true);
  };

  const onCloseModalPress = () => {
    setRefineModalVisible(false);
  };

  const onEditPress = item => {
    navigate('Listing', {
      listedProductData: item,
    });
  };

  const onDesignerItemPress = itemId => {
    dispatch(getCurrentUserProducts({page: 1, designer: itemId}));
    setRefineModalVisible(false);
    setFilterObj({designer: itemId});
  };

  const onOccasionItemPress = itemId => {
    dispatch(getCurrentUserProducts({page: 1, occasion: itemId}));
    setRefineModalVisible(false);
    setFilterObj({occasion: itemId});
  };

  const onStyleItemPress = itemId => {
    dispatch(getCurrentUserProducts({page: 1, style: itemId}));
    setRefineModalVisible(false);
    setFilterObj({style: itemId});
  };

  const onColorPress = selectedColor => {
    dispatch(getCurrentUserProducts({page: 1, color: selectedColor}));
    setRefineModalVisible(false);
    setFilterObj({color: selectedColor});
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header />
      <ItemByCategoryHeader
        title={'IN YOUR CLOSET'}
        filterViewVisible={true}
        onFilterIconPress={onFilterIconPress}
        mainContainerStyle={{marginVertical: 3}}
      />
      {/* {!_.isEmpty(rentProduct) && (
          <View style={style.mainContainer}>
            <Text style={style.titleText}>FOR RENT</Text>
          </View>
        )} */}
      <FlatList
        data={products}
        renderItem={renderItem}
        style={style.flatListStyle}
        keyExtractor={item => item.id}
        onEndReachedThreshold={0.5}
        onEndReached={loadMoreLikedProducts}
        ListFooterComponent={renderFooter}
      />
      {/* {!_.isEmpty(saleProduct) && (
          <View style={style.mainContainer}>
            <Text style={style.titleText}>FOR RENT AND SALE</Text>
          </View>
        )}
        <FlatList
          renderItem={renderItem}
          data={saleProduct}
          style={style.flatListStyle}
          keyExtractor={item => item.id}
        /> */}
      <RefineClosetModal
        modalVisible={refineModalVisible}
        onClosePress={onCloseModalPress}
        onDesignerItemPress={onDesignerItemPress}
        onOccasionItemPress={onOccasionItemPress}
        onStyleItemPress={onStyleItemPress}
        onColorPress={onColorPress}
      />
    </View>
  );
};
export default InYourCloset;
