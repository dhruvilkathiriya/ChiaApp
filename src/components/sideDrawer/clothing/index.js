import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';
import CategoryList from '../categoryList';
import LeftTitle from '../leftTitle';

const Clothing = ({onBackPress}) => {
  const {listOfCategories} = useSelector(state => state.categories);

  const {navigate} = useNavigation();

  const onItemPress = item => {
    navigate('Clothing', {clothingId: item?.id, screenType: item?.name});
  };

  const renderClothingItem = ({item}) => (
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
          data={listOfCategories}
          showsHorizontalScrollIndicator={false}
          renderItem={renderClothingItem}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
};
export default Clothing;
