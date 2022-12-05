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
import DatePicker from '../../components/Datepicker/DatePicker';
import {today, tomorrow} from '../../utils/getInitialDate';
import {useNavigation} from '@react-navigation/native';
import {HomeStackProps} from '../../navigation/StackNavigation/HomeStackScreen';
import {getRegions, Region} from '../../services/hotels';
import useDebounce from '../../hooks/useDebounce';
import {Picker} from 'react-native-wheel-pick';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import RegionAutoCompItem from '../../components/RegionAutoCompItem/RegionAutoCompItem';

export default function SearchScreen() {
  const [query, setQuery] = React.useState('');
  const [checkin, setCheckin] = React.useState(today);
  const [checkout, setCheckout] = React.useState(tomorrow);
  const [guest, setGuest] = React.useState(1);
  const [data, setData] = React.useState<Array<Region>>([]);

  // ref
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = React.useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = React.useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleClosePress = () => bottomSheetModalRef.current?.close();

  const navigation = useNavigation<HomeStackProps['navigation']>();
  const debounce = useDebounce<string>(query, 500);

  const handleCheckIn = (checkIn: Date, checkout: Date) => {
    if (
      Date.parse(checkIn.toDateString()) > Date.parse(checkout.toDateString())
    ) {
      setCheckout(checkIn);
      setCheckin(checkout);
    } else if (
      Date.parse(checkIn.toDateString()) < Date.parse(checkout.toDateString())
    ) {
      setCheckin(checkIn);
    } else if (
      Date.parse(checkIn.toDateString()) === Date.parse(checkout.toDateString())
    ) {
      setCheckin(checkIn);
      setCheckout(dayjs(checkout).add(1, 'day').toDate());
    }
  };

  const onPressDestItem = (regionId: number, regionName: string) => {
    navigation.navigate('ListHotel', {
      regionId,
      checkIn: dayjs(checkin).format('YYYY-MM-DD'),
      checkOut: dayjs(checkout).format('YYYY-MM-DD'),
      guests: 1,
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

        {/* select checkin-checkout date */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            paddingHorizontal: 10,
            paddingBottom: 20,
          }}>
          {/* Date Picker Container */}
          <View style={styles.selectDate}>
            <DatePicker
              initalDate={checkin}
              minDate={today}
              onChange={(_, date) => handleCheckIn(date as Date, checkout)}
            />
            <Text style={{textAlign: 'center'}}>
              <Text
                style={{
                  color: colors.primary,
                  fontWeight: '600',
                }}>
                {dayjs(checkout).diff(dayjs(checkin), 'day')}{' '}
              </Text>
              <Text style={{color: colors.primary}}>Night</Text>
            </Text>
            <DatePicker
              initalDate={checkout}
              minDate={today}
              onChange={(_, date) => handleCheckIn(checkin, date as Date)}
            />
          </View>

          {/* Select Guests Picker */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handlePresentModalPress}>
            <View
              style={{
                paddingLeft: 10,
                marginLeft: 15,
                borderLeftWidth: 1.5,
                borderColor: colors.primary,
              }}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 15,
                  color: colors.primary,
                }}>
                {guest} Person
              </Text>
              <Text>Guest</Text>
            </View>
          </TouchableOpacity>
        </View>
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

      {/* Bottom Modal */}
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        topInset={230}
        style={{
          elevation: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 10,
            height: 40,
          },
          shadowOpacity: 0.91,
          shadowRadius: 20,
          backgroundColor: 'white',
        }}>
        <View style={styles.contentContainer}>
          <Text style={{marginTop: 10, fontSize: 16, fontWeight: '600'}}>
            Guest
          </Text>
          <Picker
            textColor={colors.primary}
            textSize={18}
            style={{
              backgroundColor: 'white',
              width: '100%',
              height: 150,
              marginTop: 10,
            }}
            selectedValue={guest}
            pickerData={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            onValueChange={value => setGuest(value)}
          />
          <TouchableOpacity
            onPress={handleClosePress}
            style={{
              padding: 10,
              backgroundColor: colors.primary,
              width: '70%',
              borderRadius: 10,
              marginTop: 10,
            }}>
            <Text
              style={{
                color: colors.white,
                fontSize: 16,
                fontWeight: '600',
                textAlign: 'center',
              }}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheetModal>
    </SafeAreaView>
  );
}
