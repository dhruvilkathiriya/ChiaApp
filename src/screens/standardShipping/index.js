import React, {useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';

import {
  ItemSelectionHeader,
  ListingShippingAddON,
  Loader,
} from '../../components';
import {style} from './styles';
import {hp} from '../../helper/constants';
import {useDispatch, useSelector} from 'react-redux';
import {getProductShippingTypes} from '../../actions/listingActions';
import _ from 'lodash';
import {useNavigation} from '@react-navigation/native';

const StandardShipping = ({route}) => {
  const dispatch = useDispatch();
  const {goBack} = useNavigation();

  const {
    shipping: {
      domesticShipping = [],
      nationWideShipping = [],
      worldWideShipping = [],
    },
    isShippingLoading,
  } = useSelector(state => state.shipping);

  const [domesticShippingType, setDomesticShippingType] = useState({});
  const [nationWideShippingType, setNationWideShippingType] = useState({});
  const [worldWideShippingType, setWorldWideShippingType] = useState({});

  useEffect(() => {
    if (!_.isEmpty(route?.params?.standardShippingDetails)) {
      setDomesticShippingType(
        route?.params?.standardShippingDetails?.domesticShipping,
      );
      setNationWideShippingType(
        route?.params?.standardShippingDetails?.nationWideShipping,
      );
      setWorldWideShippingType(
        route?.params?.standardShippingDetails?.worldWideShipping,
      );
    } else {
      setDomesticShippingType(_.head(domesticShipping));
      setNationWideShippingType(_.head(nationWideShipping));
      setWorldWideShippingType(_.head(worldWideShipping));
    }
  }, [isShippingLoading]);

  useEffect(() => {
    if (
      route?.params?.onValueSelect &&
      typeof route?.params?.onValueSelect === 'function'
    ) {
      let data = {
        domesticShipping: domesticShippingType,
        nationWideShipping: nationWideShippingType,
        worldWideShipping: worldWideShippingType,
      };
      route?.params?.onValueSelect(data);
    }
  }, [domesticShippingType, nationWideShippingType, worldWideShippingType]);

  useEffect(() => {
    dispatch(getProductShippingTypes());
  }, []);

  return (
    <View style={style.mainContainer}>
      {!isShippingLoading ? (
        <View>
          <ItemSelectionHeader title={'STANDARD SHIPPING'} goBack={goBack} />
          <View style={style.requireMainView}>
            <Text style={[style.headerTextStyle, {marginTop: hp(1.5)}]}>
              {'DOMESTIC SHIPPING'}
            </Text>
            {domesticShipping.map((item, index) => {
              return (
                <ListingShippingAddON
                  title={item.description}
                  isTitleComponent
                  name={item.key}
                  value={
                    !_.isEmpty(domesticShippingType)
                      ? domesticShippingType?.key === item?.key
                      : index === 0
                  }
                  onValueChange={(value, name) => {
                    setDomesticShippingType(item);
                  }}
                  mainTitleTextStyle={style.switchTitleTextStyle}
                  containerStyle={style.switchContainerStyle}
                />
              );
            })}
            <Text style={[style.headerTextStyle, {marginTop: hp(5)}]}>
              {'NATIONWIDE SHIPPING'}
            </Text>
            {nationWideShipping.map((item, index) => (
              <ListingShippingAddON
                title={item.description}
                isTitleComponent
                name={item.key}
                value={
                  !_.isEmpty(nationWideShippingType)
                    ? nationWideShippingType?.key === item?.key
                    : index === 0
                }
                onValueChange={(value, name) => {
                  setNationWideShippingType(item);
                }}
                mainTitleTextStyle={style.switchTitleTextStyle}
                containerStyle={style.switchContainerStyle}
              />
            ))}
            <Text style={[style.headerTextStyle, {marginTop: hp(5)}]}>
              {'WORLDWIDE SHIPPING'}
            </Text>
            {worldWideShipping.map((item, index) => (
              <ListingShippingAddON
                title={item.description}
                isTitleComponent
                name={item.key}
                value={
                  !_.isEmpty(worldWideShippingType)
                    ? worldWideShippingType?.key === item?.key
                    : index === 0
                }
                onValueChange={(value, name) => {
                  setWorldWideShippingType(item);
                }}
                mainTitleTextStyle={style.switchTitleTextStyle}
                containerStyle={style.switchContainerStyle}
              />
            ))}
          </View>
        </View>
      ) : (
        <Loader visible={isShippingLoading} />
      )}
    </View>
  );
};

export default StandardShipping;
