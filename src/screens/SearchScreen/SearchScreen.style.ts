import {  StyleSheet} from 'react-native'
import { colors } from '../../const/colors';

export const styles = StyleSheet.create({
    screenContainer: {
      backgroundColor: colors.white,
      flex: 1,
    },
    inputDest: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: colors.primary,
      backgroundColor: colors.white,
    },
    autoCompleteCont: {
      paddingHorizontal: 20,
      paddingVertical: 20,
      height: '100%',
      flex: 1,
    },
  });