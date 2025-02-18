import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import LoginCreate from '../pages/LoginCreate';
import LoginResetPassword from '../pages/LoginResetPassword';
import LoginLost from '../pages/LoginLost';
import LoginForm from '../pages/LoginForm';
import ProtectedRoute from '../components/ProtectedRoute';
import Feed from '../pages/Feed';
import UserPhotoPost from '../pages/UserPhotoPost';
import UserStatistics from '../pages/UserStatistics';
import AccountContainer from '../pages/AccountContainer';

export const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route path="/" element={<Login />}>
        <Route path="login" element={<LoginForm />} />
        <Route path="login/create" element={<LoginCreate />} />
        <Route path="login/forgot-password" element={<LoginLost />} />
        <Route path="login/reset" element={<LoginResetPassword />} />
      </Route>

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AccountContainer />
          </ProtectedRoute>
        }
      >
        <Route path="account" element={<Feed />} />
        <Route path="account/post" element={<UserPhotoPost />} />
        <Route path="account/statistics" element={<UserStatistics />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
