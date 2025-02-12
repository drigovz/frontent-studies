import { useEffect, useState } from 'react';

const useMedia = media => {
  const [match, setMatch] = useState(null);

  // utilizamos o hook useEffect para executar uma função toda a vez que o valor de 'media' mudar
  useEffect(() => {
    function changeMatch() {
      if (media === null || media === undefined || media === '') return;

      // função para verificar o tamanho da tela
      // essa função retorna um objeto com a propriedade chamada 'matches'
      // que retorna true ou false para o tamanho da tela especificado no media query que passamos
      // para o nosso hook
      const { matches } = window.matchMedia(media);
      // setamos o valor do estado 'match' para o valor retornado pela função
      setMatch(matches);
    }

    // adicionamos no evento 'resize' (ou seja, sempre que a tela mudar de tamanho)
    // do objeto window a função 'changeMatch'
    window.addEventListener('resize', changeMatch);

    // sempre que adicionamos um evento, é necessário remover ele quando o componente é desmontado
    // para evitar problemas de performance, para fazer isso
    // basta executarmos a função 'removeEventlistener' no return da função/hook
    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [media]);

  return match;
};

export default useMedia;
