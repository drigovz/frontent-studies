import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import './Login.css';

function Login() {
  const { userIsLogged } = useContext(UserContext);

  // verificamos se o usuário já está logado, se sim, redireciona para a página de perfil
  // com o componente <Navigate /> do React Router Dom
  if (userIsLogged === true) {
    return <Navigate to="/account" />;
  }

  return (
    <>
      <section className="login-container">
        <div className="forms-container">
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default Login;
