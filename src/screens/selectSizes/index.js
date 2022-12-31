import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused, useNavigation} from '@react-navigation/native';

import {ItemSelectionHeader, ItemSelectionList, Loader} from '../../components';
import {getSizes} from '../../actions/listingActions';
import {style} from './styles';
import _ from 'lodash';

const SelectSizes = ({route}) => {
  const categoryId = _.get(route, 'params.categoryId', '');

  const {goBack, canGoBack} = useNavigation();

  const {sizes, isSizesLoading} = useSelector(state => state.sizes);

  const dispatch = useDispatch();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      const data = {
        categoryId: categoryId,
      };
      dispatch(getSizes(data));
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
      <ItemSelectionList
        title={item?.standard.join(' / ')}
        onPress={() => onItemPress(item)}
      />
    );
  };

  return (
    <View style={style.mainContainer}>
      <ItemSelectionHeader title={'Select Size'} goBack={goBack} />
      <FlatList
        data={sizes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Loader visible={isSizesLoading} />
    </View>
  );
};

export default SelectSizes;
