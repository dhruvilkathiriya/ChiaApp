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
import {style} from './styles';
import {colors} from '../../helper/colors';
import {getMostLikedProduct} from '../../actions/discoverAction';
import {strings} from '../../helper/strings';
import RefineClosetModal from '../../components/common/refineClosetModal';

const MostLoved = ({route, navigation}) => {
  const [refineModalVisible, setRefineModalVisible] = useState(false);
  const [filterObj, setFilterObj] = useState({});

  const {mostLikedProductList, occasionLoading, hasNextPage, page} =
    useSelector(state => state.discover);

  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (hasNextPage) {
      dispatch(
        getMostLikedProduct({
          page: page,
        }),
      );
    }
  }, [navigation]);

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
    if (hasNextPage && !occasionLoading) {
      dispatch(
        getMostLikedProduct({
          page: page + 1,
          ...filterObj,
        }),
      );
    }
  }, [hasNextPage, occasionLoading]);

  const renderFooter = () => {
    return (
      <View style={style.footer}>
        {occasionLoading ? (
          <View style={{flexDirection: 'row'}}>
            <ActivityIndicator color={colors.secondaryColor} />
            <Text style={style.footerTextStyle}>{'Loading...'}</Text>
          </View>
        ) : null}
      </View>
    );
  };

  const onDesignerItemPress = itemId => {
    dispatch(getMostLikedProduct({page: 1, designer: itemId}));
    setRefineModalVisible(false);
    setFilterObj({designer: itemId});
  };

  const onOccasionItemPress = itemId => {
    dispatch(getMostLikedProduct({page: 1, occasion: itemId}));
    setRefineModalVisible(false);
    setFilterObj({occasion: itemId});
  };

  const onStyleItemPress = itemId => {
    dispatch(getMostLikedProduct({page: 1, style: itemId}));
    setRefineModalVisible(false);
    setFilterObj({style: itemId});
  };

  const onColorPress = selectedColor => {
    dispatch(getMostLikedProduct({page: 1, color: selectedColor}));
    setRefineModalVisible(false);
    setFilterObj({color: selectedColor});
  };

  return (
    <>
      <Header />
      <View style={style.mainContainer}>
        <ItemByCategoryHeader title={strings.mostLoved} />
        <ClosetFiltersSection onRefinePress={onRefinePress} />
        <SafeAreaView style={{flex: 1}}>
          <FlatList
            data={mostLikedProductList}
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

export default MostLoved;
