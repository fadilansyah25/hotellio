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
import dayjs from 'dayjs';
import {today, tomorrow} from '../../utils/getInitialDate';
import {useNavigation} from '@react-navigation/native';
import {HomeStackProps} from '../../navigation/StackNavigation/HomeStackScreen';
import {getRegions, Region} from '../../services/hotels';
import useDebounce from '../../hooks/useDebounce';
import RegionAutoCompItem from '../../components/RegionAutoCompItem/RegionAutoCompItem';
import BookingForm from '../../components/BookingForm/BookingForm';

export default function SearchScreen() {
  const [query, setQuery] = React.useState('');
  const [checkin, setCheckin] = React.useState(today);
  const [checkout, setCheckout] = React.useState(tomorrow);
  const [guest, setGuest] = React.useState(1);
  const [data, setData] = React.useState<Array<Region>>([]);
  const navigation = useNavigation<HomeStackProps['navigation']>();
  const debounce = useDebounce<string>(query, 500);

  const onPressDestItem = (regionId: number, regionName: string) => {
    navigation.navigate('ListHotel', {
      regionId,
      checkIn: dayjs(checkin).format('YYYY-MM-DD'),
      checkOut: dayjs(checkout).format('YYYY-MM-DD'),
      guests: guest,
      regionName: regionName,
    });
  };

  React.useEffect(() => {
    if (query !== '') {
      (async () => {
        try {
          const data = await getRegions(query);
          setData(data as Array<Region>);
        } catch (error) {
          setData([]);
          console.error;
        }
      })();
    }
  }, [debounce]);

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
            placeholder="Cari kota, landmark, atau penginapan"
            value={query}
            onChangeText={text => setQuery(text)}
          />
        </View>

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
