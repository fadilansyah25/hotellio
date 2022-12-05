import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GenderOption } from '../utils/types';

export const fireBaseAuthLogin = ({email, password}: AuthParams) => {
  return auth().signInWithEmailAndPassword(email, password);
};

export const firebaseAuthRegister = ({email, password}: AuthParams) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

export const firebaseInputUser = ({
  uid,
  firstName,
  lastName,
  email,
  gender,
}: UserScheme) => {
  return firestore().collection('users').add({
    uid,
    firstName,
    lastName,
    email,
    gender,
  });
};

type AuthParams = {
  email: string;
  password: string;
};

type UserScheme = {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: GenderOption;
};
