import Header from './components/Header';
import Sidenav from './components/Sidenav';
import Home from './pages/Home';
import './styles/style.css';

function App() {
  return (
    <>
      <Sidenav />

      <main>
        <Header />
        <Home />
      </main>
    </>
  );
}

export default App;
