import React, {useEffect, useState} from 'react';
import {View, FlatList, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import _ from 'lodash';

import {
  Header,
  StyleListItem,
  DesignersListItem,
  YourSizesListItem,
} from '../../components';
import {SectionHeader} from '../../components';
import {ProfileHeader} from '../../components';
import {strings} from '../../helper/strings';
import {style} from './style';

const InterestAndSizes = () => {
  const [yourSizesData, setYourSizesData] = useState([]);

  const {navigate} = useNavigation();

  const {user} = useSelector(state => state.user);
  const interest = user?.interest || {};

  useEffect(() => {
    if (!_.isEmpty(interest)) {
      let sizesData = _.groupBy(interest?.sizes, 'type');
      sizesData = _.map(_.values(sizesData), (item, key) => {
        return {
          id: key.toString(),
          title: _.keys(sizesData)[key],
          values: _.map(item, subItem => subItem.standard?.join(', ')).join(
            ', ',
          ),
        };
      });
      setYourSizesData(sizesData);
    }
  }, [interest]);

  const onEditStylePress = () => navigate('Styles');

  const onEditDesignersPress = () => navigate('Designers');

  const onYourSizesPress = () => navigate('EditYourSize');

  const renderStylesItem = ({item}) => (
    <StyleListItem data={item} hideSelection={true} />
  );

  const renderDesignersItem = ({item}) => (
    <DesignersListItem data={item} hideCross={true} />
  );

  const renderYourSizesItem = ({item}) => <YourSizesListItem data={item} />;

  return (
    <View style={style.mainContainer}>
      <Header />
      <ProfileHeader title={strings.interestsAndSizes} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SectionHeader
          headerLeftTitle={strings.styles}
          headerRightTitle={strings.editStyles}
          mainContainer={style.subHeaderContainer}
          onRightBtnPress={onEditStylePress}>
          <FlatList
            data={interest?.styles || []}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={renderStylesItem}
            keyExtractor={item => item.id}
          />
        </SectionHeader>
        <SectionHeader
          headerLeftTitle={strings.designers}
          headerRightTitle={strings.editDesigners}
          mainContainer={style.subHeaderContainer}
          onRightBtnPress={onEditDesignersPress}>
          <FlatList
            data={interest?.designers || []}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={<View style={style.headerComponent} />}
            renderItem={renderDesignersItem}
            keyExtractor={item => item.id}
          />
        </SectionHeader>
        <SectionHeader
          headerLeftTitle={strings.yourSizes}
          headerRightTitle={strings.editSizes}
          mainContainer={style.subHeaderContainer}
          onRightBtnPress={onYourSizesPress}>
          <FlatList
            data={yourSizesData}
            scrollEnabled={false}
            renderItem={renderYourSizesItem}
            keyExtractor={item => item.id}
          />
        </SectionHeader>
      </ScrollView>
    </View>
  );
};

export default InterestAndSizes;
