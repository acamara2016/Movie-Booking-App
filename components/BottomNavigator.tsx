import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import {
  CurrencyDollarIcon,
  PlusIcon,
  SwitchHorizontalIcon,
} from 'react-native-heroicons/outline';
import HomeScreen from '../screens/HomeScreen';
import TheaterScreen from '../screens/Theaters';
import AccountScreen from '../screens/AccountScreen';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {backgroundColor: 'rgb(248, 250, 252)', height: '11%'},
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="items-center py-6">
              <CurrencyDollarIcon
                color={focused ? 'rgb(6, 78, 59)' : 'rgb(75, 85, 99)'}
                size={34}
              />
              <Text
                className={`${
                  focused ? 'text-emerald-800' : 'text-gray-500'
                } text-base font-semibold`}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Theaters"
        component={TheaterScreen}
        options={{
          tabBarLabel: 'Theaters',
          tabBarIcon: ({focused}) => (
            <View className="items-center py-6">
              <PlusIcon
                color={focused ? 'rgb(239, 68, 68)' : 'rgb(75, 85, 99)'}
                size={34}
              />
              <Text
                className={`${
                  focused ? 'text-red-500' : 'text-gray-500'
                } text-base font-semibold`}>
                Theaters
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({focused}) => (
            <View className="items-center py-6">
              <SwitchHorizontalIcon
                color={focused ? 'rgb(12, 74, 110)' : 'rgb(75, 85, 99)'}
                size={34}
              />
              <Text
                className={`${
                  focused ? 'text-sky-800' : 'text-gray-500'
                } text-base font-semibold`}>
                Account
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
