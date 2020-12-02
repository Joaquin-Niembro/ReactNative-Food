import {useEffect, useState} from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([]);
  const [mounted, setMounted] = useState(true);
  useEffect(() => {
    const Fetch = async () => {
      if (mounted === true) {
        searchApi('pasta');
      }
    };
    Fetch();
    return () => {
      setMounted(false);
    };
  }, []);
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      console.log(error);
    }
  };
  return [searchApi, results]
}