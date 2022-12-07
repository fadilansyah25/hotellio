import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {FirebaseParams} from './firebase.types';

export const fireBaseAuthLogin = ({
  email,
  password,
}: FirebaseParams.AuthParams) => {
  return auth().signInWithEmailAndPassword(email, password);
};

export const firebaseAuthRegister = ({
  email,
  password,
}: FirebaseParams.AuthParams) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

export const firebaseInputUser = ({
  uid,
  firstName,
  lastName,
  email,
  gender,
}: FirebaseParams.UserScheme) => {
  return firestore().collection('users').add({
    uid,
    firstName,
    lastName,
    email,
    gender,
  });
};

export const firebaseInputWatchListHotel = ({
  uid,
  hotel,
  hotelId,
}: FirebaseParams.InputWatchList) => {
  return firestore().collection('userWatchListHotel').add({
    uid,
    hotel,
    hotelId,
    createdAt: Date.now(),
  });
};

export const firebaseDeleteWatchList = async ({
  uid,
  hotelId,
}: FirebaseParams.DeleteWatchList) => {
  let query = firestore()
    .collection('userWatchListHotel')
    .where('uid', '==', uid)
    .where('hotelId', '==', hotelId);
  await query
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        doc.ref.delete().catch(err => console.log(err));
      });
    })
    .catch(error => console.error(error));
};

export const firebaseInputBooking = async ({
  checkInDate,
  checkOutDate,
  guest,
  hotel,
  price,
  totalPrice,
  nightAmount,
  uid,
}: FirebaseParams.HotelReservation) => {
  return firestore().collection('hotelReservationData').add({
    uid,
    checkInDate,
    checkOutDate,
    price,
    hotel,
    guest,
    totalPrice,
    nightAmount,
  });
};
