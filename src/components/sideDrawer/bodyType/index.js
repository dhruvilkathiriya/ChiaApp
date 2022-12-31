import React from 'react';
import {ScrollView, View} from 'react-native';
import {strings} from '../../../helper/strings';
import CategoryList from '../categoryList';
import LeftTitle from '../leftTitle';

const BodyType = ({onBackPress}) => {
  return (
    <View>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <LeftTitle title={strings.returnToMainMenu} onPress={onBackPress} />
        <CategoryList title={strings.apple} />
        <CategoryList title={strings.athletic} />
        <CategoryList title={strings.bumpFriendly} />
        <CategoryList title={strings.fullBlast} />
        <CategoryList title={strings.hourGlass} />
        <CategoryList title={strings.pear} />
        <CategoryList title={strings.pettite} />
        <CategoryList title={strings.straightAndNarrow} />
      </ScrollView>
    </View>
  );
};
export default BodyType;
