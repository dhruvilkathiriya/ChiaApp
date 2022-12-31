import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {get, isEmpty} from 'lodash';
import Modal from 'react-native-modal';

import {
  ProfileCategory,
  SectionHeader,
  CommonTextInput,
  ItemSelectionHeader,
  CategoryList,
  ColorView,
} from '../../../components';
import {style} from './styles';
import {colors} from '../../../helper/colors';
import {hp} from '../../../helper/constants';
import {icons} from '../../../helper/iconsConstants';
import {strings} from '../../../helper/strings';
import {useDispatch, useSelector} from 'react-redux';
import {getDesigners} from '../../../actions/listingActions';
import {getProductStyles} from '../../../actions/interestsActions';
import {getOccasion} from '../../../actions/discoverAction';
import {getProductColor} from '../../../actions/productAction';

const sortData = [
  {
    id: 0,
    title: strings.recommended,
    isSelected: false,
  },
  {
    id: 1,
    title: strings.mostPopular,
    isSelected: false,
  },
  {
    id: 2,
    title: strings.rentalHighToLow,
    isSelected: false,
  },
  {
    id: 3,
    title: strings.rentalLowToHigh,
    isSelected: false,
  },
  {
    id: 4,
    title: strings.retailHighToLow,
    isSelected: false,
  },
  {
    id: 5,
    title: strings.retailLowToHigh,
    isSelected: false,
  },
  {
    id: 6,
    title: strings.itemForSale,
    isSelected: false,
  },
  {
    id: 7,
    title: strings.itemForRent,
    isSelected: false,
  },
];

