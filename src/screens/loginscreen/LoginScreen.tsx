import React from 'react';
import {
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import Loader from '../../components/Loader/Loader';

import {styles} from './LoginScreen.style';
import {useLoginScreen} from './useLoginScreen';

import {AuthStackProps} from '../../navigation/StackNavigation/AuthStackScreen';

const LoginScreen = (screenProps: AuthStackProps) => {
  const {
    loading,
    passwordInputRef,
    errorEmail,
    errorPassword,
    errortext,
    handleEmailInput,
    handlePasswordInput,
    handleToRegister,
    handleSubmitPress,
  } = useLoginScreen(screenProps);

  return (
    <SafeAreaView style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/companylogo.png')}
                style={styles.logoImage}
              />
            </View>
            <View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={handleEmailInput}
                  placeholder="Enter Email"
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  returnKeyType="next"
                  onSubmitEditing={() =>
                    passwordInputRef.current && passwordInputRef.current.focus()
                  }
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
                />
              </View>
              <Text style={styles.textWarning}>{errorEmail}</Text>
            </View>
            <View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={handlePasswordInput}
                  placeholder="Enter Password"
                  placeholderTextColor="#8b9cb5"
                  keyboardType="default"
                  ref={passwordInputRef}
                  onSubmitEditing={Keyboard.dismiss}
                  blurOnSubmit={false}
                  secureTextEntry={true}
                  underlineColorAndroid="#f000"
                  returnKeyType="next"
                />
              </View>
              <Text style={styles.SectionStyle}>{errorPassword}</Text>
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>{errortext}</Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>Sign In</Text>
            </TouchableOpacity>
            <Text style={styles.registerTextStyle} onPress={handleToRegister}>
              New Here? Register
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
