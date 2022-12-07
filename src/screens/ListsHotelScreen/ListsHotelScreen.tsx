import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

import HotelCard from '../../components/Cards/HotelCard/HotelCard';

import {getSearchHotel} from '../../services/hotels';

import dayjs from 'dayjs';
import {colors} from '../../const/colors';
import {
  HomeStackProps,
  SearchParams,
} from '../../navigation/StackNavigation/HomeStackScreen';
import {firebase} from '@react-native-firebase/auth';
import {useWatchList} from '../WatchListsScreen/watchlist.hooks';
import {HotelItem} from '../../services/hotelItem.types';

interface Hotel {
  id: string;
}

export default function ListsHotelScreen({navigation, route}: HomeStackProps) {
  const [data, setData] = useState<HotelItem.Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const {data: favorite, isLoading: isLoadingFav} = useWatchList();

  const user = firebase.auth().currentUser;

  const {checkIn, checkOut, guests, regionId, regionName} =
    route.params as SearchParams;

  useEffect(() => {
    if (data.length === 0) {
      (async () => {
        try {
          const data = await getSearchHotel(
            regionId,
            checkIn,
            checkOut,
            guests,
          );
          setData(data as HotelItem.Property[]);
          setIsLoading(false);
        } catch (error) {
          console.error;
          setIsLoading(false);
        }
      })();
    }
  }, []);

  const handleCardPress = (hotel: HotelItem.Property) => {
    navigation.navigate('HotelDetailHome', hotel);
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.white,
        height: '100%',
      }}>
      <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
        <Text
          style={{
            marginTop: 5,
            fontSize: 15,
          }}>
          Search Result Place {regionName}
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 15,
            fontWeight: '500',
            color: colors.primary,
          }}>
          {dayjs(checkIn).format('DD MMM')} -{' '}
          {dayjs(checkOut).format('DD MMM,  YYYY')}
          {'    -    '}
          {dayjs(checkOut).diff(checkIn, 'day')} Night {guests} Person
        </Text>
      </View>
      {isLoading || isLoadingFav ? (
        <View
          style={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={'large'} color={colors.secondary} />
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <HotelCard
              item={item}
              uid={user?.uid as string}
              hotelId={item.id}
              dataFav={favorite}
              onCardPress={handleCardPress}
            />
          )}
          contentContainerStyle={{paddingHorizontal: 20, paddingTop: 10}}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={2}
          ItemSeparatorComponent={() => <View style={{height: 20}} />}
        />
      )}
    </SafeAreaView>
  );
}
