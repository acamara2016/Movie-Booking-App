import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {useAppSelector} from '../../hooks/state';
import {
  ArrowDownIcon,
  DotsCircleHorizontalIcon,
} from 'react-native-heroicons/outline';
import tw from 'tailwind-react-native-classnames';
import {FixturesResponse} from '../../types';
import {useNavigation} from '@react-navigation/native';
const LiveMatches = () => {
  const navigation = useNavigation();
  const fixtures: FixturesResponse[] = useAppSelector(
    store => store.sport.fixtures,
  );
  return (
    <View style={[tw`ml-4 mt-10`]}>
      <View style={[tw`flex flex-row justify-between p-2`]}>
        <Text style={[tw`text-xl font-bold`]}>Live match</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('matches')}
          style={[tw`flex flex-row`]}>
          <Text style={[tw``]}>View all</Text>
          <ArrowDownIcon size={15} color="gray" />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {fixtures.map(fixture => {
          return (
            <TouchableOpacity
              style={[
                tw`relative flex flex-col m-2 rounded-2xl bg-blue-200 h-48 w-44 p-4`,
              ]}>
              <View style={[tw`flex flex-row justify-between mt-4 p-2`]}>
                <Text>Live</Text>
                <DotsCircleHorizontalIcon />
              </View>
              <View style={[tw`flex flex-row justify-between`]}>
                <Image
                  style={[tw`h-14 w-14 rounded-full`]}
                  source={{uri: fixture.teams.home.logo}}
                />
                <Image
                  style={[tw`h-14 w-14 rounded-full`]}
                  source={{uri: fixture.teams.away.logo}}
                />
              </View>
              <View style={[tw`flex flex-col justify-between mt-2`]}>
                <View style={[tw`flex flex-row justify-between`]}>
                  <Text>{fixture.teams.home.name.substring(0, 14)}</Text>
                  <Text>{fixture.goals.home}</Text>
                </View>
                <View style={[tw`flex flex-row justify-between`]}>
                  <Text>{fixture.teams.away.name.substring(0, 14)}</Text>
                  <Text>{fixture.goals.away}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default LiveMatches;
