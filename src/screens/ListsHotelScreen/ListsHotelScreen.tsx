import React from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import HotelCard from '../../components/Cards/HotelCard/HotelCard';
import dayjs from 'dayjs';
import {colors} from '../../const/colors';
import {firebase} from '@react-native-firebase/auth';
import {useWatchList} from '../WatchListsScreen/watchlist.hooks';
import {HotelItem} from '../../services/hotelItem.types';
import {useGetSearchHotel} from './ListHotel.hooks';
import {
  HomeStackProps,
  SearchParams,
} from '../../navigation/StackNavigation/HomeStackScreen';

export default function ListsHotelScreen({navigation, route}: HomeStackProps) {
  const {checkIn, checkOut, guests, regionId, regionName} =
    route.params as SearchParams;

  const {data, isLoading} = useGetSearchHotel({
    checkIn,
    checkOut,
    guests,
    regionId,
  });
  const {data: favorite, isLoading: isLoadingFav} = useWatchList();
  const user = firebase.auth().currentUser;

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
