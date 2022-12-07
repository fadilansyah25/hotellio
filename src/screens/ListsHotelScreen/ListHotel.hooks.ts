import React from 'react';
import {getSearchHotel} from '../../services/hotels';
import {HotelItem} from '../../services/hotelItem.types';

export const useGetSearchHotel = ({
  checkIn,
  checkOut,
  guests,
  regionId,
}: {
  regionId: number;
  checkIn: string;
  checkOut: string;
  guests: number;
}) => {
  const [data, setData] = React.useState<HotelItem.Property[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (data.length === 0) {
      (async () => {
        try {
          const data = await getSearchHotel(
            regionId,
            checkIn,
            checkOut,
            guests,
          );
          setData(data as HotelItem.Property[]);
          setIsLoading(false);
        } catch (error) {
          console.error;
          setIsLoading(false);
        }
      })();
    }
  }, []);

  return {data, isLoading} as const;
};
