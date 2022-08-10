import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoggedOut from '../screens/LoggedOut';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoggedOut"
          options={{
            headerShown: false,
          }}
          component={LoggedOut}
        />
        <Stack.Screen
          name="Login"
          options={{
            headerShown: false,
            headerBackTitle: 'back',
            headerBackTitleStyle: {
              color: 'blue',
            },
          }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          options={{
            headerShown: false,
          }}
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
