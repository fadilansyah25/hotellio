import React from 'react';
import {Text, View, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {RootStackProps} from '../../App';

export default function SettingsScreen({navigation}: RootStackProps) {
  const handleLogOut = () => {
    auth()
      .signOut()
      .then(() => navigation.replace('Auth'));
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
      <Button title="log out" onPress={handleLogOut} />
    </View>
  );
}
