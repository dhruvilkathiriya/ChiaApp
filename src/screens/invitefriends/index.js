import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Share,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
import SimpleToast from 'react-native-simple-toast';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';

import {
  Header,
  Loader,
  ProfileHeader,
  SectionHeaderWithAddIcon,
} from '../../components';
import {strings} from '../../helper/strings';
import {style} from './styles';
import {findUsersWithPhoneNumbers} from '../../actions/faqsAction';
import {isIOS} from '../../helper/constants';

const InviteFriends = () => {
  const [contacts, setContacts] = useState([]);
  const [isPhoneBookVisible, setPhoneBookVisibility] = useState(false);

  const dispatch = useDispatch();

  const {navigate} = useNavigation();

  const {userList, userListLoading} = useSelector(state => state.faqsReducer);

  const isFocused = useIsFocused();

  const requestContactsPermission = async () => {
    try {
      let granted = null;
      if (isIOS) {
        granted = await Contacts.requestPermission();
      } else {
        granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Chia App',
            message: 'Chia wants to access your contacts',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
      }
      const result = Platform.select({
        ios: granted === 'authorized',
        android: granted === PermissionsAndroid.RESULTS.GRANTED,
      });
      if (result) {
        console.log('You can access contacts');
        Contacts.getAll()
          .then(contacts => {
            console.log('contacts===', contacts);
            setContacts(
              _.flatten(
                _.map(contacts, item => {
                  return {
                    name: item?.displayName,
                    number: item?.phoneNumbers.map(
                      phoneNumber => phoneNumber?.number,
                    ),
                  };
                }),
              ),
            );
          })
          .catch(e => console.log('error===getAllContactList===', e));
      } else {
        console.log('Contacts permission denied');
      }
    } catch (err) {
      console.log('Contacts===Permission===error===', err);
    }
  };

  const checkReadContactsPermission = async () => {
    try {
      let result = null;
      if (isIOS) {
        result = await Contacts.requestPermission();
        return result;
      } else {
        result = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        );
      }
      return result;
    } catch (error) {
      console.log('checkReadContactsPermission :: ', error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      requestContactsPermission()
        .then()
        .catch(e => console.log('err----', e));
    }
  }, [isFocused]);

  const onPlusIconPress = () => {
    SimpleToast.show('clicked');
  };

  const onConnectViaPhoneBookPress = () => {
    checkReadContactsPermission()
      .then(permission => {
        if (permission) {
          if (isPhoneBookVisible) {
            setPhoneBookVisibility(false);
          } else {
            setPhoneBookVisibility(true);
            if (!_.isEmpty(contacts)) {
              dispatch(
                findUsersWithPhoneNumbers({
                  phoneNumbers: _.flatten(_.map(contacts, item => item.number)),
                }),
              );
            }
          }
        } else {
          SimpleToast.show('Please allow contacts permission in setting');
        }
      })
      .catch(e => console.log('error====', e));
  };

  const onViewButtonPress = item => {
    navigate('OtherUserCloset', {userId: item?.id});
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'https://www.google.com/',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const renderItem = ({item}) => {
    const isUserInstalledApp = !_.isEmpty(item?.user);
    const {name: userName} = _.find(contacts, contact =>
      contact.number.includes(item.number),
    );
    return (
      <View style={[style.phoneBookItemContainer]}>
        <View style={style.phoneBookUserDetailsContainer}>
          <Text style={style.phoneBookItemTextStyle}>{userName}</Text>
          <Text style={style.phoneBookItemTextStyle}>{item?.number}</Text>
        </View>
        <TouchableOpacity
          style={
            isUserInstalledApp
              ? style.phoneBookItemViewButtonStyle
              : style.phoneBookItemInviteButtonStyle
          }
          onPress={
            isUserInstalledApp ? () => onViewButtonPress(item?.user) : onShare
          }>
          <Text
            style={
              isUserInstalledApp
                ? style.phoneBookItemViewButtonTextStyle
                : style.phoneBookItemInviteButtonTextStyle
            }>
            {isUserInstalledApp ? 'View' : 'Invite'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={style.mainContainer}>
      <Header />
      <ProfileHeader
        title={strings.inviteFriends}
        titleStyle={style.inviteFriendsTitleStyle}
        mainContainer={style.profileHeaderContainer}
      />
      <Loader visible={userListLoading} />
      <View style={style.itemContainerStyle}>
        <SectionHeaderWithAddIcon
          headerLeftTitle={'CONNECT VIA FACEBOOK'}
          onIconPress={onPlusIconPress}
        />
        <SectionHeaderWithAddIcon
          headerLeftTitle={'CONNECT VIA INSTAGRAM'}
          outterContainerStyle={style.itemStyle}
          onIconPress={onPlusIconPress}
        />
        <SectionHeaderWithAddIcon
          headerLeftTitle={'ADD USERNAME'}
          outterContainerStyle={style.itemStyle}
          onIconPress={onPlusIconPress}
        />
        <SectionHeaderWithAddIcon
          isOpen={isPhoneBookVisible}
          headerLeftTitle={'CONNECT VIA PHONEBOOK'}
          outterContainerStyle={style.itemStyle}
          onIconPress={onConnectViaPhoneBookPress}
        />
        {isPhoneBookVisible && (
          <FlatList
            data={userList}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        )}
      </View>
    </View>
  );
};

export default InviteFriends;
