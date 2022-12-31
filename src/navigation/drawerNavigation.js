import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {style} from './styles';
import SideDrawer from '../screens/sideDrawer';
import HomeTab from '../navigation/HomeTab';
import BrowesDesigner from '../screens/browesDesigner';
import MyHearts from '../screens/myHearts';
import OrderHistory from '../screens/orderHistory';
import BoughtOrderDetails from '../screens/boughtOrderDetails';
import RentingOrderDetails from '../screens/rentingOrderDetails';
import Clothing from '../screens/clothing';
import BrowesStyle from '../screens/browesStyle';
import SearchResults from '../screens/searchResults';
import SavedSearches from '../screens/savedSearches';
import OtherUserCloset from '../screens/otherUserCloset';
import AddRentalToBag from '../screens/addRentalToBag';
import AddPurchaseToBag from '../screens/addPurchaseToBag';
import ItemReviews from '../screens/itemReviews';
import Bag from '../screens/bag';
import CheckOut from '../screens/checkOut';
import SelectCategory from '../screens/selectCategory';
import Billing from '../screens/checkoutBilling';
import CheckoutConfirm from '../screens/checkoutConfirm';
import SelectSubCategory from '../screens/selectSubCategory';
import SelectDesigners from '../screens/selectDesigner';
import SelectSizes from '../screens/selectSizes';
import SelectCondition from '../screens/selectCondition';
import SelectPickUpLocation from '../screens/selectPickUpLocation';
import DropOff from '../screens/dropOff';
import SameDayDelivery from '../screens/sameDayDelivery';
import StandardShipping from '../screens/standardShipping';
import Pricing from '../screens/pricing';
import ListingItemDetails from '../screens/listingItemDetails';
import Search from '../screens/search';
import SelectRentalPeriod from '../screens/selectRentalPeriod';
import SelectStandardShippingOption from '../screens/selectStandardShipping';
import RefineCloset from '../screens/refineCloset';
import AddAddress from '../screens/addAddress';
import AddCardScreen from '../screens/addCard';
import EditAddress from '../screens/editAddress';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerStyle={style.drawerContainer}
      drawerContent={props => <SideDrawer {...props} />}>
      <Drawer.Screen name={'Home'} component={HomeTab} />
      <Drawer.Screen name={'BrowesDesigner'} component={BrowesDesigner} />
      <Drawer.Screen name={'Clothing'} component={Clothing} />
      <Drawer.Screen name={'BrowesStyle'} component={BrowesStyle} />
      <Drawer.Screen name={'MyHearts'} component={MyHearts} />
      <Drawer.Screen name={'OrderHistory'} component={OrderHistory} />
      <Drawer.Screen
        name={'BoughtOrderDetails'}
        component={BoughtOrderDetails}
      />
      <Drawer.Screen
        name={'RentingOrderDetails'}
        component={RentingOrderDetails}
      />
      <Drawer.Screen name={'SearchResults'} component={SearchResults} />
      <Drawer.Screen name={'SavedSearches'} component={SavedSearches} />
      <Drawer.Screen name={'OtherUserCloset'} component={OtherUserCloset} />
      <Drawer.Screen name={'AddRentalToBag'} component={AddRentalToBag} />
      <Drawer.Screen name={'AddPurchaseToBag'} component={AddPurchaseToBag} />
      <Drawer.Screen name={'ItemReviews'} component={ItemReviews} />
      <Drawer.Screen name={'Bag'} component={Bag} />
      <Drawer.Screen name={'CheckOut'} component={CheckOut} />
      <Drawer.Screen name={'SelectCategory'} component={SelectCategory} />
      <Drawer.Screen name={'Billing'} component={Billing} />
      <Drawer.Screen name={'CheckoutConfirm'} component={CheckoutConfirm} />
      <Drawer.Screen name={'SelectSubCategory'} component={SelectSubCategory} />
      <Drawer.Screen name={'SelectDesigners'} component={SelectDesigners} />
      <Drawer.Screen name={'SelectSizes'} component={SelectSizes} />
      <Drawer.Screen name={'SelectCondition'} component={SelectCondition} />
      <Drawer.Screen
        name={'SelectPickUpLocation'}
        component={SelectPickUpLocation}
      />
      <Drawer.Screen name={'DropOff'} component={DropOff} />
      <Drawer.Screen name={'SameDayDelivery'} component={SameDayDelivery} />
      <Drawer.Screen name={'StandardShipping'} component={StandardShipping} />
      <Drawer.Screen name={'AddAddress'} component={AddAddress} />
      <Drawer.Screen name={'EditAddress'} component={EditAddress} />
      <Drawer.Screen name={'AddCardScreen'} component={AddCardScreen} />
      <Drawer.Screen name={'Pricing'} component={Pricing} />
      <Drawer.Screen
        name={'ListingItemDetails'}
        component={ListingItemDetails}
      />
      <Drawer.Screen name={'Search'} component={Search} />
      <Drawer.Screen
        name={'SelectRentalPeriod'}
        component={SelectRentalPeriod}
      />
      <Drawer.Screen
        name={'SelectStandardShippingOption'}
        component={SelectStandardShippingOption}
      />
      <Drawer.Screen name={'RefineCloset'} component={RefineCloset} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
