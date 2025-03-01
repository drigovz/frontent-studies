import Photo from '../Photo';
import './style.css';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  // função para abrir o modal quando a foto é clicada
  // passamos a foto que está sendo clicada para o estado do modal
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className="feed-item" onClick={handleClick}>
      <Photo
        //loading="lazy"
        //data-src={photo.src}
        src={photo.src}
        title={photo.title}
        alt={photo.title}
      />
      <span>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
