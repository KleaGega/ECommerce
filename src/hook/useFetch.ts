import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../interfaces/Product';

const useFetch = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response.data);
        setData(response.data); 
        setLoading(false); 
      } catch (err: any) {
        setError(err.message || 'An error occurred'); 
        setLoading(false); 
      }
    };
    fetchData(); 
  }, []); 

  return { data, setData, loading, error }; 
};

export default useFetch;