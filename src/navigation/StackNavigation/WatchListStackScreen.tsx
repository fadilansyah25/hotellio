import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import WatchListScreen from '../../screens/WatchListsScreen/WatchListScreen';
import HotelDetailScreen from '../../screens/HotelDetailScreen/HotelDetailScreen';
import {HotelItem} from '../../services/hotelItem.types';

export type WatchListStackParamaterList = {
  WatchList: undefined;
  HotelDetails: HotelItem.Property;
};

export type WatchListStackProps =
  NativeStackScreenProps<WatchListStackParamaterList>;

const WatchListStack =
  createNativeStackNavigator<WatchListStackParamaterList>();

export default function WatchListStackScreen() {
  return (
    <WatchListStack.Navigator
      initialRouteName="WatchList"
      screenOptions={{headerShown: false}}>
      <WatchListStack.Screen name="WatchList" component={WatchListScreen} />
      <WatchListStack.Screen
        name="HotelDetails"
        component={HotelDetailScreen}
        options={{animation: 'slide_from_right'}}
      />
    </WatchListStack.Navigator>
  );
}
