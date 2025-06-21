import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Sales from '../pages/Sales';
import Sale from '../pages/Sale';

export const ApplicationRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/sale/:id" element={<Sale />} />
    </Routes>
  );
};
