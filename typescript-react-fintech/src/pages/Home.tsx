import Graphic from '../components/Graphic';
import useDataContext from '../hooks/useDataContext';

const Home = () => {
  const { data } = useDataContext();

  if (!data) return null;

  return (
    <>
      <section>
        <div className="home flex mb">
          <div className="box">
            <h2>Vendas</h2>
            <span>
              {data
                .filter(item => item.status !== 'falha')
                .reduce((total, item) => total + item.preco, 0)
                .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          </div>

          <div className="box">
            <h2>Recebido</h2>
            <span>
              {data
                .filter(item => item.status === 'pago')
                .reduce((total, item) => total + item.preco, 0)
                .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          </div>

          <div className="box">
            <h2>Processando</h2>
            <span>
              {data
                .filter(item => item.status === 'processando')
                .reduce((total, item) => total + item.preco, 0)
                .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          </div>
        </div>

        <div className="box mb">
          <Graphic data={data} />
        </div>
      </section>
    </>
  );
};

export default Home;
