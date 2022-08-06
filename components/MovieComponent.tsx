import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {IMovie} from '../types/movie';
import {StarIcon} from 'react-native-heroicons/solid';
import {StarIcon as OutlinedStartIcon} from 'react-native-heroicons/outline';
import DetailScreen from '../screens/DetailScreen';
import {useNavigation} from '@react-navigation/native';
type MovieComponentProps = {
  movie: IMovie;
  vertical?: boolean;
};

const MovieComponent = ({movie, vertical}: MovieComponentProps) => {
  const navigation = useNavigation();
  if (vertical) {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('detail', {data: movie})}>
        {movie.hasPosterImage && (
          <View className="px-3">
            <Image
              style={{
                width: 195,
                height: 300,
              }}
              className="rounded-md"
              source={{uri: movie.mediumPosterImageUrl}}
            />
            <View className="py-5">
              <Text className="font-bold text-lg">
                {movie.name.substring(0, 18)}
                {movie.name.length > 18 && <Text> ...</Text>}
              </Text>
              <View className="px-0 flex flex-row">
                {[1, 2, 3].map(star => {
                  return <StarIcon key={star} />;
                })}
                <OutlinedStartIcon />
              </View>
            </View>
          </View>
        )}
      </TouchableOpacity>
    );
  }
  return (
    <View className="pb-2 pt-2 px-4" key={movie.id}>
      <TouchableOpacity
        onPress={() => navigation.navigate('detail', {data: movie})}
        className="flex flex-row gap-4 justify-start">
        <Image
          style={{height: 100, width: 90}}
          className="rounded-xl"
          source={{uri: movie.mediumPosterImageUrl}}
        />
        <View className="flex flex-col">
          <Text className="font-bold text-lg">
            {movie.name.substring(0, 20)}
          </Text>
          <View className="px-0 flex flex-row">
            {[1, 2, 3].map(star => {
              return <StarIcon size={17} key={star} />;
            })}
            <OutlinedStartIcon size={17} />
          </View>
          {/* TODO: find genres for each movie */}
          <View className="flex flex-row gap-2 py-1">
            {['Action', 'Comedy', 'Crime', 'Thriller'].map(genre => {
              return (
                <Text key={genre} className="text-gray-600">
                  {genre}
                </Text>
              );
            })}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MovieComponent;
