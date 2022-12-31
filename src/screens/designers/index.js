import React, {useEffect, useCallback} from 'react';
import {View, ScrollView, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';

import {Header, DesignersListItem, SearchBar, Loader} from '../../components';
import {SectionHeader} from '../../components';
import {ProfileHeader} from '../../components';
import {strings} from '../../helper/strings';
import {style} from './style';
import {
  getProductDesigner,
  updateInterests,
} from '../../actions/interestsActions';

const Designers = () => {
  const {productDesignersLoading, productDesigners, updateInterestsLoading} =
    useSelector(state => state.interests);
  const {user} = useSelector(state => state.user);
  const userDesigners = user?.interest?.designers || [];
  const userStyles = user?.interest?.styles || [];
  const userSizes = user?.interest?.sizes || [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDesigner());
  }, []);

  const debouncedSearch = useCallback(
    _.debounce(text => {
      const data = {search: text};
      dispatch(getProductDesigner(data));
    }, 500),
    [],
  );

  const updateDesignersInterests = selectedDesigners => {
    const apiObj = {
      styles: _.map(userStyles, item => item.id),
      sizes: _.map(userSizes, item => item.id),
      designers: selectedDesigners,
    };
    dispatch(updateInterests(apiObj));
  };

  const onAddItemPress = data => {
    const selectedDesigners = _.map(userDesigners, item => item.id);
    if (!selectedDesigners.includes(data.id)) {
      selectedDesigners.push(data?.id);
      updateDesignersInterests(selectedDesigners);
    }
  };

  const onRemoveItemPress = data => {
    const selectedDesigners = _.map(userDesigners, item => item.id);
    updateDesignersInterests(
      _.filter(selectedDesigners, item => item !== data?.id),
    );
  };

  const renderYourDesigners = () =>
    userDesigners.map(item => (
      <DesignersListItem
        key={item.id}
        data={item}
        enableLeftCross={true}
        onCrossPress={() => onRemoveItemPress(item)}
      />
    ));

  const renderItem = ({item}) => (
    <DesignersListItem
      data={item}
      hideCross={true}
      onCrossPress={() => onAddItemPress(item)}
    />
  );

  return (
    <>
      <View style={style.mainContainer}>
        <Header />
        <ProfileHeader title={strings.designers} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <SearchBar
            placeholder={strings.searchDesigners}
            onChangeText={debouncedSearch}
          />
          <SectionHeader
            titleTextStyle={style.sectionHeaderTitle}
            headerLeftTitle={strings.yourDesigners}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={style.yourDesignersList}>
              {renderYourDesigners()}
            </ScrollView>
          </SectionHeader>
          <FlatList
            data={productDesigners}
            scrollEnabled={false}
            style={style.mainList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </View>
      <Loader visible={productDesignersLoading || updateInterestsLoading} />
    </>
  );
};

export default Designers;
