import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#F0F0F0',
    marginVertical: 20,
    marginHorizontal: 10,
    height: 40,
    flexDirection: "row",
    alignItems: "center"
  },
  closeInput: {
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  titleText: {
    fontWeight: '600',
    color: '#333',
    marginTop: 5,
    marginBottom: 3,
    fontSize: 14
  },
  text: {
    marginLeft: 2,
    color: '#999'
  },
  AutoCompleteResultItem: {
    padding: 10,
    marginHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#fff'
  },
});
