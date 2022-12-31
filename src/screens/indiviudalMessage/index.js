import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {get} from 'lodash';

import {UserIndiviudalChat} from '../../components';
import IndiviudalChat from '../../components/common/indiviudalChat';
import {hp, isIOS} from '../../helper/constants';
import {icons} from '../../helper/iconsConstants';
import {style} from './style';
import {
  createMessage,
  getMessages,
  setRoomId,
} from '../../actions/messageActions';
import {colors} from '../../helper/colors';
import _ from 'lodash';

const IndiviudalMessage = ({route}) => {
  const [message, setMessage] = useState('');
  const roomId = get(route, 'params.roomId', '');
  const title = get(route, 'params.title', '');
  const profilePic = get(route, 'params.profilePic', '');

  const {user} = useSelector(state => state.user);
  const {
    messages,
    oldMessagesLoading,
    newUserRoom,
    page,
    hasNextPage,
    limit,
    scrollToEnd,
    room,
  } = useSelector(state => state.messages);

  const flatListRef = useRef();
  const {goBack} = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!_.isEmpty(roomId)) {
      dispatch(
        setRoomId({
          roomId: roomId,
        }),
      );
      dispatch(getMessages({roomId: roomId, limit: limit, page: 1}));
    } else if (!_.isEmpty(newUserRoom)) {
      dispatch(
        setRoomId({
          roomId: newUserRoom?.id,
        }),
      );
      dispatch(getMessages({roomId: newUserRoom?.id, limit: limit, page: 1}));
    }
  }, [newUserRoom]);

  const renderChatMessage = ({item}) => {
    if (item.user !== user.id) {
      return <IndiviudalChat title={item.message} />;
    } else {
      return <UserIndiviudalChat title={item.message} />;
    }
  };

  const onMessageChange = text => setMessage(text);

  const sendMessage = () => {
    if (message !== '') {
      Keyboard.dismiss();
      dispatch(
        createMessage({
          room: room,
          message: message,
        }),
      );
      setMessage('');
    }
  };

  const onContentSizeChange = () => {
    if (scrollToEnd) {
      flatListRef?.current?.scrollToEnd({animated: false});
    } else {
      flatListRef?.current?.scrollToOffset({animated: false, offset: 10});
    }
  };

  const renderFooterComponent = () => {
    return <View style={{height: hp(2)}} />;
  };

  const itemSepratorView = () => <View style={{height: hp(2)}} />;

  return (
    <KeyboardAvoidingView
      style={style.outerContainer}
      behavior={'padding'}
      enabled={isIOS}>
      <SafeAreaView style={{flex: 1}}>
        <View style={style.mainContainer}>
          <TouchableOpacity
            onPress={goBack}
            hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}>
            <Image
              source={icons.backArrow}
              style={style.arrowImg}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <Text style={style.userName}>{title}</Text>
          <Image
            style={style.userImg}
            source={{uri: profilePic || ''}}
            resizeMode={'cover'}
          />
        </View>
        {oldMessagesLoading ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View style={{flexDirection: 'row'}}>
              <ActivityIndicator color={colors.secondaryColor} />
            </View>
          </View>
        ) : null}
        <FlatList
          onScroll={event => {
            if (event?.nativeEvent?.contentOffset?.y === 0) {
              if (hasNextPage) {
                dispatch(
                  getMessages({
                    roomId: room,
                    limit: limit,
                    page: page + 1,
                  }),
                );
              }
            }
          }}
          ref={flatListRef}
          data={messages}
          renderItem={renderChatMessage}
          onContentSizeChange={onContentSizeChange}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={itemSepratorView}
          ListHeaderComponent={itemSepratorView}
          ListFooterComponent={renderFooterComponent}
        />
        <View style={style.textInputContainer}>
          <TextInput
            placeholder={'Message here...'}
            onSubmitEditing={sendMessage}
            value={message}
            onChangeText={onMessageChange}
            style={style.messageInput}
          />
          <TouchableOpacity onPress={sendMessage}>
            <Image source={icons.sendMessage} style={style.imageicon} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export default IndiviudalMessage;
