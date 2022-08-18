import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {useAppSelector} from '../../hooks/state';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DotsCircleHorizontalIcon,
} from 'react-native-heroicons/outline';
import tw from 'tailwind-react-native-classnames';
import {FixturesResponse} from '../../types';
const LiveMatchesByDate = () => {
  const fixtures: FixturesResponse[] = useAppSelector(
    store => store.sport.fixtures,
  );
  return (
    <View style={[tw`ml-4 mt-10`]}>
      <View style={[tw`flex flex-row justify-between p-2`]}>
        <ArrowLeftIcon />
        <Text>Today</Text>
        <ArrowRightIcon />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {fixtures.map(fix => {
          return (
            <View style={[tw`flex flex-row justify-between p-5`]}>
              <View style={[tw`flex flex-row relative`]}>
                <Image
                  style={[tw`w-7 h-7 rounded-full`]}
                  source={{uri: fix.teams.away.logo}}
                />
                <Image
                  style={[tw`w-7 h-7 rounded-full`]}
                  source={{uri: fix.teams.home.logo}}
                />
                <View style={[tw`px-3`]}>
                  <Text>
                    {fix.teams.away.name.substring(0, 10)}
                    {' VS '}
                    {fix.teams.home.name.substring(0, 10)}
                  </Text>
                </View>
              </View>
              <View>
                <Text>
                  {fix.goals.away}
                  {' - '}
                  {fix.goals.home}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default LiveMatchesByDate;
