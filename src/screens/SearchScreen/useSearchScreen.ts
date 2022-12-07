import React from 'react';
import dayjs from 'dayjs';
import {today, tomorrow} from '../../utils/getInitialDate';
import {useNavigation} from '@react-navigation/native';
import {HomeStackProps} from '../../navigation/StackNavigation/HomeStackScreen';
import {getRegions, Region} from '../../services/hotels';
import useDebounce from '../../hooks/useDebounce';

export const useSearchScreen = () => {
  const [query, setQuery] = React.useState('');
  const [checkin, setCheckin] = React.useState(today);
  const [checkout, setCheckout] = React.useState(tomorrow);
  const [guest, setGuest] = React.useState(1);
  const [data, setData] = React.useState<Array<Region>>([]);
  const navigation = useNavigation<HomeStackProps['navigation']>();
  const debounce = useDebounce<string>(query, 500);

  const onPressDestItem = (regionId: number, regionName: string) => {
    navigation.navigate('ListHotel', {
      regionId,
      checkIn: dayjs(checkin).format('YYYY-MM-DD'),
      checkOut: dayjs(checkout).format('YYYY-MM-DD'),
      guests: guest,
      regionName: regionName,
    });
  };

  React.useEffect(() => {
    if (query !== '') {
      (async () => {
        try {
          const data = await getRegions(query);
          setData(data as Array<Region>);
        } catch (error) {
          setData([]);
          console.error;
        }
      })();
    }
  }, [debounce]);

  return {
    navigation,
    query,
    data,
    setCheckin,
    setCheckout,
    setGuest,
    setQuery,
    onPressDestItem,
  } as const;
};
