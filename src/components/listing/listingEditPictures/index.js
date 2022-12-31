import React from 'react';
import {View, FlatList, Image, TouchableOpacity} from 'react-native';

import {icons} from '../../../helper/iconsConstants';
import {style} from './styles';

const ListingEditPictures = ({data, onImgSelectionPress}) => {
  const renderItem = ({item, index}) => {
    if (index === data?.length) {
      return (
        <TouchableOpacity
          style={style.uploadImageContainer}
          onPress={onImgSelectionPress}>
          <Image
            source={icons.uploadIcon}
            style={style.uploadImageIcon}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      );
    }
    return (
      <Image
        source={{uri: item}}
        style={style.listImage}
        resizeMode={'cover'}
      />
    );
  };

  return (
    <FlatList
      data={[...data, '0']}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      ListHeaderComponent={<View style={style.headerFooter} />}
      ListFooterComponent={<View style={style.headerFooter} />}
      keyExtractor={item => item}
    />
  );
};

export default ListingEditPictures;
