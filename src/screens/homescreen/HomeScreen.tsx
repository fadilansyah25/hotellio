import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AutoComplete from 'src/components/autocomplete/AutoComplete';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <AutoComplete/>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
}
