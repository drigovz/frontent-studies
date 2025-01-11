import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ApplicationRoutes } from './routes';
import { UserContextStorage } from './contexts/UserContext';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <UserContextStorage>
          <Header />
          <ApplicationRoutes />
          <Footer />
        </UserContextStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
