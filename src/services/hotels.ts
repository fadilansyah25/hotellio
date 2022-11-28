import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://hotels-com-provider.p.rapidapi.com/v1/destinations/search',
  headers: {
    'X-RapidAPI-Key': '30d5052e18msh220c9f1c40fb7a1p1fe981jsn9eed10efcd5e',
    'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com',
  },
};

export const getDestinations = async (destinations: string) => {
  try {
    const res = await axios.get(options.url, {
      headers: options.headers,
      params: {query: destinations, currency: 'IDR', locale: 'in_ID'},
    });

    return mergeResultDes(res.data)
  } catch (error) {
    console.error(error);
  }
};

export type Destinations = {
  caption: string;
  destinationId: string;
  geoId: string;
  landmarkCityDestinationId: string;
  latitude: number;
  longitude: number;
  name: string;
  type: string;
};

type Result = {
  query: string;
  suggestions: Array<{
    group: string;
    entities: Array<Destinations>;
  }>;
};

const mergeResultDes = (result: Result) => {
  let destinations: Array<Destinations> = [];
  if (result.suggestions) {
    result.suggestions.forEach(item => {
      item.entities.forEach(item => {
        item.caption = item.caption.replace(/<\/?span[^>]*>/g, '');
      });

      destinations = [...destinations, ...item.entities];
    });
  }

  return destinations;
};
