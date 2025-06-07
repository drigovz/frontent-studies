import useDataContext from '../../hooks/useDataContext';
import Input from '../Input';

const DateRage = () => {
  const { dateInitial, setDateInitial, dateFinal, setDateFinal } = useDataContext();

  return (
    <form
      className="box flex"
      onSubmit={event => {
        event.preventDefault();
      }}
    >
      <Input
        id="initial"
        label="Initial"
        type="date"
        onChange={({ target }) => setDateInitial(target.value)}
        value={dateInitial}
      />

      <Input
        id="final"
        label="Final"
        type="date"
        onChange={({ target }) => setDateFinal(target.value)}
        value={dateFinal}
      />
    </form>
  );
};

export default DateRage;
