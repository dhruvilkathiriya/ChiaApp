import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import ProductListItem from '../../components/common/productListItem';
import {style} from './styles';
import {
  ClosetFiltersSection,
  Header,
  ItemByCategoryHeader,
  Loader,
  ProfileCategory,
} from '../../components';
import {strings} from '../../helper/strings';
import {getSearchedProducts} from '../../actions/searchActions';
import RefineClosetModal from '../../components/common/refineClosetModal';
import {colors} from '../../helper/colors';

const SearchResults = ({route}) => {
  const [refineModalVisible, setRefineModalVisible] = useState(false);
  const [filterObj, setFilterObj] = useState({});

  const searchText = route?.params?.searchText || '';
  const {searchedProducts, searchedProductsLoading, page, hasNextPage} =
    useSelector(state => state.search);

  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchText?.length) {
      dispatch(getSearchedProducts({page: 1, search: searchText}));
    }
  }, [searchText]);

  // useEffect(() => {
  //   if (hasNextPage) {
  //     dispatch(getSearchedProducts({page: page, search: searchText}));
  //   }
  // }, []);

  const onRefinePress = () => {
    // navigate('RefineCloset')
    setRefineModalVisible(true);
  };

  const onCloseModalPress = () => {
    setRefineModalVisible(false);
  };

  const loadMoreProducts = useCallback(() => {
    if (hasNextPage && !searchedProductsLoading) {
      dispatch(
        getSearchedProducts({
          page: page + 1,
          search: searchText,
          ...filterObj,
        }),
      );
    }
  }, [hasNextPage, searchedProductsLoading, filterObj]);

  const renderFooter = () => {
    return (
      <View style={style.footer}>
        {searchedProductsLoading ? (
          <View style={{flexDirection: 'row'}}>
            <ActivityIndicator color={colors.secondaryColor} />
            <Text style={style.footerTextStyle}>{'Loading...'}</Text>
          </View>
        ) : null}
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <ProductListItem
        item={item}
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

  const onDesignerItemPress = itemId => {
    dispatch(
      getSearchedProducts({page: 1, search: searchText, designer: itemId}),
    );
    setRefineModalVisible(false);
    setFilterObj({designer: itemId});
  };

  const onOccasionItemPress = itemId => {
    dispatch(
      getSearchedProducts({page: 1, search: searchText, occasion: itemId}),
    );
    setRefineModalVisible(false);
    setFilterObj({occasion: itemId});
  };

  const onStyleItemPress = itemId => {
    dispatch(getSearchedProducts({page: 1, search: searchText, style: itemId}));
    setRefineModalVisible(false);
    setFilterObj({style: itemId});
  };

  const onColorPress = selectedColor => {
    dispatch(
      getSearchedProducts({page: 1, search: searchText, color: selectedColor}),
    );
    setRefineModalVisible(false);
    setFilterObj({color: selectedColor});
  };

  return (
    <>
      <Header />
      <View style={style.mainContainer}>
        <ItemByCategoryHeader title={'SEARCH RESULTS'} />
        <ProfileCategory
          mainTitle={strings.searchResultsDetail}
          isSwitchVisible={false}
          onValueChange={() => {}}
          mainContainer={style.headerContainerStyle}
          titleStyle={style.headerTextStyle}
        />
        <View style={style.sepratorViewStyle} />
        <ClosetFiltersSection onRefinePress={onRefinePress} />
        <SafeAreaView style={{flex: 1}}>
          {searchedProducts.length > 0 ? (
            <FlatList
              data={searchedProducts}
              searchedProducts
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
          ) : (
            <View style={style.noSearchResultView}>
              <Text style={style.noSearchTextStyle}>
                {'No search results found!'}
              </Text>
            </View>
          )}
        </SafeAreaView>
      </View>
      {/* <Loader visible={searchedProductsLoading} /> */}
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

export default SearchResults;
