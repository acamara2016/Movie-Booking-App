import React from 'react';
import {View, Button, Text, ScrollView} from 'react-native';
import LastestMovies from '../components/LatestMovies';
import PopularMovies from '../components/PopularMovies';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../components/Welcome';
import DetailScreen from './DetailScreen';
import Animated from 'react-native-reanimated';
import {IMovie} from '../types/movie';

const Stack = createStackNavigator();

const HomeScreen = ({navigation}: {navigation: any}) => {
  const user: IUser = {
    firstName: 'Adama',
    lastName: 'Camara',
    email: 'adama.camara@gmail.com',
  };
  const handleGoToDetail = (movie: IMovie) => {
    navigation.navigate('detail', {movie});
  };
  return (
    <View className="w-screen h-screen bg-white border border-gray-300">
      <ScrollView>
        <Welcome {...user} />
        <LastestMovies />
        <PopularMovies />
      </ScrollView>
    </View>
  );
};

const forFade = ({current, next}: {current: any; next: any}) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0,
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: {opacity},
    rightButtonStyle: {opacity},
    titleStyle: {opacity},
    backgroundStyle: {opacity},
  };
};
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        name="detail"
        component={DetailScreen}
        options={{headerStyleInterpolator: forFade}}
      />
    </Stack.Navigator>
  );
}

export default () => {
  return <MyStack />;
};
