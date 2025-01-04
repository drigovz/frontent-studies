import { NavLink } from 'react-router-dom';
import Dogs from '../../assets/dogs.svg?react';
import './styles.css';

const Nav = () => {
  return (
    <nav className="nav container">
      <NavLink to="/" end className="logo" aria-label="Dogs - Home">
        <Dogs />
      </NavLink>

      <NavLink to="/login" className="login">
        Login / Criar
      </NavLink>
    </nav>
  );
};

export default Nav;
