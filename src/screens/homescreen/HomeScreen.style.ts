import {StyleSheet} from 'react-native';
import {colors} from '../../const/colors';

export const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: colors.white,
    height: '100%',
  },
  titleDest: {
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 15,
    color: colors.secondary,
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    backgroundColor: colors.white,
    borderColor: colors.secondary,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 20,
  },
  topBarContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    elevation: 20,
  },
  containerText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.primary,
  },
  searchInput: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
    flex: 1,
    paddingLeft: 15,
  },
  flatlistContainer: {
    marginTop: 10,
    paddingBottom: 30,
    paddingLeft: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
