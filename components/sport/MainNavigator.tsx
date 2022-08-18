import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/sport/HomeScreen';
import React from 'react';
import MatchScreen from '../../screens/sport/MatchScreen';
const SportMainNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="home">
      <Tab.Screen
        name="home"
        options={{
          headerShown: false,
        }}
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

export default SportMainNavigator;
