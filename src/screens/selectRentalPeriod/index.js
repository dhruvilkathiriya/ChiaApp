import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ItemSelectionHeader, ListingShippingAddON} from '../../components';
import {ComposePicker} from '../../components/libraryComponent/DatePickerRange';
import {style} from './styles';

const SelectRentalPeriod = ({route}) => {
  const [rentalPeriod, setRentalPeriod] = useState(2);
  const [isCustomPeriod, setIsCustomPeriod] = useState(false);
  const rentData = route?.params?.rentData || [];
  const selectedRentalPeriod = route?.params?.rentalPeriod || null;

  const {goBack} = useNavigation();

  useEffect(() => {
    if (
      rentalPeriod !== null &&
      route?.params?.onRentalPeriodChange &&
      typeof route?.params?.onRentalPeriodChange === 'function'
    ) {
      route?.params?.onRentalPeriodChange(rentalPeriod);
      isCustomPeriod && setIsCustomPeriod(false);
    }
  }, [rentalPeriod]);

  useEffect(() => {
    setRentalPeriod(selectedRentalPeriod !== null ? selectedRentalPeriod : 2);
  }, [selectedRentalPeriod]);

  const onDateConfirm = dates => {
    if (
      route?.params?.onRentalDateSelect &&
      typeof route?.params?.onRentalDateSelect === 'function'
    ) {
      route?.params?.onRentalDateSelect(dates);
    }
  };

  const renderItem = ({item}) => {
    return (
      <>
        <ListingShippingAddON
          title={`${item?.days} Day Rental Period`}
          isTitleComponent
          mainTitleTextStyle={style.switchTitleTextStyle}
          containerStyle={style.switchContainerStyle}
          value={rentalPeriod === Number(item?.days)}
          onValueChange={() => setRentalPeriod(Number(item?.days))}
        />
        <View style={style.bottomTextContainerStyle}>
          <Text style={style.textStyle}>
            {'Item delivered on Apr 7. Return item on Apr 9'}
          </Text>
        </View>
      </>
    );
  };

  return (
    <View style={style.mainContainer}>
      <ItemSelectionHeader title={'Select Rental Period'} goBack={goBack} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={rentData}
          scrollEnabled={false}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
        <ListingShippingAddON
          title={'Choose custom rental period'}
          isTitleComponent
          mainTitleTextStyle={style.switchTitleTextStyle}
          containerStyle={style.switchContainerStyle}
          value={isCustomPeriod}
          onValueChange={() => {
            setRentalPeriod(isCustomPeriod ? 2 : null);
            setIsCustomPeriod(!isCustomPeriod);
          }}
        />
        <View style={style.bottomTextContainerStyle}>
          <Text style={style.textStyle}>
            {'Rental period will be approved by lender'}
          </Text>
        </View>
        {isCustomPeriod && (
          <ComposePicker
            containerStyle={style.calenderContainer}
            blockBefore={true}
            mode={'range'}
            dateRange={rentalPeriod}
            normalRange={isCustomPeriod}
            onConfirm={onDateConfirm}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default SelectRentalPeriod;
