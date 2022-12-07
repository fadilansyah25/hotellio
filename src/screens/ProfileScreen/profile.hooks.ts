import React from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const useProfile = () => {
  const user = auth().currentUser;
  const [data, setData] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<any | null>(null);

  React.useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .where('uid', '==', user?.uid)
      .onSnapshot(
        querySnapshot => {
          let data: any[] = [];

          querySnapshot.forEach(documentSnapshot => {
            data.push({
              id: documentSnapshot.id,
              ...documentSnapshot.data(),
            });
          });

          setData(data);
          setLoading(false);
        },
        error => {
          setError(error);
          setLoading(false);
        },
      );
    return () => subscriber();
  }, []);

  return {data, loading, error} as const;
};
