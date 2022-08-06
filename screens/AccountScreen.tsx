import React from 'react';
import {View, Button, Text, Image, TouchableOpacity} from 'react-native';

const AccountScreen = ({navigation}: {navigation: any}) => {
  return (
    <View className="flex items-center h-screen justify-center pt-40  gap-6">
      <View className="">
        <Image
          className="rounded-full h-40 w-40"
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
          }}
        />
      </View>
      <View className="text-center items-center">
        <Text className="text-lg">Adama Camara</Text>
        <Text className="font-bold text-lg">Halifax, NS</Text>
      </View>
      <View className="flex flex-col gap-3">
        <TouchableOpacity className="border w-80 border-black py-3 px-6 rounded-lg ">
          <Text className="text-center">Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border w-80 border-black py-3 px-6 bg-black rounded-lg">
          <Text className="text-white text-center">Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountScreen;
