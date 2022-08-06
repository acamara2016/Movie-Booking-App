import React from 'react';
import {IMovie} from '../types/movie';
import {StarIcon} from 'react-native-heroicons/solid';
import {StarIcon as OutlinedStartIcon} from 'react-native-heroicons/outline';
import {
  View,
  Button,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
const DetailScreen = ({navigation, route}: {navigation: any; route: any}) => {
  const data: IMovie = route.params.data;
  return (
    <View>
      <ScrollView>
        <View className="items-center pt-10">
          {data.hasPosterImage && (
            <View className="px-3">
              <Image
                style={{
                  width: 195,
                  height: 300,
                }}
                className="rounded-md"
                source={{uri: data.mediumPosterImageUrl}}
              />
              <View className="py-5 items-center">
                <Text className="font-bold text-lg">
                  {data.name.substring(0, 18)}
                </Text>
                {data.name.length > 18 && <Text> ...</Text>}
                <View className="px-0 flex flex-row">
                  {[1, 2, 3].map(star => {
                    return <StarIcon key={star} />;
                  })}
                  <OutlinedStartIcon />
                </View>
              </View>
            </View>
          )}
        </View>
        <View className="flex flex-row items-center justify-center">
          <View className="p-6">
            <Text className="font-bold">{new Date().getDay()}</Text>
            <Text>Date</Text>
          </View>
          <TouchableOpacity className="p-6">
            <Text className="font-bold">{`${new Date().getHours()}:${new Date().getMinutes()}`}</Text>
            <Text>Hour</Text>
          </TouchableOpacity>
          <View className="border rounded-lg border-black p-6">
            <Text className="font-bold">Select seat</Text>
            <Text>Seat no</Text>
          </View>
        </View>
        <View>
          <Text className="font-bold text-xl px-7 pb-2">Synopsis</Text>
          <Text className="px-7">{data.mpaaRating.ratingDescription}</Text>
          <Text className="px-7">
            <Text className="font-bold">Warnings:</Text>{' '}
            {data.mpaaRating.warning}
          </Text>
        </View>
        <View className="flex justify-center items-center">
          <TouchableOpacity className="bg-black p-4 mt-6 rounded-xl w-60">
            <Text className="text-white text-center">BOOKING</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
