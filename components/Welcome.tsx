import React from 'react';
import {View, Text} from 'react-native';
import {useAppSelector} from '../hooks/state';

const Welcome = () => {
  const {user} = useAppSelector(state => state.movies);
  return (
    <View className="w-screen h-40 p-5 px-4 py-10">
      <Text className="text-4xl font-bold">
        Hello {user.fullName.split(' ')[0]},
      </Text>
      <Text className="text-gray-500">Book your faviroute movies</Text>
    </View>
  );
};

export default Welcome;
