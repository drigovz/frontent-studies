import { useState, useEffect } from 'react';
import UserHeaderNav from '../UserHeaderNav';
import { useLocation } from 'react-router-dom';
import './styles.css';

const UserHeader = () => {
  const [title, setTitle] = useState('');
  // useLocation retorna um objeto com a localização da pagina atual
  const location = useLocation();

  // modifica o titulo da pagina de acordo com a rota
  // e com o useEffect garantimos que o título seja atualizado
  // sempre que a rota mudar
  useEffect(() => {
    const { pathname } = location;

    switch (pathname) {
      case '/account/post':
        setTitle('Poste your photo');
        break;
      case '/account/statistics':
        setTitle('Statistics');
        break;
      default:
        setTitle('My account');
    }
  }, [location]);

  return (
    <>
      <header className="user-header">
        <h1 className="title">{title}</h1>
        <UserHeaderNav />
      </header>
    </>
  );
};

export default UserHeader;
