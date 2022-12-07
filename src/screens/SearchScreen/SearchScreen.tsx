import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  ScrollView,
} from 'react-native';
import {colors} from '../../const/colors';
import {styles} from './SearchScreen.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RegionAutoCompItem from '../../components/RegionAutoCompItem/RegionAutoCompItem';
import BookingForm from '../../components/BookingForm/BookingForm';
import {useSearchScreen} from './useSearchScreen';

export default function SearchScreen() {
  const {
    navigation,
    query,
    data,
    setCheckin,
    setCheckout,
    setGuest,
    setQuery,
    onPressDestItem,
  } = useSearchScreen();

  return (
    <SafeAreaView style={styles.screenContainer}>
      {/* Form Container */}
      <View
        style={{
          paddingHorizontal: 15,
          borderBottomWidth: 0.2,
          elevation: 5,
          backgroundColor: colors.white,
        }}>
        {/* Input Text Region */}
        <View style={styles.inputDest}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={25} color={colors.primary} />
          </TouchableOpacity>
          <TextInput
            style={{fontSize: 16, paddingLeft: 20, flex: 1}}
            placeholder="Search city, landmark, or hotel"
            value={query}
            onChangeText={text => setQuery(text)}
          />
        </View>

        {/* Booking Form */}
        <BookingForm
          onChange={(ci, co, g) => {
            setCheckin(ci);
            setCheckout(co);
            setGuest(g);
          }}
        />
      </View>

      {/* autocomlete results */}
      <ScrollView style={styles.autoCompleteCont}>
        {data.map((item, id) => (
          <RegionAutoCompItem
            regionData={item}
            key={id}
            onPress={() =>
              onPressDestItem(item.gaiaId, item.regionNames.fullName)
            }
          />
        ))}
        <View>
          <Text style={{textAlign: 'center'}}>Cities, Landmark</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
