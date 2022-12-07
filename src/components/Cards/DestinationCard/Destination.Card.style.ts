import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../const/colors';
const {width, height} = Dimensions.get('screen');
const cardWidth = width / 3;
const cardHeight = height / 8;

export const styles = StyleSheet.create({
  cardContainer: {
    height: cardHeight,
    width: cardWidth,
    backgroundColor: colors.white,
    marginRight: 10,
    elevation: 10,
    borderRadius: 6,
  },
  cardImage: {
    height: '100%',
    width: '100%',
    borderRadius: 6,
  },
  cardOverlay: {
    padding: 10,
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(109, 94, 102, 0.4)',
    borderRadius: 6,
  },
});
