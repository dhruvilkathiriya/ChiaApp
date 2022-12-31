import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';

import {Header, StyleListItem, Loader} from '../../components';
import {ProfileHeader} from '../../components';
import {strings} from '../../helper/strings';
import {style} from './style';
import {
  getProductStyles,
  updateInterests,
} from '../../actions/interestsActions';

const Styles = () => {
  const [styles, setStyles] = useState([]);

  const {productStylesLoading, productStyles, updateInterestsLoading} =
    useSelector(state => state.interests);
  const {user} = useSelector(state => state.user);
  const userStyles = user?.interest?.styles || [];
  const userDesigners = user?.interest?.designers || [];
  const userSizes = user?.interest?.sizes || [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductStyles());
  }, []);

  useEffect(() => {
    const selectedStyles = _.map(userStyles, item => item.id);
    const finalData = _.map(productStyles, item => {
      return {...item, isSelected: selectedStyles.includes(item.id)};
    });
    setStyles(finalData);
  }, [productStyles, user]);

  const onItemPress = data => {
    const finalData = _.map(styles, item => {
      if (item?.id === data?.id) {
        return {...item, isSelected: !item.isSelected};
      } else return item;
    });
    setStyles(finalData);

    const selectedStyles = _.filter(finalData, item => item?.isSelected);
    const apiObj = {
      styles: _.map(selectedStyles, item => item.id),
      sizes: _.map(userSizes, item => item.id),
      designers: _.map(userDesigners, item => item.id),
    };
    dispatch(updateInterests(apiObj));
  };

  const renderItem = ({item}) => (
    <StyleListItem data={item} onPress={() => onItemPress(item)} />
  );

  return (
    <>
      <View style={style.mainContainer}>
        <Header />
        <ProfileHeader title={strings.styles} />
        <FlatList
          data={styles}
          renderItem={renderItem}
          numColumns={3}
          keyExtractor={item => item.id}
        />
      </View>
      <Loader visible={productStylesLoading || updateInterestsLoading} />
    </>
  );
};
export default Styles;
