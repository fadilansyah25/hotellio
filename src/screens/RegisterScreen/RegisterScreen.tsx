import React from 'react';
import {
  TextInput,
  SafeAreaView,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {AuthStackProps} from '../../navigation/StackNavigation/AuthStackScreen';
import Loader from '../../components/Loader/Loader';
import {Picker} from '@react-native-picker/picker';

import {colors} from '../../const/colors';
import {styles} from './RegisterScreen.style';
import {useRegisterScreen} from './useRegisterScreen';
import {genderOption} from '../../utils/types';

const RegisterScreen = (screenProps: AuthStackProps) => {
  const {
    loading,
    lastNameInputRef,
    emailInputRef,
    passwordInputRef,
    errorFirstName,
    errorLastName,
    errorEmail,
    errorPassword,
    errortext,
    handleSubmitButton,
    handleFirstNameInput,
    handleLastNameInput,
    handleEmailInput,
    handlePasswordInput,
    handleGender,
    handleToLogin,
  } = useRegisterScreen(screenProps);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../assets/companylogo.png')}
            style={{
              width: '50%',
              height: 100,
              resizeMode: 'contain',
              margin: 30,
            }}
          />
        </View>
        <KeyboardAvoidingView enabled>
          <View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={handleFirstNameInput}
                underlineColorAndroid="#f000"
                placeholder="Enter First Name"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                returnKeyType="next"
                onSubmitEditing={() =>
                  lastNameInputRef.current && lastNameInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            <Text style={{color: 'red', marginHorizontal: 35, fontSize: 12}}>
              {errorFirstName}
            </Text>
          </View>
          <View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={handleLastNameInput}
                underlineColorAndroid="#f000"
                placeholder="Enter Last Name"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                returnKeyType="next"
                ref={lastNameInputRef}
                onSubmitEditing={() =>
                  emailInputRef.current && emailInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            <Text style={{color: 'red', marginHorizontal: 35, fontSize: 12}}>
              {errorLastName}
            </Text>
          </View>
          <View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={handleEmailInput}
                underlineColorAndroid="#f000"
                placeholder="Enter Email"
                placeholderTextColor="#8b9cb5"
                keyboardType="email-address"
                returnKeyType="next"
                ref={emailInputRef}
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            <Text style={{color: 'red', marginHorizontal: 35, fontSize: 12}}>
              {errorEmail}
            </Text>
          </View>
          <View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={handlePasswordInput}
                underlineColorAndroid="#f000"
                placeholder="Enter Password"
                placeholderTextColor="#8b9cb5"
                returnKeyType="next"
                ref={passwordInputRef}
                secureTextEntry={true}
                blurOnSubmit={false}
              />
            </View>
            <Text style={{color: 'red', marginHorizontal: 35, fontSize: 12}}>
              {errorPassword}
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 35,
              marginTop: 10,
              marginBottom: 20,
              borderWidth: 1,
              height: 40,
              justifyContent: 'center',
              borderColor: '#dadae8',
            }}>
            <Picker selectedValue={'Man'} onValueChange={handleGender}>
              {genderOption.map(item => (
                <Picker.Item
                  label={item}
                  value={item}
                  style={styles.pickerItem}
                />
              ))}
            </Picker>
          </View>
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}>{errortext}</Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>Register</Text>
          </TouchableOpacity>
          <Text style={styles.loginTextStyle} onPress={handleToLogin}>
            Have an Account? Sign In
          </Text>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
