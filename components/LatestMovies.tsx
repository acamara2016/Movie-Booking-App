import React, {useEffect} from 'react';
import {View, Text, ScrollView, Image, Button} from 'react-native';
import {fetchLastestMovies} from '../features/movieSlicer';
import {IMovie, MPAARating} from '../types/movie';
import {StarIcon} from 'react-native-heroicons/solid';
import {StarIcon as OutlinedStartIcon} from 'react-native-heroicons/outline';
import {useAppDispatch, useAppSelector} from '../hooks/state';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MovieComponent from './MovieComponent';
const LastestMovies = (handleGoToDetail: any) => {
  const {latestMovies} = useAppSelector(store => store.movies);

  return (
    <ScrollView className="" horizontal showsHorizontalScrollIndicator={false}>
      {latestMovies !== null &&
        latestMovies?.map((movie: IMovie) => {
          return <MovieComponent movie={movie} vertical key={movie.id} />;
        })}
    </ScrollView>
  );
};

export default LastestMovies;
