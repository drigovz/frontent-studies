import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts';
import type ISales from '../../interfaces/ISales';
import type { SaleDay } from '../../@types/SaleDay';

const transformData = (data: ISales[]): SaleDay[] => {
  const saleDate = data.reduce((acc: { [key: string]: SaleDay }, sale) => {
    const dateKey = sale.data.split(' ')[0];

    if (!acc[dateKey]) {
      acc[dateKey] = {
        data: dateKey,
        pago: 0,
        processando: 0,
        falha: 0,
      };
    }

    acc[dateKey][sale.status] += sale.preco;

    return acc;
  }, {});

  return Object.values(saleDate);
};

const Graphic = ({ data }: { data: ISales[] }) => {
  const transformedData = transformData(data);

  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart width={400} height={400} data={transformedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis />
        <XAxis dataKey="data" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#8884d8" strokeWidth={3} />
        <Line type="monotone" dataKey="processando" stroke="#82ca9d" strokeWidth={3} />
        <Line type="monotone" dataKey="falha" stroke="#ff7300" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graphic;
