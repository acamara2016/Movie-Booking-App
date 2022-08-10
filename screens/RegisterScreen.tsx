import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';
import {handleLogin} from '../features/movieSlicer';
import {useAppDispatch} from '../hooks/state';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [fullName, setFullName] = React.useState<string>('Adama Camara');
  const [email, setEmail] = React.useState<string>('user@gmail.com');
  const [password, setPassword] = React.useState<string>('password');
  const handleRegister = (e: any) => {
    e.preventDefault();
    dispatch(handleLogin({fullName, email, password}));
  };
  return (
    <SafeAreaView>
      <View className="p-5 flex flex-col gap-10">
        <TouchableOpacity onPress={() => navigation.navigate('LoggedOut')}>
          <ArrowLeftIcon size={40} color="black" />
        </TouchableOpacity>
        <Text className="text-5xl px-2">Register</Text>
        <View className="gap-5">
          <TextInput
            className="h-16 pl-3 text-xl border border-black border-x-2 border-y-2 rounded-lg"
            keyboardType="default"
            placeholder="Fullname"
            defaultValue={fullName}
            placeholderTextColor="black"
            onChange={e => setFullName(e.target.toString())}
          />
          <TextInput
            className="h-16 pl-3 text-xl border border-black border-x-2 border-y-2 rounded-lg"
            keyboardType="email-address"
            placeholder="Email address"
            defaultValue={email}
            placeholderTextColor="black"
            onChange={e => setEmail(e.target.toString())}
          />
          <TextInput
            className="h-16 pl-3 text-xl border border-black border-x-2 border-y-2 rounded-lg"
            keyboardType="default"
            placeholder="Password"
            defaultValue={password}
            placeholderTextColor="black"
            onChange={e => setPassword(e.target.toString())}
          />
          <TouchableOpacity
            className="w-screen bg-black rounded-md p-3"
            onPress={e => handleRegister(e)}>
            <Text className="text-xl text-white text-center font-bold">
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
