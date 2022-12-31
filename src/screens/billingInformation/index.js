import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {
  Header,
  Loader,
  ProfileHeader,
  SectionHeader,
  SectionListItem,
} from '../../components';
import {strings} from '../../helper/strings';
import {style} from './styles';
import {getUserCards} from '../../actions/billingActions';

const BillingInformation = () => {
  const listOfCard = useSelector(state => state.userCards);

  const {navigate} = useNavigation();

  const onAddCardPress = () => {
    navigate('AddCardScreen');
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserCards());
  }, []);

  const renderItem = ({item}) => {
    return (
      <SectionListItem
        headerLeftTitle={`${item.name}` + '...' + `${item.last4}`}
        headerRightTitle={'EXP ' + `${item.expMonth}` + '/' + `${item.expYear}`}
        /*onItemPress={onEditAddressPress}*/
      />
    );
  };

  return (
    <View style={style.mainContainer}>
      <Header />
      <KeyboardAwareScrollView bounces={false}>
        <ProfileHeader
          title={strings.billingInformation}
          titleStyle={style.addAddressTitleStyle}
          closeIconContainer={style.closeIconContainer}
        />
        <SectionHeader
          headerLeftTitle={strings.savedCreditCards}
          headerRightTitle={strings.addCard}
          onRightBtnPress={onAddCardPress}>
          <FlatList
            data={listOfCard?.listOfCards}
            renderItem={renderItem}
            scrollEnabled={false}
            keyExtractor={item => item.id}
          />
        </SectionHeader>
        <View style={style.itemSepratorViewStyle} />
        <SectionHeader
          headerLeftTitle={strings.bankAccountsLinked}
          headerRightTitle={strings.add}
        />
        <SectionListItem
          headerLeftTitle={strings.chase0123}
          headerRightTitle={strings.expDate}
        />
        <View style={style.itemSepratorViewStyle} />
        <SectionHeader
          headerLeftTitle={strings.paymentPreferences}
          rightViewVisible={true}
          mainContainer={style.sectionHeaderContainer}
        />
        <SectionListItem
          headerLeftTitle={strings.directDeposite}
          rightViewVisible={true}
          mainContainer={style.sectionItemContainer}
        />
        <SectionListItem
          headerLeftTitle={strings.myCredit}
          rightViewVisible={true}
          mainContainer={style.sectionItemContainer}
        />
      </KeyboardAwareScrollView>
      <Loader visible={listOfCard?.userCardsLoading} />
    </View>
  );
};

export default BillingInformation;
