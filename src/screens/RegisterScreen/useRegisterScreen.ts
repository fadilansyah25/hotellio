import React, {useState, createRef} from 'react';
import {TextInput} from 'react-native';
import {
  emailFormat,
  firstNameFormat,
  lastNameFormat,
  passwordFormat,
} from '../../utils/regexFormat';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {AuthStackProps} from '../../navigation/StackNavigation/AuthStackScreen';
import { GenderOption } from '../../utils/types';

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

  const handleSubmitButton = () => {
    setErrortext('');
    setLoading(true);
    if (
      errorEmail !== '' ||
      errorPassword !== '' ||
      errorFirstName !== '' ||
      errorLastName !== ''
    ) {
      setErrortext('Please enter a valid data');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(userEmail, userPassword)
      .then(userCredentials => {
        if (userCredentials.user) {
          userCredentials.user
            .updateProfile({
              displayName: firstName,
            })
            .then(user => {
              console.log(user, 'user added');
            })
            .catch(error => {
              setLoading(false);
              console.error(error);
            });

          firestore()
            .collection('users')
            .add({
              uid: userCredentials.user.uid,
              firstName,
              lastName,
              email: userEmail,
              gender: userGender,
            })
            .then(() => {
              setLoading(false);
              console.log('User added!');
            })
            .catch(err => {
              setLoading(false);
              console.error(err);
            });
        }
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setLoading(false);
          console.error('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          setLoading(false);
          console.error('That email address is invalid!');
        }
        setLoading(false);
        console.error(error);
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

  const handleGender = (gender: GenderOption) => setUserGender(gender)

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
    handleSubmitButton,
    handleFirstNameInput,
    handleLastNameInput,
    handleEmailInput,
    handlePasswordInput,
    handleGender,
    handleToLogin
  } as const;
};
