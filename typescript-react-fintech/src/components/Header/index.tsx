import { useEffect, useState } from 'react';
import DateRange from '../DateRange';
import Months from '../Months';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [title, setTitle] = useState('Summary');
  const localtion = useLocation();

  useEffect(() => {
    switch (localtion.pathname) {
      case '/':
        setTitle('Summary');
        document.title = 'Fintech | Summary';
        break;
      case '/sales':
        setTitle('Sales');
        document.title = 'Fintech | Sales';
        break;
      default:
        setTitle('Sale');
        document.title = 'Fintech | Sale';
    }
  }, [localtion]);

  return (
    <>
      <header className="mb">
        <div className="daterange mb">
          <DateRange />
          <h1 className="box bg-three">{title}</h1>
        </div>

        <Months />
      </header>
    </>
  );
};

export default Header;
