import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';

import DestinationsCard from '../../components/Cards/DestinationCard/DestinationsCard';
import {destinations} from '../../const/destination';

import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {HomeStackProps} from '../../navigation/StackNavigation/HomeStackScreen';
import dayjs from 'dayjs';

import {colors} from '../../const/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './HomeScreen.style';
import {HotelItem} from '../../services/hotelItem.types';
import HotelCard from '../../components/Cards/HotelCard/HotelCard';
import {useWatchList} from '../WatchListsScreen/watchlist.hooks';

export default function HomeScreen() {
  const navigation = useNavigation<HomeStackProps['navigation']>();
  const [dataRecomendation, setDataRecomendation] = React.useState<any[]>([]);
  const {data: favorite, isLoading: isLoadingFav} = useWatchList();

  React.useEffect(() => {
    (async () => {
      const snapshot = await firestore().collection('userWatchListHotel').get();
      const data = snapshot.docs.map(doc => doc.data());
      setDataRecomendation(data);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.screenContainer}>
      {/* Top Bar */}
      <View style={styles.topBarContainer}>
        <Image
          source={require('../../assets/logo2.png')}
          style={{height: 30, width: 110}}
        />
        <Text style={styles.containerText}>
          {dayjs(new Date()).format('dd, DD MMM YYYY')}
        </Text>
      </View>

      {/* search button */}
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate('Search')}>
        <View style={styles.searchButton}>
          <Icon
            name="search"
            size={20}
            style={{paddingLeft: 10}}
            color={colors.primary}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Hotel"
            editable={false}
          />
        </View>
      </TouchableOpacity>

      {/* Content Container */}
      {isLoadingFav ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View style={{marginTop: 30}}>
          <ScrollView style={{height: '100%'}}>
            <Text style={styles.titleDest}>Top Destinations</Text>
            <FlatList
              horizontal
              data={destinations}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatlistContainer}
              renderItem={({item}) => (
                <DestinationsCard
                  image={item.imageUrl}
                  name={item.name}
                  destinationId={item.destinationId}
                />
              )}
            />
            <View style={{marginTop: 10}}>
              <Text style={{...styles.titleDest, marginBottom: 10}}>
                Hotel Recomendations
              </Text>
              <View style={{marginHorizontal: 20, marginBottom: 150}}>
                {dataRecomendation.map((item, id) => (
                  <>
                    <HotelCard
                      item={item?.hotel}
                      hotelId={item.hotelId}
                      uid={item.uid}
                      onCardPress={(hotel: HotelItem.Property) =>
                        navigation.navigate('HotelDetailHome', hotel)
                      }
                      dataFav={favorite}
                    />
                    <View style={{height: 25}} />
                  </>
                ))}
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
}
