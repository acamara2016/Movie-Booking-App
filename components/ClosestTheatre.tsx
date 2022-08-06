import React, {useEffect} from 'react';
import {View, Text, ScrollView, Image, Button} from 'react-native';
import {fetchClosestTheatres, fetchMostPopular} from '../features/movieSlicer';
import {IMovie, MPAARating} from '../types/movie';
import {StarIcon} from 'react-native-heroicons/solid';
import {StarIcon as OutlinedStartIcon} from 'react-native-heroicons/outline';
import {useAppDispatch, useAppSelector} from '../hooks/state';
import {Car} from 'react-native-heroicons/solid';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ITheater} from '../types/theater';
const ClosestTheaters = (navigation: any) => {
  const {closestTheatres} = useAppSelector(store => store.movies);

  return (
    <ScrollView showsVerticalScrollIndicator className="p-4 bg-white">
      {closestTheatres.map((theater: ITheater) => {
        return (
          <View className="pb-3 pt-3" key={theater.id}>
            <View className="flex flex-row gap-4 justify-start">
              <Image
                style={{height: 115, width: 90}}
                className="rounded-xl"
                source={{uri: theater.mapImageUrl}}
              />
              <View className="flex flex-col">
                <View className="truncate pb-2">
                  <Text
                    style={{overflow: 'hidden'}}
                    className="font-bold text-ellipsis overflow-hidden ... text-meduim">
                    {theater.name}
                  </Text>
                </View>
                <View>
                  {theater.isDriveIn && <Text>Drive-in</Text>}
                  {theater.distance && (
                    <Text
                      className={`font-bold pt-1 pb-1 ${
                        theater.distance < 3000 ? 'text-green-700' : ''
                      }`}>{`${theater.distance.toPrecision(
                      6,
                    )}m from you`}</Text>
                  )}
                  <Text>{theater.address1}</Text>
                </View>
                <View className="flex flex-row gap-2 pt-1">
                  <TouchableOpacity className="justify-cente mt-1 p-3  border rounded-xl border-blue-700 items-center text-center">
                    <Text>Direction</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="justify-center mt-1 p-3 border rounded-xl border-blue-700 items-center text-center">
                    <Text>Book Ticket</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default ClosestTheaters;
