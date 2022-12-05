import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {colors} from '../../../const/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './HotelCard.style';

export default function HotelCard({item}: {item: any}) {
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
            {item?.mapMarker?.label}
          </Text>
        </View>
        <View style={styles.cardRatingStar}>
          <Icon name="star" size={15} color={colors.orange} />
          <Text style={{fontSize: 14, color: colors.white, marginLeft: 2}}>
            {item?.reviews?.score} / 10
          </Text>
        </View>
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
            {item?.name}
          </Text>
          <Text style={{fontSize: 14, overflow: 'hidden'}} numberOfLines={1}>
            {item?.neighborhood?.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
