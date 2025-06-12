import Header from './components/Header';
import Sidenav from './components/Sidenav';
import { DataContextProvider } from './contexts/DataContext';
import Home from './pages/Home';
import Sales from './pages/Sales';
import './styles/style.css';

function App() {
  return (
    <>
      <DataContextProvider>
        <div className="container">
          <Sidenav />

          <main>
            <Header />
            <Home />
            <Sales />
          </main>
        </div>
      </DataContextProvider>
    </>
  );
}

export default App;
