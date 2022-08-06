import * as React from 'react';
import {TailwindProvider} from 'tailwindcss-react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import {Provider} from 'react-redux';
import TheaterScreen from './screens/Theaters';
import {store} from './store';
import AccountScreen from './screens/AccountScreen';
import {Image, TouchableOpacity} from 'react-native';
import TabNavigator from './components/BottomNavigator';
import {fetchClosestTheatres} from './features/movieSlicer';
import {useAppDispatch} from './hooks/state';
import AppEntry from './AppEntry';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <TailwindProvider>
        <AppEntry />
      </TailwindProvider>
    </Provider>
  );
}
