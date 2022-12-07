import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import SearchScreen from '../../screens/SearchScreen/SearchScreen';
import ListsHotelScreen from '../../screens/ListsHotelScreen/ListsHotelScreen';
import HotelDetailScreen from '../../screens/HotelDetailScreen/HotelDetailScreen';
import { HotelItem } from '../../services/hotelItem.types';

export type HomeStackParamaterList = {
  Home: undefined;
  Search: undefined;
  ListHotel: SearchParams;
  HotelDetailHome: HotelItem.Property;
};

export type SearchParams = {
  regionId: number;
  regionName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
};

export type HomeStackProps = NativeStackScreenProps<HomeStackParamaterList>;

const HomeStack = createNativeStackNavigator<HomeStackParamaterList>();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="Search"
        component={SearchScreen}
        options={{animation: 'slide_from_right'}}
      />
      <HomeStack.Screen
        name="ListHotel"
        component={ListsHotelScreen}
        options={{animation: 'slide_from_right'}}
      />
      <HomeStack.Screen
        name="HotelDetailHome"
        component={HotelDetailScreen}
        options={{animation: 'slide_from_right'}}
      />
    </HomeStack.Navigator>
  );
}
