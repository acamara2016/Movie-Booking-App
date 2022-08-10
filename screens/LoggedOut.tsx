import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const LoggedOut = () => {
  const navigation = useNavigation();
  return (
    <View className="h-screen w-screen">
      <View className="h-5/6 bg-yellow-700"></View>
      <View className="flex flex-row gap-2 h-1/6 justify-center pt-4 px-4">
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          className="border border-black w-1/2 justify-center items-center rounded-md h-16">
          <Text>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          className="border border-black rounded-md justify-center items-center w-1/2 h-16 bg-black">
          <Text className="text-white">REGISTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoggedOut;
