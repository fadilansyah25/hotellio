import React from 'react'
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import SearchScreen from '../../screens/SearchScreen/SearchScreen';
import ListsHotelScreen from '../../screens/ListsHotelScreen/ListsHotelScreen';

export type HomeStackParamaterList = {
  Home: undefined;
  Search: undefined;
  ListHotel: SearchParams;
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
      <HomeStack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
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
      </HomeStack.Navigator>
  );
}
