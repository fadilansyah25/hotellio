import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
  Image,
} from 'react-native';
import HistoryCard from '../../components/Cards/HistoryCard/HistoryCard';
import {colors} from '../../const/colors';
import {useBookHistory} from './historyList.hooks';

export default function BookedHistoryScreen() {
  const {data, isLoading} = useBookHistory();

  console.log(data);

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
          Book History
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
            <HistoryCard
              item={item}
              hotelId={item.hotelId}
              dataFav={data}
              uid={item.uid}
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
