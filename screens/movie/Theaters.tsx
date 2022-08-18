import React from 'react';
import {View, Button, Text} from 'react-native';
import ClosestTheaters from '../components/ClosestTheatre';
const TheaterScreen = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <ClosestTheaters />
    </View>
  );
};

export default TheaterScreen;
