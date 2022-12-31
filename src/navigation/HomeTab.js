import React, {useEffect, useState, useLayoutEffect} from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import {icons} from '../helper/iconsConstants';
import {colors} from '../helper/colors';
import {getAuthToken, getIsUserLogin, loginAlert} from '../helper/global';
// Screens
import Message from '../screens/message';
import User from '../screens/user';
import EditProfile from '../screens/editProfile';
import BillingInformation from '../screens/billingInformation';
import AddAddress from '../screens/addAddress';
import EditAddress from '../screens/editAddress';
import MyAddress from '../screens/myAddress';
import InterestAndSizes from '../screens/interestsAndSizes';
import Styles from '../screens/styles';
import AddCardScreen from '../screens/addCard';
import Designers from '../screens/designers';
import EditYourSize from '../screens/editYourSizes';
import HowChiaWorks from '../screens/howChiaWorks';
import YourCircles from '../screens/yourCircles';
import NeedHelp from '../screens/needHelp';
import InviteFriends from '../screens/invitefriends';
import Faqs from '../screens/faq';
import Listing from '../screens/listing';
import HangerTopTab from '../navigation/HangerTopTab';
import AvailableTo from '../screens/availableTo';
import RefineCloset from '../screens/refineCloset';
import ClosetPolicies from '../screens/closetPolicies';
import InYourCloset from '../screens/inYourCloset';
import OrderHistory from '../screens/orderHistory';
import MyReviews from '../screens/myReviews';
import HomeTopTab from './homeTopTab';
import LenderOrderDetails from '../screens/lenderOrderDetails';
import SoldOrderDetails from '../screens/soldOrderDetails';
import RentingOrderDetails from '../screens/rentingOrderDetails';
import BoughtOrderDetails from '../screens/boughtOrderDetails';
import YourTransactions from '../screens/yourTransactions';
import ListingItemDetails from '../screens/listingItemDetails';
import OtherUserCloset from '../screens/otherUserCloset';
import MostLoved from '../screens/mostLoved';
import NewArrival from '../screens/newArrival';
import AddRentalToBag from '../screens/addRentalToBag';
import AddPurchaseToBag from '../screens/addPurchaseToBag';
import SelectRentalPeriod from '../screens/selectRentalPeriod';
import IndiviudalMessage from '../screens/indiviudalMessage';
import FilterMessage from '../screens/filterMessage';
import Bag from '../screens/bag';
import MyHearts from '../screens/myHearts';
import CheckOut from '../screens/checkOut';
import Billing from '../screens/checkoutBilling';
import CheckoutConfirm from '../screens/checkoutConfirm';
import StandardShipping from '../screens/standardShipping';
import SelectStandardShippingOption from '../screens/selectStandardShipping';
import Pusher from 'pusher-js';
import {api, baseURL} from '../helper/apiConstants';
import _, {get} from 'lodash';
import {addNewMessage, clearMessagesData} from '../actions/messageActions';
import {useDispatch, useSelector} from 'react-redux';
import Search from '../screens/search';
import SavedSearches from '../screens/savedSearches';
import SearchResults from '../screens/searchResults';

const Stack = createStackNavigator();

const HomeStack = ({navigation, route}) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    const blockedRoutes = [
      'ListingItemDetails',
      'AddRentalToBag',
      'AddPurchaseToBag',
      'SelectRentalPeriod',
      'Bag',
      'MyHearts',
      'CheckOut',
      'Billing',
      'CheckoutConfirm',
      'StandardShipping',
      'SelectStandardShippingOption',
      'Search',
      'SearchResults',
    ];
    if (blockedRoutes.includes(routeName)) {
      navigation.setOptions({tabBarVisible: false});
    } else {
      navigation.setOptions({tabBarVisible: true});
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'HomeTopTab'} component={HomeTopTab} />
      <Stack.Screen
        name={'ListingItemDetails'}
        component={ListingItemDetails}
      />
      <Stack.Screen name={'OtherUserCloset'} component={OtherUserCloset} />
      <Stack.Screen name={'MostLoved'} component={MostLoved} />
      <Stack.Screen name={'NewArrival'} component={NewArrival} />
      <Stack.Screen name={'AddRentalToBag'} component={AddRentalToBag} />
      <Stack.Screen name={'AddPurchaseToBag'} component={AddPurchaseToBag} />
      <Stack.Screen
        name={'SelectRentalPeriod'}
        component={SelectRentalPeriod}
      />
      <Stack.Screen name={'Bag'} component={Bag} />
      <Stack.Screen name={'MyHearts'} component={MyHearts} />
      <Stack.Screen name={'OrderHistory'} component={OrderHistory} />
      <Stack.Screen name={'NeedHelp'} component={NeedHelp} />
      <Stack.Screen name={'CheckOut'} component={CheckOut} />
      <Stack.Screen name={'Billing'} component={Billing} />
      <Stack.Screen name={'CheckoutConfirm'} component={CheckoutConfirm} />
      <Stack.Screen name={'StandardShipping'} component={StandardShipping} />
      <Stack.Screen
        name={'SelectStandardShippingOption'}
        component={SelectStandardShippingOption}
      />
      <Stack.Screen name={'IndiviudalMessage'} component={IndiviudalMessage} />
      <Stack.Screen name={'Search'} component={Search} />
      <Stack.Screen name={'SavedSearches'} component={SavedSearches} />
      <Stack.Screen name={'SearchResults'} component={SearchResults} />
    </Stack.Navigator>
  );
};

