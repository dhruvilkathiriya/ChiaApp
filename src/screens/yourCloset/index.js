import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import _ from 'lodash';

import {UserDetails, ProductListItem, Loader} from '../../components';
import {strings} from '../../helper/strings';
import {icons} from '../../helper/iconsConstants';
import {colors} from '../../helper/colors';
import {getCurrentUserProducts} from '../../actions/currentUserProductAction';
import {style} from './styles';
import {getUserProfile} from '../../actions/userActions';
import ActionSheet from 'react-native-actionsheet';
import ImagePicker from 'react-native-image-crop-picker';
import {preSignedURL} from '../../actions/awsS3Actions';
import {editProfile} from '../../actions/profileActions';
import RefineClosetModal from '../../components/common/refineClosetModal';
import {getActiveBadgesList} from '../../helper/helperFunctions';

const YourCloset = () => {
  const [userTagsList, setUserTagsList] = useState([]);
  const [refineModalVisible, setRefineModalVisible] = useState(false);
  const [filterObj, setFilterObj] = useState({});

  const {user, authLoading} = useSelector(state => state.user);
  const {userProfile} = useSelector(state => state.userProfile);
  const {products, productsLoading, pageLoading, hasNextPage, page} =
    useSelector(state => state.currentUserProducts);
  const {preSignedURLs, preSignedLoading} = useSelector(state => state.awsS3);

  const {navigate, addListener} = useNavigation();
  const dispatch = useDispatch();
  const actionSheet = useRef();

  useEffect(() => {
    const dispatchEvent = addListener('focus', () => {
      dispatch(getCurrentUserProducts({userId: user?.id, page: page}));
      dispatch(getUserProfile({userId: user?.id}));
    });
    return dispatchEvent;
  }, [addListener]);

  useEffect(() => {
    const userTagsData = getActiveBadgesList(user);
    setUserTagsList(userTagsData);
  }, [user]);

  const loadMoreYourClosetProducts = useCallback(() => {
    if (hasNextPage && !productsLoading) {
      dispatch(
        getCurrentUserProducts({
          userId: user?.id,
          page: page + 1,
          ...filterObj,
        }),
      );
    }
  }, [hasNextPage, productsLoading]);

  const onFilterPress = () => {
    // navigate('RefineCloset', {
    //   function: getCurrentUserProducts,
    //   apiParams: {
    //     userId: user?.id,
    //     page: 1,
    //   },
    // });
    setRefineModalVisible(true);
  };

  const onCloseModalPress = () => {
    setRefineModalVisible(false);
  };

  const renderItem = ({item}) => (
    <ProductListItem
      item={item}
      onPress={() =>
        navigate('ListingItemDetails', {data: item, userId: item?.user})
      }
      itemId={item?.id}
      isLike={item?.like}
    />
  );

  const renderHeader = () => {
    return (
      <UserDetails
        userName={user?.firstName || ''}
        profileName={`@${user?.firstName || ''}`}
        rateCounter={user?.buyerAverageRating}
        totalRatingCounter={`(${user?.buyerRatingCount})`}
        sourceIcon={icons.filterIcon}
        onItemPress={onFilterPress}
        userTagsList={userTagsList}
        followersCount={userProfile?.followerCount || '0'}
        transactionsCount={userProfile?.transactions || '0'}
        onUserProfileImagePress={onProfileImagePress}
        profileImageUploading={preSignedLoading || authLoading}
        profileImgUrl={user?.picture}
      />
    );
  };

  const renderFooter = () => {
    return (
      <View style={style.footer}>
        {productsLoading ? (
          <View style={{flexDirection: 'row'}}>
            <ActivityIndicator color={colors.secondaryColor} />
            <Text style={style.footerTextStyle}>{'Loading...'}</Text>
          </View>
        ) : null}
      </View>
    );
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && !_.isEmpty(preSignedURLs) && !preSignedLoading) {
      const data = {
        picture: preSignedURLs?.url.split('?')[0],
        editMode: 'editProfileImageMode',
      };
      dispatch(editProfile(data));
    }
  }, [preSignedURLs]);

  const onProfileImagePress = () => {
    actionSheet.current.show();
  };

  const openCamera = (width = 400, height = 400) => {
    ImagePicker.openCamera({
      width,
      height,
      cropping: true,
      includeBase64: true,
    }).then(data => {
      let filename = data?.path.substring(
        data?.path.lastIndexOf('/') + 1,
        data?.path.length,
      );
      const preSign = {
        key: filename,
        contentType: data?.mime,
        uri: data.path,
      };
      dispatch(preSignedURL(preSign));
    });
  };

  const openImagePicker = (width = 400, height = 400) => {
    ImagePicker.openPicker({
      width,
      height,
      cropping: true,
      includeBase64: true,
    }).then(data => {
      let filename = data?.path.substring(
        data?.path.lastIndexOf('/') + 1,
        data?.path.length,
      );
      const preSign = {
        key: filename,
        contentType: data?.mime,
        uri: data.path,
      };
      dispatch(preSignedURL(preSign));
    });
  };

  const onDesignerItemPress = itemId => {
    dispatch(
      getCurrentUserProducts({userId: user?.id, page: 1, designer: itemId}),
    );
    setRefineModalVisible(false);
    setFilterObj({designer: itemId});
  };

  const onOccasionItemPress = itemId => {
    dispatch(
      getCurrentUserProducts({userId: user?.id, page: 1, occasion: itemId}),
    );
    setRefineModalVisible(false);
    setFilterObj({occasion: itemId});
  };

  const onStyleItemPress = itemId => {
    dispatch(
      getCurrentUserProducts({userId: user?.id, page: 1, style: itemId}),
    );
    setRefineModalVisible(false);
    setFilterObj({style: itemId});
  };

  const onColorPress = selectedColor => {
    dispatch(
      getCurrentUserProducts({userId: user?.id, page: 1, color: selectedColor}),
    );
    setRefineModalVisible(false);
    setFilterObj({color: selectedColor});
  };

  const emptyListComponent = () => {
    return (
      <Text style={style.emptyListComponentTextStyle}>
        No Products available
      </Text>
    );
  };

  return (
    <View style={style.mainContainer}>
      <Loader visible={pageLoading} />
      <FlatList
        data={products}
        scrollEnabled={true}
        renderItem={renderItem}
        style={style.containerStyle}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        onEndReachedThreshold={0.1}
        onEndReached={loadMoreYourClosetProducts}
        ListHeaderComponent={renderHeader()}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={emptyListComponent}
      />
      <ActionSheet
        ref={actionSheet}
        options={['Camera', 'Gallery', 'Cancel']}
        destructiveButtonIndex={2}
        cancelButtonIndex={2}
        onPress={index => {
          if (index === 0) {
            openCamera();
          } else if (index === 1) {
            openImagePicker();
          }
        }}
      />
      <RefineClosetModal
        modalVisible={refineModalVisible}
        onClosePress={onCloseModalPress}
        onDesignerItemPress={onDesignerItemPress}
        onOccasionItemPress={onOccasionItemPress}
        onStyleItemPress={onStyleItemPress}
        onColorPress={onColorPress}
      />
    </View>
  );
};

export default YourCloset;
