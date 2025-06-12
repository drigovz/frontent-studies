import type ISales from '../../interfaces/ISales';

const Sale = ({ sale }: { sale: ISales }) => {
  return (
    <div className="sale box">
      <a href="">{sale.id}</a>
      <div>{sale.nome}</div>
      <div>{sale.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</div>
    </div>
  );
};

export default Sale;
