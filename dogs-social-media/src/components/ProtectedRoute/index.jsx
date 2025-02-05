import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const ProtectedRoute = ({ children }) => {
  const { userIsLogged } = useContext(UserContext);

  if (userIsLogged === true) {
    return children;
  } else if (userIsLogged === false || userIsLogged === undefined) {
    return <Navigate to="/login" />;
  } else {
    return <></>;
  }
};

export default ProtectedRoute;
