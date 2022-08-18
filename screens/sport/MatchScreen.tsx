import {SafeAreaView} from 'react-native';
import LiveMatches from '../../components/sport/LiveMatches';
import LiveMatchesByDate from '../../components/sport/LiveMatchesByDate';
import tw from 'tailwind-react-native-classnames';
import React from 'react';
const MatchScreen = () => {
  return (
    <SafeAreaView style={[tw`bg-gray-900 h-full w-full`]}>
      <LiveMatches />
      <LiveMatchesByDate />
    </SafeAreaView>
  );
};

export default MatchScreen;
