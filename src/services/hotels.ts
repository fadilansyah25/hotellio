import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {HotelDetailsTypes} from './hotelDetails.types';
import {HotelItem} from './hotelItem.types';

const headers = {
  'X-RapidAPI-Key': '6f220222b2msh46feae45f7b7ba1p1d5f33jsnb3ea8c3b96bc',
  'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com',
};

export const getRegions = async (
  query: string,
  locale: string = 'en_GB',
  domain: string = 'ID',
) => {
  try {
    const response = await axios.get(
      `https://hotels-com-provider.p.rapidapi.com/v2/regions`,
      {
        params: {locale: locale, query: query, domain: domain},
        headers: headers,
      },
    );

    const result = response.data as RegionRes;
    return result.data;
  } catch (error) {
    return error;
  }
};

export const getSearchHotel = async (
  regionId: number,
  checkin: string,
  checkout: string,
  guest: number,
  locale: string = 'en_GB',
  domain: string = 'ID',
  sortOrder: 'REVIEW' | 'PRICE_LOW_TO_HIGH' = 'REVIEW',
) => {
  try {
    const response = await axios.get(
      `https://hotels-com-provider.p.rapidapi.com/v2/hotels/search`,
      {
        params: {
          checkin_date: checkin,
          locale: locale,
          domain: domain,
          checkout_date: checkout,
          region_id: regionId,
          sort_order: sortOrder,
          adults_number: guest,
          page_number: 1,
        },
        headers: headers,
      },
    );

    return response.data?.properties as HotelItem.Property;
  } catch (error) {
    return error;
  }
};

export const useGetHotelDetails = ({
  hotel_id,
  locale = 'en_GB',
  domain = 'ID',
}: {
  hotel_id: string;
  locale?: string;
  domain?: string;
}) => {
  const [data, setData] = useState<HotelDetailsTypes.RootObject | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    axios
      .get('https://hotels-com-provider.p.rapidapi.com/v2/hotels/details', {
        params: {hotel_id, locale, domain},
        headers: headers,
      })
      .then(res => {
        setData(res.data as HotelDetailsTypes.RootObject);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return {data, loading, error} as const;
};

type RegionRes = {
  query: 'string';
  data: Array<Region>;
};

export type Region = {
  gaiaId: number;
  type: string;
  regionNames: {
    fullName: string;
    shortName: string;
    displayName: string;
    primaryDisplayName: string;
    secondaryDisplayName: string;
    lastSearchName: string;
  };
  essId: {
    sourceName: string;
    sourceId: string;
    coordinates: {
      lat: string;
      long: string;
    };
  };
  hierarchyInfo: {
    country: {name: string; isoCode2: string; isoCode3: string};
  };
};
