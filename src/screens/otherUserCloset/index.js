import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, View, ActivityIndicator, Text} from 'react-native';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import Clipboard from '@react-native-community/clipboard';
import Share from 'react-native-share';

import {
  UserDetails,
  Header,
  ClosetFiltersSection,
  ProfileMenuModal,
  Loader,
} from '../../components';
import ProductListItem from '../../components/common/productListItem';
import {style} from './styles';
import {strings} from '../../helper/strings';
import {icons} from '../../helper/iconsConstants';
import {hp} from '../../helper/constants';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentUserProducts} from '../../actions/currentUserProductAction';
import {getUserProfile} from '../../actions/userActions';
import {followUser, unfollowUser} from '../../actions/followUnfollowAction';
import {turnOnOffNotification} from '../../actions/notificationAction';
import {colors} from '../../helper/colors';
import SimpleToast from 'react-native-simple-toast';
import RefineClosetModal from '../../components/common/refineClosetModal';
import {getActiveBadgesList} from '../../helper/helperFunctions';

const OtherUserCloset = ({route}) => {
  const [userTagsList, setUserTagsList] = useState([]);
  const [refineModalVisible, setRefineModalVisible] = useState(false);
  const [menuModalVisible, setMenuModalVisible] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [userHeight, setUserHeight] = useState(0);
  const [filterObj, setFilterObj] = useState({});
  const [turnOnNotification, setTurnOnNotification] = useState(
    follow?.turnNotification,
  );

  const userId = route?.params?.userId || '';

  const {products, productsLoading, pageLoading, hasNextPage, page} =
    useSelector(state => state.currentUserProducts);
  const {userProfile} = useSelector(state => state.userProfile);
  const {user} = useSelector(state => state.user);
  const {follow, followUnfollowLoading} = useSelector(
    state => state.followUnfollow,
  );
  const {notificationStatusLoading} = useSelector(state => state.notification);

  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const userTagsData = getActiveBadgesList(userProfile);
    setUserTagsList(userTagsData);
  }, [userProfile]);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(getCurrentUserProducts({userId: userId, page: 1}));
    }
  }, [isFocused]);

  useEffect(() => {
    if (isFocused) {
      const data = {userId: userId};
      dispatch(getUserProfile(data));
    }
  }, [followUnfollowLoading, isFocused]);

  const onMenuPress = () => {
    setMenuModalVisible(true);
  };

  const onRefinePress = () => {
    // navigate('RefineCloset')
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

  const onSharePress = () => {
    Share.open({title: '', message: ''})
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  const onFollowUnfollowClosetPress = () => {
    if (userProfile?.follow) {
      const data = {
        following: userId,
      };
      dispatch(unfollowUser(data));
    } else {
      const data = {
        following: userId,
      };
      dispatch(followUser(data));
    }
  };

  const onTurnOnOffNotificationPress = () => {
    const data = {
      following: userId,
      turnOn: !turnOnNotification,
    };
    dispatch(turnOnOffNotification(data));
    setTurnOnNotification(!turnOnNotification);
  };

  const onCopyLinkPress = () => {
    Clipboard.setString(userProfile?.firstName);
    SimpleToast.show('Copied');
  };

  const loadMoreLikedProducts = useCallback(() => {
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

  const renderHeader = () => {
    return (
      <>
        <UserDetails
          userName={userProfile?.firstName || ''}
          profileName={`@${userProfile?.firstName || ''}`}
          rateCounter={userProfile?.buyerAverageRating}
          totalRatingCounter={`(${userProfile?.buyerRatingCount})`}
          sourceIcon={icons.horizontalDots}
          onItemPress={onMenuPress}
          userTagsList={userTagsList}
          followersCount={userProfile?.followerCount || '0'}
          transactionsCount={userProfile?.transactions || '0'}
          mainContainer={style.userDetailsMainView}
          onLayout={value => {
            setUserHeight(value.nativeEvent.layout.y);
          }}
          profileImgUrl={userProfile?.picture || ''}
        />
        <ClosetFiltersSection onRefinePress={onRefinePress} />
      </>
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

  const onDesignerItemPress = itemId => {
    dispatch(
      getCurrentUserProducts({userId: userId, page: 1, designer: itemId}),
    );
    setRefineModalVisible(false);
    setFilterObj({designer: itemId});
  };

  const onOccasionItemPress = itemId => {
    dispatch(
      getCurrentUserProducts({userId: userId, page: 1, occasion: itemId}),
    );
    setRefineModalVisible(false);
    setFilterObj({occasion: itemId});
  };

  const onStyleItemPress = itemId => {
    dispatch(getCurrentUserProducts({userId: userId, page: 1, style: itemId}));
    setRefineModalVisible(false);
    setFilterObj({style: itemId});
  };

  const onColorPress = selectedColor => {
    dispatch(
      getCurrentUserProducts({userId: userId, page: 1, color: selectedColor}),
    );
    setRefineModalVisible(false);
    setFilterObj({color: selectedColor});
  };

  return (
    <>
      <Header />
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
          onEndReachedThreshold={0.5}
          onEndReached={loadMoreLikedProducts}
          ListHeaderComponent={renderHeader()}
          ListFooterComponent={renderFooter}
        />
        <ProfileMenuModal
          followUnFollowLoading={followUnfollowLoading}
          onFollowUnfollowClosetPress={onFollowUnfollowClosetPress}
          followStatus={
            userProfile?.follow ? 'UNFOLLOW CLOSET' : 'FOLLOW CLOSET'
          }
          visible={menuModalVisible}
          onBackPress={() => {
            setMenuModalVisible(false);
          }}
          containerStyle={{
            marginTop: headerHeight + userHeight + hp(1),
          }}
          onSharePress={onSharePress}
          onCopyLinkPress={onCopyLinkPress}
          isFollowUnfollowVisible={user?.id !== userId}
          isTurnOnOffNotificationVisible={
            userProfile?.follow && user?.id !== userId
          }
          notificationStatus={!turnOnNotification ? 'ON' : 'OFF'}
          turnOnOffNotificationLoading={notificationStatusLoading}
          onTurnNotificationPress={onTurnOnOffNotificationPress}
        />
      </View>
      <RefineClosetModal
        modalVisible={refineModalVisible}
        onClosePress={onCloseModalPress}
        onDesignerItemPress={onDesignerItemPress}
        onOccasionItemPress={onOccasionItemPress}
        onStyleItemPress={onStyleItemPress}
        onColorPress={onColorPress}
      />
    </>
  );
};

export default OtherUserCloset;
