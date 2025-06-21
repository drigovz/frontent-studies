import { useState } from 'react';
import DateRage from '../DateRange';
import Months from '../Months';

const Header = () => {
  const [title, setTitle] = useState('Summary');

  return (
    <>
      <header className="mb">
        <div className="daterange mb">
          <DateRage />
          <h1 className="box bg-three">{title}</h1>
        </div>

        <Months />
      </header>
    </>
  );
};

export default Header;
