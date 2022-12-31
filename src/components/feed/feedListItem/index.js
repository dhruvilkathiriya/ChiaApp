import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {get} from 'lodash';

import DotIndicator from '../../common/dotIndicator';
import {wp} from '../../../helper/constants';
import {icons} from '../../../helper/iconsConstants';
import {strings} from '../../../helper/strings';
import {style} from './styles';

const FeedListItem = ({
  onSendPress,
  onBegPress,
  onHeartPress,
  data,
  onUserNamePress,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onSnapToItem = index => setActiveIndex(index);

  const renderItem = ({item}) => (
    <Image style={style.itemImage} source={{uri: item}} resizeMode={'cover'} />
  );

  const title = `${get(data, 'designer.name', '')} - ${get(
    data,
    'subCategory.name',
    '',
  )}`;

  return (
    <View style={style.mainContainer}>
      <Carousel
        data={data?.images}
        renderItem={renderItem}
        sliderWidth={wp(100)}
        itemWidth={wp(90)}
        onSnapToItem={onSnapToItem}
      />
      <DotIndicator
        length={data?.images?.length || 1}
        activeIndex={activeIndex}
      />
      <View style={style.topDetailsContainer}>
        <View style={style.titleContainer}>
          <Text style={style.headerText}>{title || ''}</Text>
          <Text style={style.pricingText}>
            {`$${data?.sellingPrice || '0'} | $${data?.originalPrice || '0'} ${
              strings.originalRetail
            }`}
          </Text>
        </View>
        <View style={style.buttonsContainer}>
          <TouchableOpacity onPress={onSendPress}>
            <Image
              source={icons.send}
              resizeMode={'contain'}
              style={style.buttonIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onBegPress}>
            <Image
              source={icons.cart}
              resizeMode={'contain'}
              style={style.buttonIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onHeartPress}>
            <Image
              source={data?.like ? icons.filledHeart : icons.heart}
              resizeMode={'contain'}
              style={style.buttonIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.userNameContainer}>
        <Image
          source={{uri: data?.user?.picture}}
          style={style.userImage}
          resizeMode={'cover'}
        />
        <Text style={style.userNameText} onPress={onUserNamePress}>{`@${
          data?.user?.firstName || ''
        }`}</Text>
      </View>
      <Text style={style.descriptionText}>{data?.description || ''}</Text>
    </View>
  );
};

export default FeedListItem;
