import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import type { SaleItem } from '../@types/SaleItem';
import Loading from '../components/Loading';

const Sale = () => {
  const { id } = useParams();
  const { data, loading } = useFetch<SaleItem>(`${import.meta.env.VITE_BASE_URL}/${id}`);

  if (data === null) return null;

  if (loading) return <Loading />;

  return (
    <section>
      <div className="box mb">
        ID: <b>{data.id}</b>
      </div>
      <div className="box mb">
        Name: <b>{data.id}</b>
      </div>
      <div className="box mb">
        Value: <b>{data.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</b>
      </div>
      <div className="box mb">
        Status: <b>{data.status}</b>
      </div>
      <div className="box mb">
        Pagamento: <b>{data.pagamento}</b>
      </div>
    </section>
  );
};

export default Sale;
