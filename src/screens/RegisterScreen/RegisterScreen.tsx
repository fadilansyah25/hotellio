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
            style={styles.imageLogo}
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
            <Text style={styles.textWarning}>
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
            <Text style={styles.textWarning}>
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
            <Text style={styles.textWarning}>
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
            <Text style={styles.textWarning}>
              {errorPassword}
            </Text>
          </View>
          <View
            style={styles.pickerContainer}>
            <Picker selectedValue={'Man'} onValueChange={handleGender}>
              {genderOption.map((item, id) => (
                <Picker.Item
                  key={id}
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
