import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import LoginCreate from '../pages/LoginCreate';
import LoginResetPassword from '../pages/LoginResetPassword';
import LoginLost from '../pages/LoginLost';
import LoginForm from '../pages/LoginForm';
import Account from '../pages/Account';
import ProtectedRoute from '../components/ProtectedRoute';

export const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Login />}>
        <Route path="login" element={<LoginForm />} />
        <Route path="login/create" element={<LoginCreate />} />
        <Route path="login/forgot-password" element={<LoginLost />} />
        <Route path="login/reset" element={<LoginResetPassword />} />
      </Route>
      <Route
        path="account"
        element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        }
      ></Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
