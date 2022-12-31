import React from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteSavedSearch} from '../../actions/searchActions';

import {Header, ProfileHeader, SavedSearchItem} from '../../components';
import {strings} from '../../helper/strings';
import {style} from './styles';

const SavedSearches = () => {
  const {savedSearch} = useSelector(state => state.search);

  const dispatch = useDispatch();

  const onDeletePress = item => {
    dispatch(
      deleteSavedSearch({
        itemID: item?.id,
      }),
    );
  };

  const renderItem = ({item}) => {
    return (
      <SavedSearchItem data={item} onDeletePress={() => onDeletePress(item)} />
    );
  };

  return (
    <View style={style.mainContainer}>
      <Header />
      <ProfileHeader title={strings.savedSearches} />
      <FlatList
        data={savedSearch}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default SavedSearches;
