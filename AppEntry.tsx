import * as React from 'react';
import {TailwindProvider} from 'tailwindcss-react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import {Provider} from 'react-redux';
import TheaterScreen from './screens/Theaters';
import {store} from './store';
import AccountScreen from './screens/AccountScreen';
import {Image, TouchableOpacity} from 'react-native';
import TabNavigator from './components/BottomNavigator';
import {
  fetchClosestTheatres,
  fetchLastestMovies,
  fetchMostPopular,
} from './features/movieSlicer';
import {useAppDispatch, useAppSelector} from './hooks/state';
import AuthStack from './components/AuthStack';
import MainNavigator from './components/MainNavigator';

const Drawer = createDrawerNavigator();

export default function AppEntry() {
  const dispatch = useAppDispatch();
  const {loggedIn} = useAppSelector(state => state.movies);
  React.useEffect(() => {
    dispatch(fetchClosestTheatres(400));
    dispatch(fetchLastestMovies(30));
    dispatch(fetchMostPopular(20));
  }, []);
  const {closestTheatres} = useAppSelector(store => store.movies);
  const {mostPopularMovies} = useAppSelector(store => store.movies);
  const {latestMovies} = useAppSelector(store => store.movies);
  if (
    closestTheatres.length === 0 ||
    mostPopularMovies.length === 0 ||
    latestMovies.length === 0
  ) {
    return (
      <View className="flex justify-center">
        <Text>Loading ...</Text>
      </View>
    );
  }
  if (!loggedIn) {
    return <AuthStack />;
  }
  if (loggedIn) {
    return <MainNavigator />;
  }
}
