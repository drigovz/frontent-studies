import { useState } from 'react';
import './styles.css';

const Photo = ({ title, src }) => {
  // estado para controlar a visualização do skeleton na tela
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    // removemos a opacidade que o Css estava clocando (para dar fim a animação de carregamento)
    target.style.opacity = 1;
    // removemos o skeleton da tela
    setSkeleton(true);
  }

  return (
    <>
      <figure className="image-wrapper">
        {skeleton && <div className="skeleton"></div>}
        {/* nas tags <imgs /> existe um evento que acontece após o carregamento completo da imagem,
        esse evento se chama 'onLoad' */}
        <img onLoad={handleLoad} src={src} title={title} alt={title} />
      </figure>
    </>
  );
};

export default Photo;
