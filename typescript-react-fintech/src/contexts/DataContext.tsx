import { createContext, useState, type PropsWithChildren } from 'react';
import useFetch from '../hooks/useFetch';
import type IDataContext from '../interfaces/IDataContext';
import type ISales from '../interfaces/ISales';

export const DataContext = createContext<IDataContext | null>(null);

const getNdaysAgo = (nDays: number): string => {
  const date = new Date();
  date.setDate(date.getDate() - nDays);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
};

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [dateInitial, setDateInitial] = useState(getNdaysAgo(30));
  const [dateFinal, setDateFinal] = useState(getNdaysAgo(0));

  const { data, loading, fetchError } = useFetch<ISales[]>(
    `${import.meta.env.VITE_BASE_URL}?inicio=${dateInitial}&fim=${dateFinal}`,
  );

  return (
    <DataContext.Provider
      value={{ data, loading, fetchError, dateInitial, setDateInitial, dateFinal, setDateFinal }}
    >
      {children}
    </DataContext.Provider>
  );
};
