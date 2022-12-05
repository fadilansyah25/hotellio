import auth from '@react-native-firebase/auth'; 

export const fireBaseAuthLogin = async ({email, password}: LoginParams) => {
    return auth().signInWithEmailAndPassword(email, password)
};

type LoginParams = {
  email: string;
  password: string;
};
