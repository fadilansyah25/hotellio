import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image} from 'react-native';
import {RootStackProps} from '../../App';
import {colors} from '../../const/colors';
import auth from '@react-native-firebase/auth';

const SplashScreen = ({navigation}: RootStackProps) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      const user = auth().currentUser;

      navigation.replace(!user ? 'Auth' : 'Main');
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/companylogo.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color={colors.primary}
        size="small"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
