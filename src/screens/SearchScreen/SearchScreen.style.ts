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
    selectDate: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,
    },
    autoCompleteCont: {
      paddingHorizontal: 20,
      paddingVertical: 20,
      height: '100%',
      flex: 1,
    },
    container: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
    },
  });