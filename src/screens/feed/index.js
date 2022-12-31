import React, {useEffect} from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import _ from 'lodash';

import {FeedListItem} from '../../components';
import {strings} from '../../helper/strings';
import {style} from './style';
import {getFeed} from '../../actions/feedAction';
import {
  createLikeProduct,
  deleteLikedProduct,
} from '../../actions/myHeartsAction';
import {createRoom} from '../../actions/messageActions';

const Feed = () => {
  const {feed, feedLoading, endOfFeed} = useSelector(state => state.feed);
  const {user} = useSelector(state => state.user);

  const dispatch = useDispatch();

  const {navigate} = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (_.isEmpty(feed)) {
      if (isFocused) {
        dispatch(getFeed());
      }
    }
  }, [isFocused]);

  const onNeedMorePress = () => navigate('DISCOVER');

  const loadMoreFeed = () => {
    const lastProduct = _.last(feed);
    dispatch(
      getFeed({
        lastProduct: lastProduct?.id,
        feed: feed,
      }),
    );
  };

  const renderFooterComponent = () => (
    <>
      {endOfFeed
        ? !feedLoading && (
            <View style={style.footerContainer}>
              <View>
                <View style={style.footerDivider} />
                <Text style={style.reachedEndText}>
                  {strings.reachedEndOfFeed}
                </Text>
              </View>
              <TouchableOpacity
                style={style.needMoreButton}
                onPress={onNeedMorePress}>
                <Text style={style.needMoreButtonText}>
                  {strings.needMoreInspriation}
                </Text>
              </TouchableOpacity>
            </View>
          )
        : null}
    </>
  );

  const onUserNamePress = item =>
    navigate('OtherUserCloset', {userId: item?.user?.id});

  const onBegPress = item =>
    navigate('ListingItemDetails', {data: item, userId: item?.user?.id});

  const onSendPress = item => {
    if (item?.user?.id !== user?.id) {
      const title = `@${item?.user?.firstName}${item?.user?.lastName}`;
      dispatch(
        createRoom({
          name: item?.user?.firstName,
          participants: [item?.user?.id],
          type: 'renting',
        }),
      );
      navigate('IndiviudalMessage', {
        title,
        profilePic: item?.user?.picture,
      });
    }
  };

  const onHeartPress = item => {
    if (item?.like) {
      dispatch(
        deleteLikedProduct({
          itemID: item?.id,
        }),
      );
    } else {
      dispatch(createLikeProduct({item}));
    }
  };

  const onRefresh = () => {
    dispatch(getFeed());
  };

  const renderItem = ({item}) => (
    <FeedListItem
      data={item}
      onUserNamePress={() => onUserNamePress(item)}
      onBegPress={() => onBegPress(item)}
      onSendPress={() => onSendPress(item)}
      onHeartPress={() => onHeartPress(item)}
    />
  );

  return (
    <View style={style.mainContaiber}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={feedLoading} onRefresh={onRefresh} />
        }
        data={feed}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReachedThreshold={0.5}
        onEndReached={!endOfFeed && loadMoreFeed}
        ListFooterComponent={renderFooterComponent()}
      />
    </View>
  );
};

export default Feed;
