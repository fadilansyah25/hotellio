import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import ProfileScreen from '../../screens/ProfileScreen/ProfilScreen';

export type ProfileStackParamaterList = {
  Profile: undefined;
};

export type ProfileStackProps =
  NativeStackScreenProps<ProfileStackParamaterList>;

const ProfileStack = createNativeStackNavigator<ProfileStackParamaterList>();

export default function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}
