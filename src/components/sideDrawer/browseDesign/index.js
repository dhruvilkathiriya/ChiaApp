import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList, ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';

import CategoryList from '../categoryList';
import LeftTitle from '../leftTitle';

const BrowseDesign = ({onBackPress}) => {
  const {designers} = useSelector(state => state.designers);

  const {navigate} = useNavigation();

  const onItemPress = item => {
    navigate('BrowesDesigner', {designerId: item?.id});
  };

  const renderDesignersItem = ({item}) => (
    <CategoryList
      title={item?.name}
      onPress={() => {
        onItemPress(item);
      }}
    />
  );

  return (
    <View>
      <ScrollView>
        <LeftTitle title={'RETURN TO MAIN MENU'} onPress={onBackPress} />
        <FlatList
          data={designers}
          showsHorizontalScrollIndicator={false}
          renderItem={renderDesignersItem}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
};
export default BrowseDesign;
