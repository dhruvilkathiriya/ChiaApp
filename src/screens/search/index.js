import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {SearchBar, SearchItems, SectionHeader} from '../../components';
import {style} from './styles';
import {icons} from '../../helper/iconsConstants';
import {strings} from '../../helper/strings';
import {getRecentSearch, getSavedSearch} from '../../actions/searchActions';
import {colors} from '../../helper/colors';

const popularSearch = [
  {
    id: 0,
    name: 'Summer Dress',
  },
  {
    id: 1,
    name: 'Balenciaga',
  },
  {
    id: 2,
    name: 'Sun Hat',
  },
  {
    id: 3,
    name: 'Chuncky Necklace',
  },
];

const Search = () => {
  const [search, setSearch] = useState('');
  const {recentSearch, recentSearchLoading, savedSearch, savedSearchLoading} =
    useSelector(state => state.search);

  const {navigate, goBack, addListener} = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const dispatchEvent = addListener('focus', () => {
      dispatch(getRecentSearch());
      dispatch(getSavedSearch());
    });
    return dispatchEvent;
  }, []);

  const onItemPress = text => navigate('SearchResults', {searchText: text});

  const onManageSearchPress = () => navigate('SavedSearches');

  const onSearchPress = () => {
    if (search?.length) {
      navigate('SearchResults', {searchText: search});
      setSearch('');
    }
  };

  const onSearchTextChange = text => setSearch(text);

  const renderItem = ({item}) => {
    return <SearchItems data={item} onItemPress={onItemPress} />;
  };

  return (
    <ScrollView
      style={style.mainContainer}
      showsVerticalScrollIndicator={false}>
      <TouchableOpacity
        style={style.closeImgView}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        onPress={goBack}>
        <Image
          source={icons.close}
          style={style.cancelImgStyle}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
      <SearchBar
        value={search}
        placeholder={strings.search}
        onChangeText={onSearchTextChange}
        mainContainer={style.searchBarMainStyle}
        onSearchPress={onSearchPress}
      />

      <SectionHeader
        headerLeftTitle={strings.recent}
        mainContainer={style.headerContainerStyle}
        titleTextStyle={style.headerTextStyle}
        rightTextStyle={style.headerTextStyle}>
        <FlatList
          data={recentSearch}
          scrollEnabled={false}
          renderItem={renderItem}
          style={style.subContainer}
          keyExtractor={item => item.id}
          ListEmptyComponent={() => {
            if (recentSearchLoading) {
              return (
                <ActivityIndicator
                  color={colors.primaryColor}
                  style={style.emptyLoader}
                />
              );
            }
            return null;
          }}
        />
      </SectionHeader>

      <SectionHeader
        headerLeftTitle={strings.savedSearches}
        headerRightTitle={strings.manageSearches}
        onRightBtnPress={onManageSearchPress}
        mainContainer={style.headerContainerStyle}
        titleTextStyle={style.headerTextStyle}
        rightTextStyle={style.headerTextStyle}>
        <FlatList
          data={savedSearch}
          scrollEnabled={false}
          renderItem={renderItem}
          style={style.subContainer}
          keyExtractor={item => item.id}
          ListEmptyComponent={() => {
            if (savedSearchLoading) {
              return (
                <ActivityIndicator
                  color={colors.primaryColor}
                  style={style.emptyLoader}
                />
              );
            }
            return null;
          }}
        />
      </SectionHeader>

      <SectionHeader
        headerLeftTitle={strings.popular}
        mainContainer={style.headerContainerStyle}
        titleTextStyle={style.headerTextStyle}
        rightTextStyle={style.headerTextStyle}>
        <FlatList
          data={popularSearch}
          scrollEnabled={false}
          renderItem={renderItem}
          style={style.subContainer}
          keyExtractor={item => item.id}
        />
      </SectionHeader>
    </ScrollView>
  );
};

export default Search;
