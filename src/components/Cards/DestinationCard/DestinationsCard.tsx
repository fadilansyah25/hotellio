import {useNavigation} from '@react-navigation/native';
import dayjs from 'dayjs';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {HomeStackProps} from '../../../navigation/StackNavigation/HomeStackScreen';
import {today, tomorrow} from '../../../utils/getInitialDate';
import {styles} from './Destination.Card.style';

type Props = {
  image: ImageSourcePropType;
  name: string;
  destinationId: string;
};

const DestinationsCard = ({image, name, destinationId}: Props) => {
  const navigation = useNavigation<HomeStackProps['navigation']>();
  const handleCardPress = () => {
    navigation.navigate('ListHotel', {
      regionId: parseInt(destinationId),
      checkIn: dayjs(today).format('YYYY-MM-DD'),
      checkOut: dayjs(tomorrow).format('YYYY-MM-DD'),
      guests: 1,
      regionName: name,
    });
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handleCardPress}>
      <View style={styles.cardContainer}>
        <Image
          source={image}
          style={styles.cardImage}
          resizeMethod={'resize'}
          resizeMode={'contain'}
        />
        <View style={styles.cardOverlay}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: '600',
              textTransform: 'capitalize',
            }}>
            {name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DestinationsCard;
