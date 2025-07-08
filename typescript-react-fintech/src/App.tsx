import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Sidenav from './components/Sidenav';
import { DataContextProvider } from './contexts/DataContext';
import './styles/style.css';
import { ApplicationRoutes } from './routes';

function App() {
  return (
    <>
      <DataContextProvider>
        <BrowserRouter>
          <div className="container">
            <h1>tests with jest</h1>
            <Sidenav />

            <main>
              <Header />
              <ApplicationRoutes />
            </main>
          </div>
        </BrowserRouter>
      </DataContextProvider>
    </>
  );
}

export default App;
