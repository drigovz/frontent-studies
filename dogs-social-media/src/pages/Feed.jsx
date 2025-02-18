import { useState } from 'react';
import FeedModal from '../components/FeedModal';
import FeedPhotos from '../components/FeedPhotos';

const Feed = () => {
  // criamos um estado reativo para manipular a foto que está aberta no modal
  const [modalPhoto, setModalPhoto] = useState(null);

  return (
    <>
      {/* passamos a função que irá atualizar o estado da foto que está
      selecionada no momento para o componente FeedPhotos */}
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </>
  );
};

export default Feed;
