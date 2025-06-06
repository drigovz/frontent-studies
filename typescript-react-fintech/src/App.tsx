import Header from './components/Header';
import Sidenav from './components/Sidenav';
import { DataContextProvider } from './contexts/DataContext';
import Home from './pages/Home';
import './styles/style.css';

function App() {
  return (
    <>
      <DataContextProvider>
        <Sidenav />

        <main className="container">
          <Header />
          <Home />
        </main>
      </DataContextProvider>
    </>
  );
}

export default App;
