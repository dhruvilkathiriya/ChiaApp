import React from 'react';
import {ScrollView, View, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {strings} from '../../../helper/strings';
import BrowseColor from '../../browseColor';
import CategoryList from '../categoryList';
import LeftTitle from '../leftTitle';
import SubTitle from '../subTitle';
import {style} from './style';

const BrowseStyle = ({onBackPress}) => {
  const {productStyles} = useSelector(state => state.interests);

  const {navigate} = useNavigation();

  const onItemPress = item => {
    navigate('BrowesStyle', {styleId: item?.id, screenType: item?.name});
  };

  const renderStyles = ({item}) => {
    return (
      <CategoryList
        title={item?.name}
        onPress={() => {
          onItemPress(item);
        }}
      />
    );
  };

  return (
    <View style={style.mainContainer}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <LeftTitle title={strings.returnToMainMenu} onPress={onBackPress} />
        <SubTitle title={'COLOR'} />
        <BrowseColor />
        <SubTitle title={'PATTERN'} />
        <CategoryList title={strings.all} />
        <CategoryList title={strings.animal} />
        <CategoryList title={strings.embellished} />
        <CategoryList title={strings.floral} />
        <CategoryList title={strings.geometric} />
        <CategoryList title={strings.gingham} />
        <CategoryList title={strings.priented} />
        <CategoryList title={strings.stripes} />
        <CategoryList title={strings.tyeDye} />
        <SubTitle title={'MATERIAL'} />
        <CategoryList title={strings.lace} />
        <CategoryList title={strings.leather} />
        <CategoryList title={strings.velvet} />
        <CategoryList title={strings.sequins} />
        <CategoryList title={strings.suede} />
        <SubTitle title={'STYLE'} />
        <FlatList
          data={productStyles}
          renderItem={renderStyles}
          keyExtractor={item => item.id}
          ListFooterComponent={<View style={style.styleListFooter} />}
        />
      </ScrollView>
    </View>
  );
};
export default BrowseStyle;
