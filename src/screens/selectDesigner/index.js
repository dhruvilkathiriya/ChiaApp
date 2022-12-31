import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused, useNavigation} from '@react-navigation/native';

import {ItemSelectionHeader, ItemSelectionList, Loader} from '../../components';
import {style} from './styles';
import {getDesigners} from '../../actions/listingActions';

const SelectDesigners = ({route}) => {
  const {goBack, canGoBack} = useNavigation();

  const {designers, isDesignersLoading} = useSelector(state => state.designers);

  const dispatch = useDispatch();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(getDesigners());
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
      <ItemSelectionHeader title={'Select Designers'} goBack={goBack} />
      <FlatList
        data={designers}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Loader visible={isDesignersLoading} />
    </View>
  );
};

export default SelectDesigners;
