import { useEffect } from 'react';
import { getToken } from '../../utilities/utils';
import Error from '../Error';
import Loading from '../Loading';
import PhotoContent from '../PhotoContent';
import useFetch from '../../hooks/useFetch';
import { PHOTO_GET } from '../../api/photoEndpoints';
import './styles.css';

const FeedModal = ({ photo }) => {
  const { data, loading, fetchError, request } = useFetch();

  // carrega dados da foto assim que o componente é montado
  useEffect(() => {
    const token = getToken();

    const { url, options } = PHOTO_GET(photo.id, token);
    request(url, options);
  }, [photo, request]);

  return (
    <section className="modal">
      {fetchError && <Error error={fetchError} />}
      {loading && <Loading />}

      {data && <PhotoContent data={data} />}
    </section>
  );
};

export default FeedModal;
