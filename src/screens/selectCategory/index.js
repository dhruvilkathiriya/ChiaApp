import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused, useNavigation} from '@react-navigation/native';

import {ItemSelectionHeader, ItemSelectionList, Loader} from '../../components';
import {getCategories} from '../../actions/listingActions';
import {style} from './styles';

const SelectCategory = ({route}) => {
  const {goBack, canGoBack} = useNavigation();
  const {listOfCategories, categoriesLoading} = useSelector(
    state => state.categories,
  );

  const dispatch = useDispatch();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(getCategories());
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
      <ItemSelectionHeader title={'Select Category'} goBack={goBack} />
      <FlatList
        data={listOfCategories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Loader visible={categoriesLoading} />
    </View>
  );
};

export default SelectCategory;
