import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {
  Header,
  ProfileHeader,
  ClosetSubListWithSwitch,
  CommonButton,
} from '../../components';
import {strings} from '../../helper/strings';
import {style} from './style';

const AvailableTo = () => {
  const [toFamily, setToFamily] = useState(true);
  const [toSorority, setToSorority] = useState(false);

  const onFamilyToggle = () => {
    setToFamily(prevState => !prevState);
  };

  const onSororityToggle = () => {
    setToSorority(prevState => !prevState);
  };

  return (
    <View style={style.mainContainer}>
      <Header />
      <ProfileHeader title={strings.availableTo} />
      <ClosetSubListWithSwitch
        title={strings.family}
        value={toFamily}
        onValueChange={onFamilyToggle}
      />
      <ClosetSubListWithSwitch
        title={strings.sorority}
        value={toSorority}
        onValueChange={onSororityToggle}
      />
      <View style={style.button}>
        <CommonButton title={strings.createNewCircle} />
      </View>
    </View>
  );
};

export default AvailableTo;