const RefineClosetModal = ({
  modalVisible,
  onClosePress,
  onDesignerItemPress,
  onOccasionItemPress,
  onStyleItemPress,
  onColorPress,
}) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [designerVisible, setDesignerVisible] = useState(false);
  const [occasionVisible, setOccasionVisible] = useState(false);
  const [styleVisible, setStyleVisible] = useState(false);

  const {designers} = useSelector(state => state.designers);
  const {occasionList} = useSelector(state => state.discover);
  const {productStyles} = useSelector(state => state.interests);
  const {productColorList} = useSelector(state => state.product);

  const {navigate, goBack, canGoBack} = useNavigation();
  const dispatch = useDispatch();

  // const apiCallFunction = get(route, 'params.function', null);
  // const apiCallParams = get(route, 'params.apiParams', null);

  useEffect(() => {
    if (isEmpty(designers)) {
      dispatch(getDesigners());
    }
    if (isEmpty(productStyles)) {
      dispatch(getProductStyles());
    }
    if (isEmpty(occasionList)) {
      dispatch(getOccasion());
    }
    if (isEmpty(productColorList)) {
      dispatch(getProductColor());
    }
  }, []);

  const onMinPriceChange = text => setMinPrice(text);

  const onMaxPriceChange = text => setMaxPrice(text);

  const onHeartPress = () => navigate('MyHearts');

  const onDesignerPress = () => {
    setDesignerVisible(!designerVisible);
  };

  const onStylePress = () => {
    setStyleVisible(!styleVisible);
  };

  const onOccasionPress = () => {
    setOccasionVisible(!occasionVisible);
  };

  // const onDesignerItemPress = item => {
  //   // if (apiCallFunction !== null) {
  //   //   const params = {
  //   //     designer: get(item, 'id', ''),
  //   //     ...(!isEmpty(apiCallParams) && apiCallParams),
  //   //   };
  //   //   dispatch(apiCallFunction(params));
  //   //   canGoBack() && goBack();
  //   // }
  // };

  const renderDesignersItem = ({item}) => (
    <CategoryList
      title={get(item, 'name', '')}
      onPress={() => onDesignerItemPress(item.id)}
    />
  );

  const renderOccasionsItem = ({item}) => (
    <CategoryList
      title={get(item, 'name', '')}
      onPress={() => onOccasionItemPress(item.id)}
    />
  );

  const renderStyleItem = ({item}) => (
    <CategoryList
      title={get(item, 'name', '')}
      onPress={() => onStyleItemPress(item.id)}
    />
  );

  const renderItem = ({item}) => {
    const isSelected = item?.isSelected || false;
    const bgColor = isSelected ? colors.checkBoxBg : colors.inputBg;
    return (
      <TouchableOpacity style={style.checkBoxContainer}>
        <View style={[style.tickImageViewStyle, {backgroundColor: bgColor}]}>
          {isSelected && (
            <Image
              source={icons.tick}
              resizeMode={'contain'}
              style={style.tickIcon}
            />
          )}
        </View>
        <Text style={style.titleText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const colorRenderItem = ({item}) => {
    return (
      <ColorView
        onColorPress={() => {
          onColorPress(item.hexCode);
        }}
        item={item}
      />
    );
  };

  return (
    <Modal
      visible={modalVisible}
      onBackButtonPress={onClosePress}
      style={style.mainModalStyle}>
      <ScrollView
        style={style.mainContainer}
        showsVerticalScrollIndicator={false}>
        <ItemSelectionHeader
          title={''}
          goBack={onClosePress}
          mainContainerStyle={style.backButtonStyle}
        />
        <ProfileCategory
          mainTitle={strings.myChia}
          isSwitchVisible={true}
          mainContainer={style.headerContainerStyle}
          titleStyle={style.headerTextStyle}>
          <Text style={style.myHeartTextStyle} onPress={onHeartPress}>
            {strings.myHearts}
          </Text>
          <Text style={style.myHeartTextStyle}>{strings.previouslyRented}</Text>
        </ProfileCategory>

        <ProfileCategory
          mainTitle={strings.sort}
          isSwitchVisible={true}
          mainContainer={style.headerContainerStyle}
          titleStyle={style.headerTextStyle}>
          <FlatList
            data={sortData}
            scrollEnabled={false}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </ProfileCategory>

        <ProfileCategory
          mainTitle={strings.price}
          isSwitchVisible={true}
          mainContainer={style.headerContainerStyle}
          titleStyle={style.headerTextStyle}>
          <View style={style.minMaxMainViewStyle}>
            <CommonTextInput
              placeholder={strings.minPrice}
              value={minPrice}
              onChangeText={onMinPriceChange}
              mainContainer={style.textInputMainContainer}
              keyboardType={'numeric'}
              inputStyle={style.inputTextStyle}
            />
            <View style={style.deviderViewStyle} />
            <CommonTextInput
              placeholder={strings.maxPrice}
              value={maxPrice}
              onChangeText={onMaxPriceChange}
              mainContainer={style.textInputMainContainer}
              keyboardType={'numeric'}
              inputStyle={style.inputTextStyle}
            />
          </View>
        </ProfileCategory>

        <ProfileCategory
          mainTitle={strings.color}
          isSwitchVisible={true}
          mainContainer={style.headerContainerStyle}
          titleStyle={style.headerTextStyle}>
          <FlatList
            data={productColorList}
            scrollEnabled={false}
            numColumns={5}
            style={{alignSelf: 'center'}}
            renderItem={colorRenderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </ProfileCategory>

        <SectionHeader
          headerLeftTitle={strings.designerTitle}
          imageSource={designerVisible ? icons.horizontalLine : icons.plusIcon}
          titleTextStyle={style.designerTitleStyle}
          outterContainerStyle={style.sectionHeaderMainView}
          imageVisible={true}
          onRightBtnPress={onDesignerPress}
        />

        {designerVisible && (
          <FlatList
            data={designers}
            showsHorizontalScrollIndicator={false}
            renderItem={renderDesignersItem}
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={() => <View style={style.headerStyle} />}
          />
        )}

        <SectionHeader
          headerLeftTitle={strings.occasion}
          imageSource={occasionVisible ? icons.horizontalLine : icons.plusIcon}
          titleTextStyle={style.designerTitleStyle}
          outterContainerStyle={style.sectionHeaderMainView}
          imageVisible={true}
          onRightBtnPress={onOccasionPress}
        />

        {occasionVisible && (
          <FlatList
            data={occasionList}
            showsHorizontalScrollIndicator={false}
            renderItem={renderOccasionsItem}
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={() => <View style={style.headerStyle} />}
          />
        )}
        <SectionHeader
          headerLeftTitle={strings.bodyType}
          imageSource={false ? icons.horizontalLine : icons.plusIcon}
          titleTextStyle={style.designerTitleStyle}
          outterContainerStyle={style.sectionHeaderMainView}
          imageVisible={true}
        />
        <SectionHeader
          headerLeftTitle={strings.weather}
          imageSource={false ? icons.horizontalLine : icons.plusIcon}
          titleTextStyle={style.designerTitleStyle}
          outterContainerStyle={style.sectionHeaderMainView}
          imageVisible={true}
        />
        <SectionHeader
          headerLeftTitle={strings.style}
          imageSource={styleVisible ? icons.horizontalLine : icons.plusIcon}
          titleTextStyle={style.designerTitleStyle}
          outterContainerStyle={style.sectionHeaderMainView}
          imageVisible={true}
          onRightBtnPress={onStylePress}
        />

        {styleVisible && (
          <FlatList
            data={productStyles}
            renderItem={renderStyleItem}
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={() => <View style={style.headerStyle} />}
          />
        )}

        <View style={{height: hp(8)}} />
      </ScrollView>
    </Modal>
  );
};

export default RefineClosetModal;
