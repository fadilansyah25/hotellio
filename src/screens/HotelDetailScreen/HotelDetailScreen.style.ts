import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../const/colors';
const {width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  screenContainer: {
    height: '100%',
    backgroundColor: colors.white,
  },
  loadingIndicator: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: width,
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageCaption: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 5,
    paddingLeft: 10,
    color: colors.white,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
  title2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  title3: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
