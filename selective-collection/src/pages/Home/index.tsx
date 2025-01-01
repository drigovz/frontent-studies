import React from 'react';
import { Section } from './styles';
import { FiLogIn } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

const Home: React.FC = () => {
  return (
    <Section>
      <div className="content">
        <header>
          <img src={logo} alt="Reciclagem" />
        </header>

        <main>
          <h1>Coleta Seletiva e reciclagem em geral.</h1>
          <p>Reciclagem de materiais diversos, tais como, papel, plástico, metal, pilhas e baterias, etc.</p>

          <a href="/create-location">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastrar novo local de coleta</strong>
          </a>
        </main>
      </div>
    </Section>
  );
};

export default Home;
