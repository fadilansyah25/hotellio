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
} from 'react-native';
import DestinationsCard from '../../components/Cards/DestinationCard/DestinationsCard';
import {colors} from '../../const/colors';
import {destinations} from '../../const/destination';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {HomeStackProps} from '../../navigation/StackNavigation/HomeStackScreen';

export default function HomeScreen() {
  const navigation = useNavigation<HomeStackProps['navigation']>();
  return (
    <SafeAreaView style={styles.screenContainer}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate('Search')}>
        <View style={styles.searchButton}>
          <Icon name="search" size={20} color={colors.primary} />
          <TextInput
            style={{
              fontSize: 16,
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
      <View style={{marginTop: 15}}>
        <Text style={styles.titleDest}>Top Destinations</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            horizontal
            data={destinations}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              marginTop: 10,
              paddingBottom: 30,
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
    paddingHorizontal: 15,
  },
  titleDest: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 10,
    backgroundColor: colors.light,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 20,
  },
});
