import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {style} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../../components';

const Home = () => {
  const {navigate} = useNavigation();

  return (
    <View style={style.mainContainer}>
      <Header />
      <TouchableOpacity
        onPress={() => {
          navigate('NewArrival', {screenType: 'New Arrival'});
        }}>
        <Text style={style.textStyle}>Shop All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
