import PropTypes from 'prop-types';
import { useEffect } from 'react';

// componente que irá modificar o title da aba do browser
// e irá modificar também a description de cada página, para melhorar o CEO
const BrowserTab = props => {
  useEffect(() => {
    document.title = `${props.title} | Dogs`;
    document.querySelector("meta[name='description']").setAttribute('content', props.description);
  }, [props]);

  return <></>;
};

// definição de valor padrão
BrowserTab.defaultProps = {
  description: '',
};

// definição de tipagem
BrowserTab.prototypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default BrowserTab;
