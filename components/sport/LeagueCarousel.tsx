import React from 'react';
import {Image, Text, ScrollView, TouchableOpacity, View} from 'react-native';
import {useAppSelector} from '../../hooks/state';
import {Leagues} from '../../types';
import {ArrowDownIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

const LeagueCarousel = () => {
  const leagues: Leagues[] = useAppSelector(store => store.sport.leagues);
  const navigation = useNavigation();
  return (
    <View
      style={[
        tw`relative h-48 pt-4 pb-4 pl-4 ml-10 mt-9 rounded-tl-3xl rounded-bl-3xl bg-black`,
      ]}>
      <View style={[tw`flex flex-row items-center justify-between`]}>
        <Text style={[tw`font-bold text-lg text-white`]}>Leagues</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('all_leagues');
          }}
          style={[tw`flex flex-row`]}>
          <Text style={[tw`text-gray-300`]}>View all </Text>
          <ArrowDownIcon size={15} color="gray" />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={[tw`pt-5`]}
        horizontal>
        {leagues.slice(0, 20).map(league => {
          if (league.league.logo) {
            return (
              <TouchableOpacity
                style={[tw`w-20 h-20 ml-4 mr-4`]}
                key={league.league.id}>
                <View>
                  <Image
                    style={[tw`h-20 rounded-full w-20`]}
                    source={{uri: league.league.logo}}
                  />
                </View>
              </TouchableOpacity>
            );
          }
        })}
      </ScrollView>
    </View>
  );
};

export default LeagueCarousel;
