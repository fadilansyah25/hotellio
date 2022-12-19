import React, {useState, createRef} from 'react';
import {TextInput} from 'react-native';
import {
  emailFormat,
  firstNameFormat,
  lastNameFormat,
  passwordFormat,
} from '../../utils/regexFormat';

import {AuthStackProps} from '../../navigation/StackNavigation/AuthStackScreen';
import {GenderOption} from '../../utils/types';
import {firebaseAuthRegister, firebaseInputUser} from '../../services/firebase';

export const useRegisterScreen = ({navigation}: AuthStackProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userGender, setUserGender] = useState<GenderOption>('Man');
  const [errorFirstName, setErrorFirstName] = useState('');
  const [errorLastName, setErrorLastName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const lastNameInputRef = createRef<TextInput>();
  const emailInputRef = createRef<TextInput>();
  const passwordInputRef = createRef<TextInput>();

  const handleSubmitButton = async () => {
    setErrortext('');
    setLoading(true);
    if (
      errorEmail == '' ||
      errorPassword == '' ||
      errorFirstName == '' ||
      errorLastName == ''
    ) {
      setErrortext('Please enter a valid data');
      setLoading(false);
      return;
    }

    await firebaseAuthRegister({email: userEmail, password: userPassword})
      .then(async credential => {
        if (credential) {
          await credential.user
            .updateProfile({displayName: firstName})
            .catch(error => {
              setLoading(false);
              setErrortext(error.code);
            });
          await firebaseInputUser({
            uid: credential.user.uid,
            email: userEmail,
            firstName,
            lastName,
            gender: userGender,
          }).catch(error => {
            setLoading(false);
            setErrortext(error.code);
          });
        }
      })
      .catch(error => {
        setLoading(false);
        setErrortext(error.code);
      });
  };

  const handleFirstNameInput = (firstName: string) => {
    if (!firstName.match(firstNameFormat)) {
      setErrorFirstName('Please enter a valid first name: eg. John');
    } else {
      setErrorFirstName('');
      setFirstName(firstName);
    }
  };

  const handleLastNameInput = (lastName: string) => {
    if (!lastName.match(lastNameFormat)) {
      setErrorLastName('Please enter a valid last name: eg. Martin');
    } else {
      setErrorLastName('');
      setLastName(lastName);
    }
  };

  const handleEmailInput = (emailText: string) => {
    if (!emailText.match(emailFormat)) {
      setErrorEmail('Please enter a valid email: eg. example@domain.com');
    } else {
      setErrorEmail('');
      setUserEmail(emailText);
    }
  };

  const handlePasswordInput = (passwordText: string) => {
    if (!passwordText.match(passwordFormat)) {
      setErrorPassword(
        'Invalid: Minimum eight characters, at least one letter and one number',
      );
    } else {
      setErrorPassword('');
      setUserPassword(passwordText);
    }
  };

  const handleGender = (gender: GenderOption) => setUserGender(gender);

  const handleToLogin = () => navigation.navigate('Login');

  return {
    loading,
    lastNameInputRef,
    emailInputRef,
    passwordInputRef,
    errorFirstName,
    errorLastName,
    errorEmail,
    errorPassword,
    errortext,
    userGender,
    handleSubmitButton,
    handleFirstNameInput,
    handleLastNameInput,
    handleEmailInput,
    handlePasswordInput,
    handleGender,
    handleToLogin,
  } as const;
};
