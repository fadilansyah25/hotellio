import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../const/colors';

const borderRadius = 5;

export const styles = StyleSheet.create({
  topHotelCard: {
    height: 200,
    width: '100%',
    elevation: 5,
    borderRadius: borderRadius,
    backgroundColor: colors.white,
    marginRight: 10,
  },
  cardImage: {
    width: '100%',
    height: '68%',
    borderTopRightRadius: borderRadius,
    borderTopLeftRadius: borderRadius,
  },
  cardRatingStar: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    paddingVertical: 2,
    paddingHorizontal: 5,
    backgroundColor: 'rgba(0,0,0,0.35)',
    borderTopLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardPriceLabel: {
    position: 'absolute',
    zIndex: 1,
    right: 0,
    paddingVertical: 2,
    paddingHorizontal: 5,
    backgroundColor: 'rgba(0,0,0,0.35)',
    borderTopRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
