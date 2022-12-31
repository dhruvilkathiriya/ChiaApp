import React from 'react';
import {View, Text, FlatList} from 'react-native';

import {style} from './styles';

const ListingPricing = ({title, value, isSingle, mainTitle}) => {
  const renderItem = ({item}) => {
    return (
      <View style={style.listItemContainer}>
        <Text style={style.titleText}>{'$' + item?.days + ' Day'}</Text>
        <Text style={style.titleText}>
          {'$' + item?.pricePerDay + ' / Day'}
        </Text>
      </View>
    );
  };

  return isSingle ? (
    <View style={style.mainContainer}>
      <Text style={style.titleText}>{title}</Text>
      <Text style={style.titleText}>{value}</Text>
    </View>
  ) : (
    <View style={style.multiMainContainer}>
      <Text style={style.titleText}>{mainTitle}</Text>
      <FlatList
        data={value}
        scrollEnabled={false}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
      />
    </View>
  );
};

export default ListingPricing;
