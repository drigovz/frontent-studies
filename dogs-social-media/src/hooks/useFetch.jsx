import { useCallback } from 'react';
import { useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(false);

  // criamos a função de request dentro de um hook useCallback
  // para que essa funçãp não seja recriada toda vez que o componente renderizar.
  const request = useCallback(async (url, options) => {
    let response;
    let json;

    try {
      setFetchError(null);
      setLoading(true);

      response = await fetch(url, options);
      json = await response.json();
      if (!response.ok) {
        throw new Error(json.message);
      }
    } catch (error) {
      json = null; // garantir que quando tiver erro, não tenha dados na variável 'json'
      setFetchError(error.message);
    } finally {
      setData(json);
      setLoading(false);
    }

    return { response, json };
  }, []);

  return { data, loading, fetchError, request };
};

export default useFetch;
