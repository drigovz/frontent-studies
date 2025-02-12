import { useContext, useEffect, useState } from 'react';
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import Feed from '../../assets/feed.svg?react';
import Statistics from '../../assets/statistics.svg?react';
import Add from '../../assets/add.svg?react';
import Logout from '../../assets/logout.svg?react';
import './styles.css';
import useMedia from '../../hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();

  // utilizamos o hook useMedia para verificar se a tela é mobile ou não
  const isMobile = useMedia('(max-width: 40rem)');

  // estado para verificar se o menu mobile está ativo ou não
  const [mobileMenuIsActive, setMobileMenu] = useState(false);

  // criamos um efeito para desativar o menu mobile quando o usuário clicar em algum link
  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    // limpa o token e realiza o logout do usuário
    userLogout();
    // e na sequencia, redireciona o usuário para a página de login
    navigate('/login');
  }

  return (
    <>
      {/* botão para abrir o menu mobile */}
      {isMobile && (
        <button
          aria-label="Menu"
          className={`mobile-menu-button ${mobileMenuIsActive && 'mobile-menu-button-active'}`}
          onClick={() => {
            setMobileMenu(!mobileMenuIsActive);
          }}
        ></button>
      )}

      {/* adiciona ou remove calsses com base nos estados de ativou ou inativo dos menus mobile */}
      <nav
        className={`${isMobile ? 'user-header-nav-mobile' : 'user-header-nav'}
        ${mobileMenuIsActive && 'user-header-nav-mobile-active'}`}
      >
        <NavLink end to="/account">
          <Feed />
          {isMobile && 'Feed'}
        </NavLink>
        <NavLink to="/account/statistics">
          <Statistics />
          {isMobile && 'Statistics'}
        </NavLink>
        <NavLink to="/account/post">
          <Add />
          {isMobile && 'Add Photos'}
        </NavLink>
        <button onClick={handleLogout}>
          <Logout />
          {isMobile && 'Logout'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
