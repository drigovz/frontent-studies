import type React from 'react';
import type ISales from './ISales';

export default interface IDataContext {
  data: ISales[] | null;
  loading: boolean;
  fetchError: string | null;
  dateInitial: string;
  setDateInitial: React.Dispatch<React.SetStateAction<string>>;
  dateFinal: string;
  setDateFinal: React.Dispatch<React.SetStateAction<string>>;
}
