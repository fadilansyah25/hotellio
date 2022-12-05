import {StyleSheet} from 'react-native';
import {colors} from '../../const/colors';

export const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: colors.primary,
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: colors.dark,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
  loginTextStyle: {
    color: colors.primary,
    textAlign: 'center',
    fontSize: 14,
    textDecorationLine: 'underline',
    alignSelf: 'center',
    padding: 10,
  },
  pickerItem: {
    fontSize: 14,
    color: colors.dark,
  },
  pickerContainer: {
    marginHorizontal: 35,
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    borderColor: '#dadae8',
  },
  textWarning: {
    color: 'red',
    marginHorizontal: 35,
    fontSize: 12,
  },
  imageLogo: {
    width: '50%',
    height: 100,
    resizeMode: 'contain',
    margin: 30,
  },
});
