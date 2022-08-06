import React, {useEffect} from 'react';
import {View, Text, ScrollView, Image, Button} from 'react-native';
import {fetchMostPopular} from '../features/movieSlicer';
import {IMovie, MPAARating} from '../types/movie';
import {useAppDispatch, useAppSelector} from '../hooks/state';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MovieComponent from './MovieComponent';
const PopularMovies = (handleGoToDetail: any) => {
  const {mostPopularMovies} = useAppSelector(store => store.movies);

  return (
    <ScrollView showsVerticalScrollIndicator className="space-x-3 bg-white">
      <View className="w-screen flex flex-row items-center space-around">
        <Text className="font-bold text-xl px-4 pb-4">Popular</Text>
        <TouchableOpacity
          onPress={() => {
            console.log('see all movie');
          }}>
          <Text className="text-gray-600 text-sm px-4 pb-4">See all</Text>
        </TouchableOpacity>
      </View>
      {mostPopularMovies.map((movie: IMovie) => {
        return <MovieComponent key={movie.id} movie={movie} />;
      })}
    </ScrollView>
  );
};

export default PopularMovies;
