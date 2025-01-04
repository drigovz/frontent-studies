import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="container">
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
