import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {handleLogin} from '../features/movieSlicer';
import {useAppDispatch} from '../hooks/state';

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [email, setEmail] = React.useState<string>('user@gmail.com');
  const [password, setPassword] = React.useState<string>('password');
  const handleLoginEvent = (e: any) => {
    e.preventDefault();
    dispatch(handleLogin({fullName: 'Adama Camara', email, password}));
  };
  return (
    <SafeAreaView>
      <View className="p-5 flex flex-col gap-10">
        <TouchableOpacity onPress={() => navigation.navigate('LoggedOut')}>
          <ArrowLeftIcon size={40} color="black" />
        </TouchableOpacity>
        <Text className="text-5xl px-2">Log in</Text>
        <View className="gap-5">
          <TextInput
            className="h-16 pl-3 text-xl border border-black border-x-2 border-y-2 rounded-lg"
            keyboardType="email-address"
            placeholder="Email address"
            placeholderTextColor="black"
            onChange={e => setEmail(e.target.toString())}
          />
          <TextInput
            className="h-16 pl-3 text-xl border border-black border-x-2 border-y-2 rounded-lg"
            keyboardType="default"
            placeholder="Password"
            placeholderTextColor="black"
            onChange={e => setPassword(e.target.toString())}
          />
          <TouchableOpacity
            className="w-screen bg-black rounded-md p-3"
            onPress={e => handleLoginEvent(e)}>
            <Text className="text-xl text-white text-center font-bold">
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
