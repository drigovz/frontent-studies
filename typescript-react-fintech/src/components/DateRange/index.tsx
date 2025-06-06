import { useState } from 'react';
import Input from '../Input';

const DateRage = () => {
  const [initial, setInitial] = useState('');
  const [final, setFinal] = useState('');

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
        onChange={({ target }) => setInitial(target.value)}
        value={initial}
      />

      <Input
        id="final"
        label="Final"
        type="date"
        onChange={({ target }) => setFinal(target.value)}
        value={final}
      />
    </form>
  );
};

export default DateRage;
