import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ApplicationRoutes } from './routes';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ApplicationRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
