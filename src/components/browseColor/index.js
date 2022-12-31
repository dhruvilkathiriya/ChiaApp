import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {style} from './style';

const BrowseColor = ({}) => {
  const colorRenderItem = () => {
    return <TouchableOpacity style={style.colorMainViewStyle} />;
  };
  return (
    <View>
      <FlatList
        data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
        scrollEnabled={false}
        numColumns={5}
        renderItem={colorRenderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default BrowseColor;
