import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {strings} from '../../../helper/strings';
import CategoryList from '../categoryList';
import LeftTitle from '../leftTitle';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const Occasion = ({onBackPress}) => {
  const {occasionList} = useSelector(state => state.discover);

  const {navigate} = useNavigation();

  const onItemPress = item => {
    navigate('NewArrival', {screenType: 'Shop by Occasion'});
  };

  const renderOccasionsItem = ({item}) => (
    <CategoryList
      title={item?.name}
      onPress={() => {
        onItemPress(item);
      }}
    />
  );

  return (
    <View>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <LeftTitle title={strings.returnToMainMenu} onPress={onBackPress} />
        <FlatList
          data={occasionList}
          showsHorizontalScrollIndicator={false}
          renderItem={renderOccasionsItem}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
};
export default Occasion;
