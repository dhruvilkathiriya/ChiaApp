import React, {useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused, useNavigation} from '@react-navigation/native';

import {ItemSelectionHeader, ItemSelectionList, Loader} from '../../components';
import {style} from './styles';
import {getConditions} from '../../actions/listingActions';

const SelectCondition = ({route}) => {
  const {goBack, canGoBack} = useNavigation();

  const {conditions, isConditionsLoading} = useSelector(
    state => state.conditions,
  );

  const dispatch = useDispatch();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(getConditions());
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
        title={item?.key}
        onPress={() => onItemPress(item)}
        titleTextStyle={style.titleTextStyle}>
        <Text style={style.decsTextStyle}>{item?.description}</Text>
      </ItemSelectionList>
    );
  };

  return (
    <View style={style.mainContainer}>
      <ItemSelectionHeader title={'Select Designers'} goBack={goBack} />
      <FlatList
        data={conditions}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Loader visible={isConditionsLoading} />
    </View>
  );
};

export default SelectCondition;
