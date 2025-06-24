import { NavLink } from 'react-router-dom';
import type ISales from '../../interfaces/ISales';

const Sale = ({ sale }: { sale: ISales }) => {
  return (
    <div className="sale box">
      <NavLink to={`${sale.id}`}>{sale.id}</NavLink>
      <div>{sale.nome}</div>
      <div>{sale.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</div>
    </div>
  );
};

export default Sale;
