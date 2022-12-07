import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';

import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import MainTab from './navigation/TabNavigation/MainTab';
import SplashScreen from './screens/SplashScreen/SplashScreen';
import AuthStackScreen from './navigation/StackNavigation/AuthStackScreen';

import auth from '@react-native-firebase/auth';

export type RootStackParamameterList = {
  Splash: undefined;
  Auth: undefined;
  Main: undefined;
};

export type RootStackProps = NativeStackScreenProps<RootStackParamameterList>;

const RootStack = createNativeStackNavigator<RootStackParamameterList>();

export const App: React.FC = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [user]);

  if (initializing) return null;

  return (
    <BottomSheetModalProvider>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={'Splash'}>
          <RootStack.Screen name="Splash" component={SplashScreen} />
          {!user ? (
            <RootStack.Screen
              name="Auth"
              component={AuthStackScreen}
              options={{
                animationTypeForReplace: !user ? 'pop' : 'push',
              }}
            />
          ) : (
            <RootStack.Screen name="Main" component={MainTab} />
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </BottomSheetModalProvider>
  );
};

export default App;
