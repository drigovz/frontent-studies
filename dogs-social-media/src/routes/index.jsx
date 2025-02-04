import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import LoginCreate from '../pages/LoginCreate';
import LoginResetPassword from '../pages/LoginResetPassword';
import LoginLost from '../pages/LoginLost';
import LoginForm from '../pages/LoginForm';
import Account from '../pages/Account';

export const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="/" element={<Login />}>
        <Route path="login" element={<LoginForm />} />
        <Route path="login/create" element={<LoginCreate />} />
        <Route path="lost" element={<LoginLost />} />
        <Route path="reset" element={<LoginResetPassword />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
