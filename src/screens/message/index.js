import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import _ from 'lodash';

import {style} from './styles';
import {wp} from '../../helper/constants';
import {icons} from '../../helper/iconsConstants';
import {UserItemContent} from '../../components';
import {getRooms} from '../../actions/messageActions';
import {colors} from '../../helper/colors';
import {strings} from '../../helper/strings';

const Message = () => {
  const {rooms, roomsLoading} = useSelector(state => state.messages);
  const {user} = useSelector(state => state.user);

  const {goBack, navigate, addListener} = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    const dispatchEvent = addListener('focus', () => {
      dispatch(getRooms());
    });
    return dispatchEvent;
  }, []);

  const renderItem = ({item}) => {
    const participants = _.get(item, 'participants', []);
    const otherUserData = _.find(
      participants,
      element => element?.id !== user?.id,
    );
    const firstName = _.get(otherUserData, 'firstName', '');
    const lastName = _.get(otherUserData, 'lastName', '');
    const profilePic = _.get(otherUserData, 'picture', null);
    const lastMessage = _.get(item, 'lastMessage.message', '');
    const lastMessageTime = moment(
      _.get(item, 'lastMessageAt', new Date()),
    ).fromNow();
    const title = `@${firstName}${lastName}`;
    return (
      <UserItemContent
        onItemPress={() => onchatPress(item, title, profilePic)}
        isTopRightTextVisible
        profileImageUrl={profilePic}
        bottomRightTexStyle={{textTransform: 'uppercase'}}
        headerLeftText={title}
        headerRightText={lastMessageTime}
        descriptionText={lastMessage}
        maineContainerStyle={{marginHorizontal: wp(7)}}
      />
    );
  };

  const onFilterIconPress = () => {
    navigate('FilterMessage');
  };

  const onchatPress = (item, title, profilePic) => {
    navigate('IndiviudalMessage', {roomId: item?.id, title, profilePic});
  };

  const MessageHeader = () => {
    return (
      <View style={style.mainMessageHeaderContainer}>
        <TouchableOpacity
          style={style.backIconContainer}
          onPress={goBack}
          hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}>
          <Image
            source={icons.backVector}
            style={style.backIcon}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <Text style={style.messageHeaderTitleText}>{strings.messages}</Text>
        <TouchableOpacity
          style={style.filterIconContainer}
          onPress={onFilterIconPress}>
          <Image
            source={icons.filterIcon}
            style={style.filterIcon}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderEmptyComponent = () => {
    if (roomsLoading) {
      return (
        <ActivityIndicator
          color={colors.primaryColor}
          size={'large'}
          style={style.loader}
        />
      );
    }
    return null;
  };

  return (
    <View style={style.mainContainer}>
      <MessageHeader />
      {_.isEmpty(rooms) && !roomsLoading ? (
        <View style={style.noMessageViewStyle}>
          <Text style={style.noMessageTextStyle}>
            {strings.noMessageAvailable}
          </Text>
        </View>
      ) : (
        <FlatList
          data={rooms}
          renderItem={renderItem}
          scrollEnabled={true}
          keyExtractor={item => item.id}
          ListEmptyComponent={renderEmptyComponent}
        />
      )}
    </View>
  );
};

export default Message;
