import React, {useState} from 'react';
import {View} from 'react-native';

import {ItemSelectionHeader, ListingShippingAddON} from '../../components';
import {style} from './styles';
import {useNavigation} from '@react-navigation/native';

const FilterMessage = ({route}) => {
  const {goBack} = useNavigation();

  const [unreadFilter, setUnreadFilter] = useState(true);
  const [buyingSellingFilter, setBuyingSellingFilter] = useState(true);
  const [rentingLendingFilter, setRentingLendingFilter] = useState(true);

  const toggleUnreadFilter = () => {
    setUnreadFilter(prevState => !prevState);
  };
  const toggleBuyingSellingFilter = () => {
    setBuyingSellingFilter(prevState => !prevState);
  };
  const toggleRentingLendingFilter = () => {
    setRentingLendingFilter(prevState => !prevState);
  };

  return (
    <View style={style.mainContainer}>
      <ItemSelectionHeader title={'Sort'} goBack={goBack} />
      <ListingShippingAddON
        title={'Unread'}
        isTitleComponent
        value={unreadFilter}
        onValueChange={toggleUnreadFilter}
        mainTitleTextStyle={style.switchTitleTextStyle}
        containerStyle={style.switchContainerStyle}
      />
      <ListingShippingAddON
        title={'Buying/Selling'}
        isTitleComponent
        value={buyingSellingFilter}
        onValueChange={toggleBuyingSellingFilter}
        mainTitleTextStyle={style.switchTitleTextStyle}
        containerStyle={style.switchContainerStyle}
      />
      <ListingShippingAddON
        title={'Renting/Lending'}
        isTitleComponent
        value={rentingLendingFilter}
        onValueChange={toggleRentingLendingFilter}
        mainTitleTextStyle={style.switchTitleTextStyle}
        containerStyle={style.switchContainerStyle}
      />
    </View>
  );
};

export default FilterMessage;
