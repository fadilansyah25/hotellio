import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {colors} from '../../../const/colors';
import {styles} from './HistoryCard.style';
import {useNavigation} from '@react-navigation/native';
import {WatchListStackProps} from '../../../navigation/StackNavigation/WatchListStackScreen';
import dayjs from 'dayjs';
import {HotelItem} from '../../../services/hotelItem.types';
import {formatterIDR} from '../../../utils/currencyFormat';

type Props = {
  hotelId: string;
  item: any;
  uid?: string;
  isFavorite?: boolean;
  dataFav?: any[];
};

export default function HistoyCard({item}: Props) {
  const hotel = item.hotel as HotelItem.Property;
  const navigation = useNavigation<WatchListStackProps['navigation']>();
  const handleCardPress = () => {
    navigation.navigate('HotelDetails', hotel);
  };

  return (
    <TouchableOpacity activeOpacity={1}>
      <View style={styles.topHotelCard}>
        <TouchableOpacity activeOpacity={0.8} onPress={handleCardPress}>
          <Image
            source={{uri: hotel?.propertyImage?.image?.url}}
            style={styles.cardImage}
            resizeMethod={'auto'}
            resizeMode={'cover'}
          />
          <View style={styles.cardContent}>
            <Text
              numberOfLines={1}
              style={{fontSize: 16, color: colors.primary, fontWeight: '700'}}>
              {hotel?.name}
            </Text>
            <Text style={{fontSize: 14, overflow: 'hidden'}} numberOfLines={1}>
              {hotel?.neighborhood?.name}
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
              <View>
                <Text>
                  {dayjs(item.checkInDate.toDate()).format('dd, DD MMM YYYY')}
                  {' - '}
                  {dayjs(item.checkOutDate.toDate()).format('dd, DD MMM YYYY')}
                </Text>
                <Text>{formatterIDR.format(item.totalPrice)}</Text>
              </View>
              <View>
                <Text>{item.nightAmount} Night</Text>
                <Text>{item.guest} Guest</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
