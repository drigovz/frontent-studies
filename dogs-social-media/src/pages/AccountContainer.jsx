import { Outlet } from 'react-router-dom';
import UserHeader from '../components/UserHeader';

const AccountContainer = () => {
  return (
    <>
      <section className="container">
        <UserHeader />
        <Outlet />
      </section>
    </>
  );
};

export default AccountContainer;
