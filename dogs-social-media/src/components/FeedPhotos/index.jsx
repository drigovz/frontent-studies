import { useEffect } from 'react';
import { PHOTOS_GET } from '../../api/photoEndpoints';
import FeedPhotosItem from '../FeedPhotosItem';
import Error from '../Error';
import Loading from '../Loading';
import useFetch from '../../hooks/useFetch';
import './style.css';

const FeedPhotos = ({ setInfinite, page, setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  // useEffect para já carregar as fotos quando entrar na página
  useEffect(() => {
    async function fetchPhotos() {
      const total = 3;
      const { url, option } = PHOTOS_GET({ page, total, user: 0 });
      const { response, json } = await request(url, option);

      // verificamos se temos um response OK e quando esse array de fotos (json)
      // for menor que 3, nós atualizamos o estado 'infite' através do setInfinite
      // informando que não deve mais chamar a API
      if (response && response.ok && json.length < 3) {
        setInfinite(false);
      }
    }

    fetchPhotos();
  }, [request, page, setInfinite]);

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
