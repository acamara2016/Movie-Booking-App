import React from 'react';
import {View, Text} from 'react-native';

const Welcome = (user: IUser) => {
  return (
    <View className="w-screen h-40 p-5 px-4 py-10">
      <Text className="text-4xl font-bold">Hello {user.firstName},</Text>
      <Text className="text-gray-500">Book your faviroute movies</Text>
    </View>
  );
};

export default Welcome;
