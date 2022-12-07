import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
  Image,
} from 'react-native';
import HotelCard from '../../components/Cards/HotelCard/HotelCard';
import {colors} from '../../const/colors';
import {WatchListStackProps} from '../../navigation/StackNavigation/WatchListStackScreen';
import {useWatchList} from './watchlist.hooks';

export default function WatchListScreen({navigation}: WatchListStackProps) {
  const {data, isLoading} = useWatchList();

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.white,
        height: '100%',
      }}>
      <View
        style={{
          paddingVertical: 15,
          paddingHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: colors.white,
          elevation: 20,
        }}>
        <Image
          source={require('../../assets/logo2.png')}
          style={{height: 30, width: 110}}
        />
        <Text style={{fontSize: 15, fontWeight: '500', color: colors.primary}}>
          Favorite
        </Text>
      </View>
      {isLoading ? (
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
              item={item?.hotel}
              hotelId={item.hotelId}
              dataFav={data}
              uid={item.uid}
              onCardPress={hotel => navigation.navigate('HotelDetails', hotel)}
            />
          )}
          contentContainerStyle={{paddingHorizontal: 20, paddingVertical: 20}}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={2}
          ItemSeparatorComponent={() => <View style={{height: 25}} />}
        />
      )}
    </SafeAreaView>
  );
}
