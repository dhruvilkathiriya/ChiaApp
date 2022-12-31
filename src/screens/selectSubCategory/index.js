import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused, useNavigation} from '@react-navigation/native';

import {ItemSelectionHeader, ItemSelectionList, Loader} from '../../components';
import {getSubCategories} from '../../actions/listingActions';
import {style} from './styles';
import _ from 'lodash';

const SelectSubCategory = ({route}) => {
  const categoryId = _.get(route, 'params.categoryId', '');

  const {goBack, canGoBack} = useNavigation();

  const {subCategories, isSubCategoriesLoading} = useSelector(
    state => state.subCategories,
  );

  const dispatch = useDispatch();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      const data = {
        categoryId: categoryId,
      };
      dispatch(getSubCategories(data));
    }
  }, [isFocused]);

  const onItemPress = value => {
    if (
      route?.params?.onValueSelect &&
      typeof route?.params?.onValueSelect === 'function'
    ) {
      route?.params?.onValueSelect(value);
      if (canGoBack()) {
        goBack();
      }
    }
  };

  const renderItem = ({item}) => {
    return (
      <ItemSelectionList title={item?.name} onPress={() => onItemPress(item)} />
    );
  };

  return (
    <View style={style.mainContainer}>
      <ItemSelectionHeader title={'Select SubCategory'} goBack={goBack} />
      <FlatList
        data={subCategories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Loader visible={isSubCategoriesLoading} />
    </View>
  );
};

export default SelectSubCategory;
