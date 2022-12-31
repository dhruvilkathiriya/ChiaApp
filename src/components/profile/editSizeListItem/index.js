import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';

import {SectionHeader} from '../../../components';
import {colors} from '../../../helper/colors';
import {icons} from '../../../helper/iconsConstants';
import {style} from './style';

const EditSizeListItem = ({data, onPress}) => {
  const renderItem = ({item}) => {
    const isSelected = item?.isSelected || false;
    const bgColor = isSelected ? colors.checkBoxBg : colors.inputBg;
    return (
      <TouchableOpacity
        style={style.checkBoxContainer}
        onPress={() => onPress && onPress(item)}>
        <View style={[style.mainContainer, {backgroundColor: bgColor}]}>
          {isSelected && (
            <Image
              source={icons.tick}
              resizeMode={'contain'}
              style={style.tickIcon}
            />
          )}
        </View>
        <Text style={style.titleText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SectionHeader
      titleTextStyle={style.mainTitle}
      headerLeftTitle={data?.title}>
      <FlatList
        data={data?.values || []}
        scrollEnabled={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SectionHeader>
  );
};

export default EditSizeListItem;