const MessageStack = ({navigation, route}) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    const blockedRoutes = ['IndiviudalMessage', 'FilterMessage'];
    if (blockedRoutes.includes(routeName)) {
      navigation.setOptions({tabBarVisible: false});
    } else {
      navigation.setOptions({tabBarVisible: true});
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Message'} component={Message} />
      <Stack.Screen name={'IndiviudalMessage'} component={IndiviudalMessage} />
      <Stack.Screen name={'FilterMessage'} component={FilterMessage} />
    </Stack.Navigator>
  );
};

const HangerStack = ({navigation, route}) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    const blockedRoutes = [
      'ListingItemDetails',
      'Bag',
      'MyHearts',
      'CheckOut',
      'Billing',
      'CheckoutConfirm',
      'StandardShipping',
      'SelectStandardShippingOption',
      'Search',
      'SearchResults',
    ];
    if (blockedRoutes.includes(routeName)) {
      navigation.setOptions({tabBarVisible: false});
    } else {
      navigation.setOptions({tabBarVisible: true});
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'HangerTopTab'} component={HangerTopTab} />
      <Stack.Screen name={'Listing'} component={Listing} />
      <Stack.Screen name={'RefineCloset'} component={RefineCloset} />
      <Stack.Screen name={'AvailableTo'} component={AvailableTo} />
      <Stack.Screen name={'ClosetPolicies'} component={ClosetPolicies} />
      <Stack.Screen name={'InYourCloset'} component={InYourCloset} />
      <Stack.Screen name={'YourTransactions'} component={YourTransactions} />
      <Stack.Screen
        name={'LenderOrderDetails'}
        component={LenderOrderDetails}
      />
      <Stack.Screen name={'SoldOrderDetails'} component={SoldOrderDetails} />
      <Stack.Screen
        name={'ListingItemDetails'}
        component={ListingItemDetails}
      />
      <Stack.Screen name={'OtherUserCloset'} component={OtherUserCloset} />
      <Stack.Screen name={'Bag'} component={Bag} />
      <Stack.Screen name={'MyHearts'} component={MyHearts} />
      <Stack.Screen name={'OrderHistory'} component={OrderHistory} />
      <Stack.Screen name={'NeedHelp'} component={NeedHelp} />
      <Stack.Screen name={'CheckOut'} component={CheckOut} />
      <Stack.Screen name={'Billing'} component={Billing} />
      <Stack.Screen name={'CheckoutConfirm'} component={CheckoutConfirm} />
      <Stack.Screen name={'StandardShipping'} component={StandardShipping} />
      <Stack.Screen
        name={'SelectStandardShippingOption'}
        component={SelectStandardShippingOption}
      />
      <Stack.Screen name={'Search'} component={Search} />
      <Stack.Screen name={'SavedSearches'} component={SavedSearches} />
      <Stack.Screen name={'SearchResults'} component={SearchResults} />
    </Stack.Navigator>
  );
};

