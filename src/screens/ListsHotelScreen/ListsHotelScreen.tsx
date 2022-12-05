import dayjs from 'dayjs';
import React from 'react';
import {FlatList, SafeAreaView, View, Text} from 'react-native';
import HotelCard from '../../components/Cards/HotelCard/HotelCard';
import {colors} from '../../const/colors';
import {
  HomeStackProps,
  SearchParams,
} from '../../navigation/StackNavigation/HomeStackScreen';
import {getSearchHotel} from '../../services/hotels';

export default function ListsHotelScreen({route}: HomeStackProps) {
  const {checkIn, checkOut, guests, regionId, regionName} =
    route.params as SearchParams;
  const [data, setData] = React.useState([]);
  console.log(data);

  React.useEffect(() => {
    if (data.length === 0) {
      (async () => {
        try {
          const data = await getSearchHotel(
            regionId,
            checkIn,
            checkOut,
            guests,
          );
          setData(data);
        } catch (error) {
          console.error;
        }
      })();
    }
  }, []);

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
      <FlatList
        data={data}
        renderItem={({item}) => <HotelCard item={item} />}
        contentContainerStyle={{paddingHorizontal: 20, paddingTop: 10}}
        showsVerticalScrollIndicator={false}
        maxToRenderPerBatch={2}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
      />
    </SafeAreaView>
  );
}
