import React, {useEffect} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Header, Loader, ProfileHeader} from '../../components';
import {strings} from '../../helper/strings';
import {style} from './styles';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {getSiteSettings} from "../../actions/siteSettingsActions";

const HowChiaWorks = () => {
    const {siteSettings} = useSelector(state => state.siteSettingsReducer);

    const {siteSettingsLoading} = useSelector(state => state.siteSettingsReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSiteSettings());
    }, []);

  return (
    <View style={style.mainContainer}>
      <Header />
      <KeyboardAwareScrollView bounces={false}>
        <ProfileHeader
          title={strings.howChiaWorks}
          titleStyle={style.howChiaWorksTitleStyle}
          mainContainer={style.profileHeaderContainer}
        />
        <Text style={[style.descText, {fontWeight: '300'}]}>
          {siteSettings?.works || strings.howChiaWorksDesc}
        </Text>
      </KeyboardAwareScrollView>
        <Loader visible={siteSettingsLoading} />
    </View>
  );
};

export default HowChiaWorks;
