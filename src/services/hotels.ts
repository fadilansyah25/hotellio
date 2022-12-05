import axios from 'axios';

const headers = {
  'X-RapidAPI-Key': '30d5052e18msh220c9f1c40fb7a1p1fe981jsn9eed10efcd5e',
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

    return response.data?.properties;
  } catch (error) {
    return error;
  }
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
