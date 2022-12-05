import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../const/colors';
import HomeStackScreen from './StackNavigation/HomeStackScreen';
import WatchListScreen from '../screens/WatchListsScreen/WatchListScreen';
import BookedHistoryScreen from '../screens/BookedHistoryScreen/BookedHistoryScreen';
import SettingsScreen from '../screens/SettingScreeen/SettingScreen';

export type RootParamaterList = {
  HomeStack: undefined;
  SettingStack: undefined;
  WatchListStack: undefined;
  BookedHistoryStack: undefined;
};

const Tab = createBottomTabNavigator<RootParamaterList>();

export default function MainTab() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({route}) => ({
        tabBarIcon: ({
          focused,
          color,
          size,
        }: {
          focused: boolean;
          color: string;
          size: number;
        }) => {
          let iconName;

          if (route.name === 'HomeStack') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'SettingStack') {
            iconName = focused ? 'ios-settings' : 'ios-settings-outline';
          } else if (route.name === 'WatchListStack') {
            iconName = focused ? 'ios-bookmark' : 'ios-bookmark-outline';
          } else if (route.name === 'BookedHistoryStack') {
            iconName = focused
              ? 'ios-file-tray-stacked'
              : 'ios-file-tray-stacked-outline';
          }

          return (
            <Ionicons name={iconName as string} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="HomeStack" component={HomeStackScreen} />
      <Tab.Screen name="WatchListStack" component={WatchListScreen} />
      <Tab.Screen name="BookedHistoryStack" component={BookedHistoryScreen} />
      <Tab.Screen name="SettingStack" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