const ProfileStack = ({navigation, route}) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    const blockedRoutes = [
      'Bag',
      'MyHearts',
      'CheckOut',
      'Billing',
      'CheckoutConfirm',
      'Search',
      'SearchResults',
    ];
    if (blockedRoutes.includes(routeName)) {
      navigation.setOptions({tabBarVisible: false});
    } else {
      navigation.setOptions({tabBarVisible: true});
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'User'} component={User} />
      <Stack.Screen name={'EditProfile'} component={EditProfile} />
      <Stack.Screen
        name={'BillingInformation'}
        component={BillingInformation}
      />
      <Stack.Screen name={'AddCardScreen'} component={AddCardScreen} />
      <Stack.Screen name={'MyAddress'} component={MyAddress} />
      <Stack.Screen name={'AddAddress'} component={AddAddress} />
      <Stack.Screen name={'EditAddress'} component={EditAddress} />
      <Stack.Screen name={'InterestAndSizes'} component={InterestAndSizes} />
      <Stack.Screen name={'Styles'} component={Styles} />
      <Stack.Screen name={'Designers'} component={Designers} />
      <Stack.Screen name={'EditYourSize'} component={EditYourSize} />
      <Stack.Screen name={'HowChiaWorks'} component={HowChiaWorks} />
      <Stack.Screen name={'YourCircles'} component={YourCircles} />
      <Stack.Screen name={'NeedHelp'} component={NeedHelp} />
      <Stack.Screen name={'InviteFriends'} component={InviteFriends} />
      <Stack.Screen name={'Faqs'} component={Faqs} />
      <Stack.Screen name={'OrderHistory'} component={OrderHistory} />
      <Stack.Screen name={'SoldOrderDetails'} component={SoldOrderDetails} />
      <Stack.Screen
        name={'LenderOrderDetails'}
        component={LenderOrderDetails}
      />
      <Stack.Screen
        name={'RentingOrderDetails'}
        component={RentingOrderDetails}
      />
      <Stack.Screen
        name={'BoughtOrderDetails'}
        component={BoughtOrderDetails}
      />
      <Stack.Screen name={'MyReviews'} component={MyReviews} />
      <Stack.Screen name={'Bag'} component={Bag} />
      <Stack.Screen name={'MyHearts'} component={MyHearts} />
      <Stack.Screen name={'CheckOut'} component={CheckOut} />
      <Stack.Screen name={'Billing'} component={Billing} />
      <Stack.Screen name={'CheckoutConfirm'} component={CheckoutConfirm} />
      <Stack.Screen name={'Search'} component={Search} />
      <Stack.Screen name={'SavedSearches'} component={SavedSearches} />
      <Stack.Screen name={'SearchResults'} component={SearchResults} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const {room} = useSelector(state => state.messages);
  const {user} = useSelector(state => state.user);

  useEffect(() => {
    async function setLoginState() {
      const val = await getIsUserLogin();
      setIsLogin(val);
    }

    setLoginState();
  }, []);

  useEffect(() => {
    let channel = null;
    let pusher = null;
    const registerPusher = async () => {
      const isUserLogin = await getIsUserLogin();
      if (isUserLogin) {
        const authorizationToken = await getAuthToken();
        pusher = new Pusher('0492026d45b9c464238c', {
          cluster: 'us2',
          encrypted: true,
          auth: {
            headers: {Authorization: authorizationToken},
          },
          authEndpoint: `${baseURL}${api.pusher}`,
        });
        channel = pusher.subscribe(`presence-${user?.id}`);

        channel.bind('message', data => {
          if (data?.message?.room === room) {
            const newMessage = {
              id: get(data, 'message._id', ''),
              message: get(data, 'message.message', ''),
              room: get(data, 'message.room', ''),
              user: get(data, 'message.user', ''),
            };
            dispatch(addNewMessage(newMessage));
          }
        });

        channel.bind('pusher:subscription_error', () => {});
        channel.bind('error', () => {});
        channel.bind('pusher:subscription_succeeded', () => {});
        channel.bind('pusher:member_added', () => {});
        channel.bind('pusher:member_removed', () => {});
      }
    };

    registerPusher()
      .then()
      .catch(error => {
        console.log('error======', error);
      });

    return () => {
      if (user?.id && pusher !== null) {
        pusher?.unsubscribe && pusher?.unsubscribe(`presence-${user?.id}`);
      }
      channel = null;
      dispatch(clearMessagesData());
    };
  }, [room]);

  const listeners = {
    tabPress: e => {
      if (!isLogin) {
        e.preventDefault();
        loginAlert();
      }
    },
  };

  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#e91e63',
        style: {backgroundColor: colors.secondaryBg},
      }}>
      <Tab.Screen
        name={'Home'}
        component={HomeStack}
        screenOptions={({route}) => {
          console.log('navigation', route.name);
          return {
            tabBarVisible: true,
          };
        }}
        options={{
          tabBarIcon: () => (
            <Image
              source={icons.home}
              style={{height: 20, width: 20, tintColor: colors.secondaryColor}}
              resizeMode={'contain'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Message'}
        component={MessageStack}
        options={{
          tabBarIcon: () => (
            <Image
              source={icons.message}
              style={{height: 20, width: 20, tintColor: colors.secondaryColor}}
              resizeMode={'contain'}
            />
          ),
        }}
        listeners={listeners}
      />
      <Tab.Screen
        name={'Hanger'}
        component={HangerStack}
        options={{
          tabBarIcon: () => (
            <Image
              source={icons.hanger}
              style={{height: 24, width: 24, tintColor: colors.secondaryColor}}
              resizeMode={'contain'}
            />
          ),
        }}
        listeners={listeners}
      />
      <Tab.Screen
        name={'User'}
        component={ProfileStack}
        options={{
          tabBarIcon: () => (
            <Image
              source={icons.user}
              style={{height: 16, width: 16, tintColor: colors.secondaryColor}}
              resizeMode={'contain'}
            />
          ),
        }}
        listeners={listeners}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
