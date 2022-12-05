import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';
import {styles} from './Destination.Card.style';

type Props = {
  image: ImageSourcePropType;
  name: string;
  destinationId: string;
};

const DestinationsCard = ({image, name, destinationId}: Props) => {
  return (
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
  );
};

export default DestinationsCard;
