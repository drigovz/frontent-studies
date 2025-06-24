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

const dataGraphic = [
  {
    date: '2023-05-03',
    paid: 3000,
    pending: 2000,
    fail: 1000,
  },
  {
    date: '2023-05-04',
    paid: 6000,
    pending: 45000,
    fail: 2000,
  },
  {
    date: '2023-05-05',
    paid: 2000,
    pending: 3000,
    fail: 1500,
  },
];

const Graphic = ({ data }: { data: ISales[] }) => {
  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart width={400} height={400} data={dataGraphic}>
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis />
        <XAxis dataKey="date" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="paid" stroke="#8884d8" strokeWidth={3} />
        <Line type="monotone" dataKey="pending" stroke="#82ca9d" strokeWidth={3} />
        <Line type="monotone" dataKey="fail" stroke="#ff7300" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graphic;
