import { useEffect } from 'react';
import { getToken } from '../../utilities/utils';
import Error from '../Error';
import Loading from '../Loading';
import PhotoContent from '../PhotoContent';
import useFetch from '../../hooks/useFetch';
import { PHOTO_GET } from '../../api/photoEndpoints';
import './styles.css';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, loading, fetchError, request } = useFetch();

  // carrega dados da foto assim que o componente é montado
  useEffect(() => {
    const token = getToken();

    const { url, options } = PHOTO_GET(photo.id, token);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    /*
      event.target = é o local exato onde o usuário clicou
      event.currentTarget = é o elemento pai (ou seja, é a section 'modal')
      dessa forma, quando target e currentTarget foram iguais, significa que
      o usuário clicou fora do modal, e devemos fechar esse modal
     */
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <section className="modal" onClick={handleOutsideClick}>
      {fetchError && <Error error={fetchError} />}
      {loading && <Loading />}

      {data && <PhotoContent data={data} />}
    </section>
  );
};

export default FeedModal;
