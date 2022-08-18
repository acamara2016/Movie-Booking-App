import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import LeagueCarousel from '../../components/sport/LeagueCarousel';
import {createStackNavigator} from '@react-navigation/stack';
import LeaguesScreen from './LeaguesScreen';
import LiveMatches from '../../components/sport/LiveMatches';
import tw from 'tailwind-react-native-classnames';
import MatchScreen from './MatchScreen';
const HomeScreen = () => {
  return (
    <SafeAreaView style={[tw`h-full w-full`]}>
      <LeagueCarousel />
      <LiveMatches />
    </SafeAreaView>
  );
};

const HomeStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="all_leagues"
        component={LeaguesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="matches"
        component={MatchScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
