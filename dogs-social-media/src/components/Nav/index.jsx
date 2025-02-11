import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import Dogs from '../../assets/dogs.svg?react';
import './styles.css';

const Nav = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="nav container">
      <NavLink to="/" end className="logo" aria-label="Dogs - Home">
        <Dogs />
      </NavLink>

      {user ? (
        <>
          <NavLink to="/account" className="login">
            {user.nome}
          </NavLink>
        </>
      ) : (
        <NavLink to="/login" className="login">
          Login / Create
        </NavLink>
      )}
    </nav>
  );
};

export default Nav;
