import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';

import {
  ProfileHeader,
  EditSizeListItem,
  Header,
  Loader,
} from '../../components';
import {strings} from '../../helper/strings';
import {style} from './style';
import {getProductSizes, updateInterests} from '../../actions/interestsActions';

const EditYourSize = () => {
  const [sizesData, setSizesData] = useState([]);

  const {productSizesLoading, productSizes, updateInterestsLoading} =
    useSelector(state => state.interests);
  const {user} = useSelector(state => state.user);
  const userSizes = user?.interest?.sizes || [];
  const userStyles = user?.interest?.styles || [];
  const userDesigners = user?.interest?.designers || [];
  const selectedSizes = _.map(userSizes, item => item.id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductSizes());
  }, []);

  useEffect(() => {
    let sizesData = _.groupBy(productSizes, 'type');
    sizesData = _.map(_.values(sizesData), (item, key) => {
      return {
        id: key.toString(),
        title: _.keys(sizesData)[key],
        values: _.map(item, subItem => {
          return {
            ...subItem,
            title: subItem.standard?.join(', '),
            isSelected: selectedSizes.includes(subItem.id),
          };
        }),
      };
    });
    setSizesData(sizesData);
  }, [productSizes, user]);

  const updateSizesInterests = selectedUserSizes => {
    const apiObj = {
      styles: _.map(userStyles, item => item.id),
      sizes: selectedUserSizes,
      designers: _.map(userDesigners, item => item.id),
    };
    dispatch(updateInterests(apiObj));
  };

  const onItemPress = data => {
    if (selectedSizes.includes(data?.id)) {
      updateSizesInterests(_.filter(selectedSizes, item => item !== data?.id));
    } else {
      selectedSizes.push(data?.id || '');
      updateSizesInterests(selectedSizes);
    }
  };

  const renderItem = ({item}) => (
    <EditSizeListItem data={item} onPress={onItemPress} />
  );

  return (
    <>
      <View style={style.mainContainer}>
        <Header />
        <ProfileHeader title={strings.editYourSizes} />
        <FlatList
          data={sizesData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <Loader visible={productSizesLoading || updateInterestsLoading} />
    </>
  );
};

export default EditYourSize;
