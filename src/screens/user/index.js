import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {Loader, ProfileHeader} from '../../components';
import {Header} from '../../components';
import ProfileCategory from '../../components/profile/profileCategory';
import ProfileSubCategory from '../../components/profile/profileSubCategory';
import {strings} from '../../helper/strings';
import {style} from './styles';
import {logoutUser} from '../../actions/userActions';
import {getAsyncStorageData, getRefreshToken} from '../../helper/global';
import {deviceToken} from '../../helper/constants';

const User = () => {
  const {user, authLoading} = useSelector(state => state.user);

  const {navigate} = useNavigation();

  const dispatch = useDispatch();

  const onEditPress = () => navigate('EditProfile');
  const onBillingInformationPress = () => navigate('BillingInformation');
  const onMyAddressPress = () => navigate('MyAddress');
  const onInterestsSizePress = () => navigate('InterestAndSizes');
  const onHowChiaWorksPress = () => navigate('HowChiaWorks');
  // const onYourCirclesPress = () => navigate('YourCircles');
  const onNeedHelpPress = () => navigate('NeedHelp');
  const onInviteFriendsPress = () => navigate('InviteFriends');
  const onFaqPress = () => navigate('Faqs');
  const onOrderHistoryPress = () => navigate('OrderHistory');
  const onMyReviewsPress = () => navigate('MyReviews');

  const onLogOutPress = async () => {
    const data = {
      refreshToken: await getRefreshToken(),
      deviceToken: await getAsyncStorageData(deviceToken),
    };
    dispatch(logoutUser(data));
  };

  return (
    <View style={style.mainContainer}>
      <Loader visible={authLoading} />
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileHeader title={`HI, ${user?.firstName || ''}`} hideBack />
        <ProfileCategory mainTitle={strings.myAccount} isSwitchVisible={true}>
          <ProfileSubCategory
            category={strings.editmyprofile}
            onPress={onEditPress}
          />
          <ProfileSubCategory
            category={strings.interestsAndSizes}
            onPress={onInterestsSizePress}
          />
        </ProfileCategory>
        <ProfileCategory mainTitle={strings.payment} isSwitchVisible={true}>
          <ProfileSubCategory
            category={strings.billingInformation}
            onPress={onBillingInformationPress}
          />
          <ProfileSubCategory
            category={strings.myAddress}
            onPress={onMyAddressPress}
          />
        </ProfileCategory>
        <ProfileCategory mainTitle={strings.orders} isSwitchVisible={true}>
          <ProfileSubCategory
            category={strings.orderHistory}
            onPress={onOrderHistoryPress}
          />
          <ProfileSubCategory
            category={strings.myReviews}
            onPress={onMyReviewsPress}
          />
        </ProfileCategory>
        <ProfileCategory mainTitle={strings.community} isSwitchVisible={true}>
          {/* <ProfileSubCategory
            category={strings.yourCircle}
            onPress={onYourCirclesPress}
          /> */}
          <ProfileSubCategory
            category={strings.inviteFriends}
            onPress={onInviteFriendsPress}
          />
        </ProfileCategory>
        <ProfileCategory mainTitle={strings.support} isSwitchVisible={true}>
          <ProfileSubCategory
            category={strings.howChiaWorks}
            onPress={onHowChiaWorksPress}
          />
          <ProfileSubCategory
            category={strings.needHelp}
            onPress={onNeedHelpPress}
          />
          <ProfileSubCategory category={strings.faq} onPress={onFaqPress} />
        </ProfileCategory>
        <TouchableOpacity onPress={onLogOutPress}>
          <Text style={style.logOutTextStyle}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default User;
