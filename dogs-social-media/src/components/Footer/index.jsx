import { useState } from 'react';
import Dogs from '../../assets/dogs-footer.svg?react';
import './styles.css';
import { useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer">
      <Dogs />
      <p>Dogs. All rights reserved.</p>
      <p>
        <b>{currentYear}</b>
      </p>
    </footer>
  );
};

export default Footer;
