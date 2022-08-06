import * as React from 'react';
import {TailwindProvider} from 'tailwindcss-react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import TheaterScreen from '../screens/Theaters';
import AccountScreen from '../screens/AccountScreen';
import {Image, TouchableOpacity} from 'react-native';

const Drawer = createDrawerNavigator();

export default function MainNavigator() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="Home"
            options={{
              headerTitle: '',
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                  <Image
                    source={{
                      uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
                    }}
                    className="rounded-full h-20 w-20"
                  />
                </TouchableOpacity>
              ),
            }}
            component={HomeScreen}
          />
          <Drawer.Screen name="Detail" component={AccountScreen} />
          <Drawer.Screen name="Theater" component={TheaterScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
