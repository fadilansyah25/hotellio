import React from 'react';

import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  count: number;
  setCount: (input: number) => void;
}

const Counter = ({count, setCount}: Props) => {
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const onChange = (text: string) => {
    const num = parseInt(text);
    if (!isNaN(num)) {
      setCount(num);
    }
  };

  return (
    <View style={styles.container}>
      <Icon name="people" size={24} style={styles.iconStyle} color="blue" />
      <TextInput
        textAlign="center"
        value={count.toString()}
        keyboardType="decimal-pad"
        style={{flex: 1}}
        onChangeText={onChange}
      />
      <View style={{paddingHorizontal: 10, height: 40}}>
        <TouchableOpacity onPress={increment}>
          <Icon name="arrow-drop-up" style={{fontSize: 20}} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement}>
          <Icon name="arrow-drop-down" style={{fontSize: 20}} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    backgroundColor: '#cfd4e8',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20
  },
  iconStyle: {
    padding: 10,
  },
});
