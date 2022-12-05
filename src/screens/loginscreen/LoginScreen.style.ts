import {StyleSheet} from 'react-native';
import {colors} from '../../const/colors';

export const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
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
    marginTop: 30,
    marginBottom: 25,
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
  registerTextStyle: {
    color: colors.primary,
    textAlign: 'center',
    fontSize: 14,
    textDecorationLine: 'underline',
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 20,
  },
  textWarning: {
    color: 'red',
    marginHorizontal: 35,
    fontSize: 12,
  },
  logoImage: {
    width: '50%',
    height: 100,
    resizeMode: 'contain',
    margin: 30,
  },
});
