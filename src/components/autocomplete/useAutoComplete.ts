import React from 'react'
import {Destinations, getDestinations} from 'src/services/hotels';
import useDebounce from 'src/hooks/useDebounce';

export const useAutoComplete = () => {
    const [query, setQuery] = React.useState('');
    const debounceValue = useDebounce(query, 250);
    const [data, setData] = React.useState<Destinations[]>([]);
    const [dontSearch, setDontSearch] = React.useState(false);
  
    React.useEffect(() => {
      (async () => {
        if (query === '') {
          setData([]);
        } else {
          if (!dontSearch) {
            const data = await getDestinations(query);
            setData(data as Destinations[]);
          }
        }
      })();
    }, [debounceValue]);
    
    const selectDest = (name: string) => {
      setQuery(name);
      setData([]);
      setDontSearch(true);
    };
  
    const onChange = (text: string) => {
      setQuery(text);
      setDontSearch(false);
    };

    return {query, setQuery, data, setData, selectDest, onChange} as const
}