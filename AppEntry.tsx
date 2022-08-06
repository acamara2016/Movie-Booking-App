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

const Drawer = createDrawerNavigator();

export default function AppEntry() {
  const dispatch = useAppDispatch();
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
        <Text>Loadin</Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          options={{
            headerTitle: '',
            headerRight: (navigation: any) => (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image
                  source={{
                    uri: 'https://www.kindpng.com/picc/m/45-452763_cat-cartoon-cuteness-transparent-background-cute-cat-clipart.png',
                  }}
                  className="rounded-full h-20 w-20"
                />
              </TouchableOpacity>
            ),
          }}
          component={HomeScreen}
        />
        <Drawer.Screen name="Theater" component={TheaterScreen} />
        <Drawer.Screen name="Account" component={AccountScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
