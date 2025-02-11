import { useContext, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import Feed from '../../assets/feed.svg?react';
import Statistics from '../../assets/statistics.svg?react';
import Add from '../../assets/add.svg?react';
import Logout from '../../assets/logout.svg?react';
import './styles.css';

const UserHeaderNav = () => {
  const { isMobile, setIsMobile } = useState(null);
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();

  function handleMobile() {
    setIsMobile(null);
  }

  function handleLogout() {
    // limpa o token e realiza o logout do usuário
    userLogout();
    // e na sequencia, redireciona o usuário para a página de login
    navigate('/login');
  }

  return (
    <>
      <nav className="user-header-nav">
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
