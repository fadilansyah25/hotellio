import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen/RegisterScreen';

export type AuthStackParamaterList = {
  Login: undefined;
  Register: undefined;
  Main: undefined;
};

export type AuthStackProps = NativeStackScreenProps<AuthStackParamaterList>;

const AuthStack = createNativeStackNavigator<AuthStackParamaterList>();

export default function AuthStackScreen() {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{animation: 'slide_from_right'}}
      />
    </AuthStack.Navigator>
  );
}
