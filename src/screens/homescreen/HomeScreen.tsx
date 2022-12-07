import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import DestinationsCard from '../../components/Cards/DestinationCard/DestinationsCard';
import {colors} from '../../const/colors';
import {destinations} from '../../const/destination';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {HomeStackProps} from '../../navigation/StackNavigation/HomeStackScreen';
import dayjs from 'dayjs';

export default function HomeScreen() {
  const navigation = useNavigation<HomeStackProps['navigation']>();
  return (
    <SafeAreaView style={styles.screenContainer}>
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
        <Text style={{fontSize: 14, fontWeight: '500', color: colors.primary}}>
          {dayjs(new Date).format("dd, DD MMM YYYY")}
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate('Search')}>
        <View style={styles.searchButton}>
          <Icon name="search" size={20} style={{paddingLeft: 10}} color={colors.primary} />
          <TextInput
            style={{
              fontSize: 14,
              color: colors.primary,
              fontWeight: '600',
              flex: 1,
              paddingLeft: 15,
            }}
            placeholder="Search Hotel"
            editable={false}
          />
        </View>
      </TouchableOpacity>
      <View style={{marginTop: 30}}>
        <Text style={styles.titleDest}>Top Destinations</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            horizontal
            data={destinations}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              marginTop: 10,
              paddingBottom: 30,
              paddingLeft: 20,
            }}
            renderItem={({item}) => (
              <DestinationsCard
                image={item.imageUrl}
                name={item.name}
                destinationId={item.destinationId}
              />
            )}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: colors.white,
    height: '100%',
  },
  titleDest: {
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 15,
    color: colors.secondary,
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    backgroundColor: colors.white,
    borderColor: colors.secondary,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 20,
  },
});
