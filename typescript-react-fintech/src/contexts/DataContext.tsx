import { createContext, type PropsWithChildren } from 'react';
import useFetch from '../hooks/useFetch';
import type IDataContext from '../interfaces/IDataContext';
import type ISales from '../interfaces/ISales';

export const DataContext = createContext<IDataContext | null>(null);

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const { data, loading, fetchError } = useFetch<ISales[]>(import.meta.env.VITE_BASE_URL);

  return <DataContext.Provider value={{ data, loading, fetchError }}>{children}</DataContext.Provider>;
};
