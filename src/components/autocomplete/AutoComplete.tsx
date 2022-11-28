import React from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  ListRenderItem,
} from 'react-native';
import {Destinations} from 'src/services/hotels';

import {styles as styles} from './AutoComplete.style';
import {useAutoComplete} from './useAutoComplete';

const AutoComplete = () => {
  const {query, setQuery, data, onChange, selectDest} = useAutoComplete();

  const renderItem: ListRenderItem<Destinations> = ({item}) => {
    return (
      <TouchableOpacity onPress={() => selectDest(item?.name)}>
        <View style={styles.AutoCompleteResultItem}>
          <Text style={styles.titleText}>{item?.name}</Text>
          <Text style={styles.text}>{item?.caption}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={styles.searchContainer}>
        <TextInput
          style={{fontSize: 14, paddingLeft: 10, flexGrow: 1}}
          value={query}
          placeholder="Cities"
          onChangeText={onChange}
        />
        <TouchableOpacity
          style={styles.closeInput}
          onPress={() => setQuery('')}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>X</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={data} renderItem={renderItem}></FlatList>
    </>
  );
};

export default AutoComplete;
