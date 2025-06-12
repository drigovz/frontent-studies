import Sale from '../components/Sale';
import useDataContext from '../hooks/useDataContext';

const Sales = () => {
  const { data } = useDataContext();

  if (!data) return null;

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>
          <Sale sale={item} />
        </li>
      ))}
    </ul>
  );
};

export default Sales;
