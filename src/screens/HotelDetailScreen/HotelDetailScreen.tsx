import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  View,
  Image,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {WatchListStackProps} from '../../navigation/StackNavigation/WatchListStackScreen';
import {useGetHotelDetails} from '../../services/hotels';
import {colors} from '../../const/colors';
import Animated, {color} from 'react-native-reanimated';
import BookingForm from '../../components/BookingForm/BookingForm';
import {HotelItem} from '../../services/hotelItem.types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Badge from '../../components/Badge/Badge';
import {styles} from './HotelDetailScreen.style';
import {firebase} from '@react-native-firebase/auth';
import {firebaseInputBooking} from '../../services/firebase';
import {today, tomorrow} from '../../utils/getInitialDate';
import dayjs from 'dayjs';
import {useNavigation} from '@react-navigation/native';
import {BookedStackProps} from '../../navigation/StackNavigation/BookedStackScreen';
const {width} = Dimensions.get('screen');

export default function HotelDetailScreen({route}: WatchListStackProps) {
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guest, setGuest] = useState(1);
  const user = firebase.auth().currentUser;
  const hotel = route.params as HotelItem.Property;
  const {data, loading} = useGetHotelDetails({hotel_id: hotel.id});
  const navigation = useNavigation<BookedStackProps['navigation']>();

  console.log(data);
  console.log(hotel);

  const handleBooking = () => {
    firebaseInputBooking({
      checkInDate: checkIn,
      checkOutDate: checkOut,
      hotel: hotel,
      price: hotel.price.lead.amount,
      guest: guest,
      nightAmount: dayjs(checkOut).diff(dayjs(checkIn), 'day'),
      totalPrice:
        dayjs(checkOut).diff(dayjs(checkIn), 'day') * hotel.price.lead.amount,
      uid: user?.uid as string,
    }).then(() => navigation.navigate('History'));
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      {loading ? (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator size={'large'} color={colors.secondary} />
        </View>
      ) : (
        <>
          {/* image carousel */}
          <Animated.FlatList
            style={{height: 400}}
            showsHorizontalScrollIndicator={false}
            data={data?.propertyGallery.images}
            horizontal
            snapToInterval={width}
            decelerationRate={'fast'}
            renderItem={({item}) => (
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{uri: item.image.url}}
                  resizeMethod="auto"
                  resizeMode='stretch'
                />
                <Text style={styles.imageCaption}>
                  {item.image.description}
                </Text>
              </View>
            )}
          />

          {/* header */}
          <View style={{paddingHorizontal: 15, marginTop: 10}}>
            <Text style={styles.title}>{data?.summary.name}</Text>
            <Text>{data?.summary.location.address.addressLine}</Text>
            <Text style={{fontSize: 14}}>{data?.summary.tagline}</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="star" size={20} color={colors.orange} />
                <Text style={{fontSize: 14, marginLeft: 5}}>
                  {data?.summary.overview.propertyRating.rating}
                </Text>
              </View>
              <Text style={styles.title2}>{hotel.mapMarker.label}</Text>
            </View>
          </View>
          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{paddingVertical: 10}}
              data={data?.summary.amenities.topAmenities.items}
              renderItem={({item}) => <Badge text={item.text} />}
            />
          </View>

          {/* content details */}
          <ScrollView showsHorizontalScrollIndicator={false}>
            {/* checkin instruction */}
            <View style={{paddingHorizontal: 15, marginTop: 5}}>
              <View style={{marginTop: 10}}>
                <Text style={{...styles.title3, marginBottom: 5}}>
                  Check In Instruction
                </Text>
                {data?.summary.policies.checkinInstructions.map((item, id) => (
                  <Text key={id}>{item}</Text>
                ))}
              </View>

              {/* amenities badge */}
              <View style={{marginTop: 10}}>
                {data?.summary.amenities.takeover.property.map((item, id) => (
                  <View key={id} style={{marginTop: 10}}>
                    <Text>{item.header.text}</Text>
                    <FlatList
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      data={item.items}
                      renderItem={({item}) => <Badge text={item.text} />}
                    />
                  </View>
                ))}
              </View>

              <View style={{marginTop: 20}}>
                <BookingForm
                  onChange={(ci, co, g) => {
                    setCheckIn(ci), setCheckOut(co), setGuest(g);
                  }}
                />

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.buttonContainer}
                  onPress={handleBooking}>
                  <Text style={styles.buttonText}>Book Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
}
