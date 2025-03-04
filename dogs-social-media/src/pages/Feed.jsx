import { useState, useEffect } from 'react';
import BrowserTab from '../components/BrowserTab';
import FeedModal from '../components/FeedModal';
import FeedPhotos from '../components/FeedPhotos';

const Feed = () => {
  // criamos um estado reativo para manipular a foto que está aberta no modal
  const [modalPhoto, setModalPhoto] = useState(null);

  // estado para a paginação de fotos
  const [pages, setPages] = useState([1]);

  // esse estado é o que indica se ainda tem página para ser scrolada ou não, ou seja,
  // deve chamar a API ou não
  const [infinite, setInfinite] = useState(true);

  // scroll infinito
  useEffect(() => {
    // variavel utilizada para controlar quando o scroll deve chamar a API
    let timer = false;

    function infiniteScroll() {
      // só executa a função se ainda tiver página pra ser scrolada
      if (infinite) {
        // total de scroll que foi dado na página
        const scroll = window.scrollY;
        // altura total da página
        const height = document.body.offsetHeight - window.innerHeight;

        // adicionamos o efeito de scroll se o scroll for maior que 75% do tamanho da página
        if (scroll > height * 0.75 && !timer) {
          // realiza a incrementação de mais um item no array da paginação a cada scroll
          setPages(pages => [...pages, pages.length + 1]);
          timer = true;

          // após 500ms tá liberado para chamar a API novamente, para não renderizar a página toda a hora
          setTimeout(() => {
            timer = false;
          }, 500);
        }
      }
    }

    // evento de scroll da rodinha do mouse
    window.addEventListener('wheel', infiniteScroll);
    // evento de scroll
    window.addEventListener('scroll', infiniteScroll);

    // sempre temos que limpar esse evento no final do efeito
    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infinite]);

  return (
    <>
      <BrowserTab title="Feed" description="Dogs social media" />

      {/* passamos a função que irá atualizar o estado da foto que está
      selecionada no momento para o componente FeedPhotos */}
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}

      {/* loop pela paginação das fotos */}
      {pages &&
        pages.map(page => (
          // passamos o setInfinite para atualizar o estado assim que não tiver mais página para ser scrolada
          <FeedPhotos key={page} page={page} setModalPhoto={setModalPhoto} setInfinite={setInfinite} />
        ))}
    </>
  );
};

export default Feed;
