import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {useState, useEffect} from 'react';

export const useBookHistory = () => {
  const user = auth().currentUser;

  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const subscribe = firestore()
      .collection('hotelReservationData')
      .where('uid', '==', user?.uid)
      .onSnapshot(
        querSnapshot => {
          const dataResult: any[] = [];

          querSnapshot.forEach(documentSnapshot => {
            dataResult.push({
              id: documentSnapshot.id,
              ...documentSnapshot.data(),
            });
          });

          setData(dataResult);
          setIsLoading(false);
        },
        error => {
          setError(error);
          setIsLoading(false);
        },
      );
    return () => subscribe();
  }, []);

  return {data, error, isLoading} as const;
};
