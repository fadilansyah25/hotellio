import {StyleSheet} from 'react-native';
import {colors} from '../../const/colors';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    elevation: 20,
  },
  barText: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.primary,
  },
  profileItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18,
    borderBottomWidth: 1,
  },
  buttonLogout: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  buttonLogoutText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  contentContainer: {
    height: '100%',
    justifyContent: 'space-between',
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grey,
    borderRadius: 100,
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  editProfile: {
    marginBottom: 50,
  },
});
