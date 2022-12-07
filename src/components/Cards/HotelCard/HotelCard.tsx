import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {colors} from '../../../const/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './HotelCard.style';
import {
  firebaseDeleteWatchList,
  firebaseInputWatchListHotel,
} from '../../../services/firebase';
import {HotelItem} from '../../../services/hotelItem.types';

type Props = {
  hotelId: string;
  item: HotelItem.Property;
  uid?: string;
  isFavorite?: boolean;
  dataFav?: any[];
  onCardPress?: (hotel: HotelItem.Property) => void;
};

export default function HotelCard({
  item,
  uid,
  isFavorite = false,
  hotelId,
  dataFav,
  onCardPress,
}: Props) {
  if (dataFav) {
    isFavorite = dataFav.some(item => item.hotel.id === hotelId);
  }

  const handleLikePress = async () => {
    if (!isFavorite) {
      if (uid) {
        await firebaseInputWatchListHotel({
          uid: uid,
          hotel: item,
          hotelId: hotelId,
        });
      }
    } else {
      if (uid) {
        firebaseDeleteWatchList({uid, hotelId});
      }
    }
  };

  const handleCardPress = () => {
    if (onCardPress) {
      onCardPress(item);
    }
  };

  return (
    <TouchableOpacity activeOpacity={1}>
      <View style={styles.topHotelCard}>
        <View style={styles.cardPriceLabel}>
          <Text
            style={{
              fontSize: 14,
              color: colors.white,
              fontWeight: '600',
              marginHorizontal: 10,
            }}
            numberOfLines={1}>
            {item.mapMarker.label}
          </Text>
        </View>
        <View style={styles.cardRatingStar}>
          <Icon name="ios-star" size={15} color={colors.orange} />
          <Text style={{fontSize: 14, color: colors.white, marginLeft: 5}}>
            {item.reviews.score} / 10
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={handleCardPress}>
          <Image
            source={{uri: item?.propertyImage?.image?.url}}
            style={styles.cardImage}
            resizeMethod={'auto'}
            resizeMode={'cover'}
          />
          <View style={{paddingHorizontal: 10, paddingTop: 10}}>
            <Text
              numberOfLines={1}
              style={{fontSize: 16, color: colors.primary, fontWeight: '700'}}>
              {item.name}
            </Text>
            <Text style={{fontSize: 14, overflow: 'hidden'}} numberOfLines={1}>
              {item.neighborhood.name}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{position: 'absolute', bottom: 0, right: 0, margin: 10}}
          onPress={handleLikePress}>
          <Icon
            name={isFavorite ? 'ios-heart' : 'ios-heart-outline'}
            color={isFavorite ? 'red' : colors.dark}
            size={20}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
