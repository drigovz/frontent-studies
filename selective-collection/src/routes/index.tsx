import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

export const ApplicationRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
    </Routes>
  );
};
