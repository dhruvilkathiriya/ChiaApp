import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {useIsDrawerOpen} from '@react-navigation/drawer';
import {useDispatch, useSelector} from 'react-redux';

import {style} from './styles';
import {
  BodyType,
  BrowseStyle,
  CategoryList,
  Clothing,
  DrawerTitle,
  Occasion,
  SubTitle,
} from '../../components';
import {strings} from '../../helper/strings';
import BrowseDesign from '../../components/sideDrawer/browseDesign';
import {getCategories, getDesigners} from '../../actions/listingActions';
import {getOccasion} from '../../actions/discoverAction';
import {getProductStyles} from '../../actions/interestsActions';

const SideDrawer = () => {
  const {dispatch} = useNavigation();

  const apiDispatch = useDispatch();

  const closeDrawer = () => {
    dispatch(DrawerActions.closeDrawer());
  };

  const isDrawerOpen = useIsDrawerOpen();

  const [isClothingVisible, setIsClothingVisible] = useState(false);
  const onClothingPress = () => setIsClothingVisible(!isClothingVisible);

  const [isDesignerVisible, setIsDesignerVisible] = useState(false);
  const onDesignerPress = () => {
    setIsDesignerVisible(!isDesignerVisible);
  };

  useEffect(() => {
    if (isDrawerOpen) {
      apiDispatch(getDesigners());
      apiDispatch(getProductStyles());
      apiDispatch(getOccasion());
      apiDispatch(getCategories());
    }
  }, [isDrawerOpen]);

  const [isStyleVisible, setIsStyleVisible] = useState(false);
  const onStylePress = () => setIsStyleVisible(!isStyleVisible);

  const [isOccasionVisible, setIsOccasionVisible] = useState(false);
  const onOccasionPress = () => setIsOccasionVisible(!isOccasionVisible);

  const [isTypeVisible, setIsTypeVisible] = useState(false);
  const onTypePress = () => setIsTypeVisible(!isTypeVisible);

  const {navigate} = useNavigation();

  const {user} = useSelector(state => state.user);

  return (
    <View style={style.mainContainer}>
      <DrawerTitle
        title={'HEY, ' + user?.firstName || ''}
        onPress={closeDrawer}
      />
      {!isClothingVisible &&
        !isDesignerVisible &&
        !isStyleVisible &&
        !isOccasionVisible &&
        !isTypeVisible && (
          <View>
            <CategoryList
              title={strings.home}
              onPress={() => navigate('HomeTopTab')}
            />
            <CategoryList
              title={strings.browseAll}
              onPress={() => navigate('NewArrival', {screenType: 'Browse All'})}
            />
            <CategoryList
              title={strings.new}
              onPress={() =>
                navigate('NewArrival', {screenType: 'New Arrival'})
              }
            />
            <CategoryList
              title={strings.mostWanted}
              onPress={() =>
                navigate('NewArrival', {screenType: 'Most Wanted'})
              }
            />
            <CategoryList
              title={strings.clothing}
              rightIcon
              onPress={onClothingPress}
            />
            <CategoryList
              title={strings.browseByDesigner}
              rightIcon
              onPress={onDesignerPress}
            />
            <CategoryList
              title={strings.browseByStyle}
              rightIcon
              onPress={onStylePress}
            />
            <CategoryList
              title={strings.browseByOccasion}
              rightIcon
              onPress={onOccasionPress}
            />
            <CategoryList
              title={strings.browseByBodyType}
              rightIcon
              onPress={onTypePress}
            />
            <SubTitle title={strings.myChia} />
            <CategoryList
              title={strings.hearts}
              onPress={() => navigate('MyHearts')}
            />
            <CategoryList
              title={strings.orderHistory}
              onPress={() => navigate('OrderHistory')}
            />
            <CategoryList
              title={strings.myProfile}
              onPress={() => navigate('User')}
            />
          </View>
        )}
      {isClothingVisible && <Clothing onBackPress={onClothingPress} />}
      {isDesignerVisible && <BrowseDesign onBackPress={onDesignerPress} />}
      {isStyleVisible && <BrowseStyle onBackPress={onStylePress} />}
      {isOccasionVisible && <Occasion onBackPress={onOccasionPress} />}
      {isTypeVisible && <BodyType onBackPress={onTypePress} />}
    </View>
  );
};

export default SideDrawer;
