import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import WatchListScreen from '../../screens/WatchListsScreen/WatchListScreen';
import HotelDetailScreen from '../../screens/HotelDetailScreen/HotelDetailScreen';
import {HotelItem} from '../../services/hotelItem.types';
import BookedHistoryScreen from '../../screens/BookedHistoryScreen/BookedHistoryScreen';

export type BookedStackParamaterList = {
  History: undefined;
  HotelDetails: HotelItem.Property;
};

export type BookedStackProps =
  NativeStackScreenProps<BookedStackParamaterList>;

const BookedStack =
  createNativeStackNavigator<BookedStackParamaterList>();

export default function BookedStackScreen() {
  return (
    <BookedStack.Navigator
      initialRouteName="History"
      screenOptions={{headerShown: false}}>
      <BookedStack.Screen name="History" component={BookedHistoryScreen} />
      <BookedStack.Screen
        name="HotelDetails"
        component={HotelDetailScreen}
        options={{animation: 'slide_from_right'}}
      />
    </BookedStack.Navigator>
  );
}
