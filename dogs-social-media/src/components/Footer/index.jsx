import Dogs from '../../assets/dogs-footer.svg?react';
import './styles.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Dogs />
      <p>Dogs. All rights reserved.</p>
      <p>
        <b>{year}</b>
      </p>
    </footer>
  );
};

export default Footer;
