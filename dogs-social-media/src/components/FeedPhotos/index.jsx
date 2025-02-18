import { useEffect } from 'react';
import { PHOTOS_GET } from '../../api/photoEndpoints';
import FeedPhotosItem from '../FeedPhotosItem';
import Error from '../Error';
import Loading from '../Loading';
import useFetch from '../../hooks/useFetch';
import './style.css';

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  // useEffect para já carregar as fotos quando entrar na página
  useEffect(() => {
    async function fetchPhotos() {
      const { url, option } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, option);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;

  if (loading) return <Loading />;

  if (data) {
    return (
      <>
        <ul className="feed-container animeLeft">
          {data.map(photo => (
            <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />
          ))}
        </ul>
      </>
    );
  } else return null;
};

export default FeedPhotos;
