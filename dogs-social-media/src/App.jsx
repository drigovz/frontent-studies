import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ApplicationRoutes } from './routes';
import { UserContextStorage } from './contexts/UserContext';
import './App.css';

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <UserContextStorage>
          <main id="app-main">
            <Header />
            <ApplicationRoutes />
            <Footer />
          </main>
        </UserContextStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
