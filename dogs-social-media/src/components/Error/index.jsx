import './styles.css';

const Error = ({ error }) => {
  if (!error) return null;

  return <p className="error">{error}</p>;
};

export default Error;
