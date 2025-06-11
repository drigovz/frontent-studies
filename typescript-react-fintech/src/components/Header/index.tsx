import DateRage from '../DateRange';
import Months from '../Months';

const Header = () => {
  return (
    <>
      <header className="mb">
        <div className="mb">
          <DateRage />
        </div>

        <Months />
      </header>
    </>
  );
};

export default Header;
