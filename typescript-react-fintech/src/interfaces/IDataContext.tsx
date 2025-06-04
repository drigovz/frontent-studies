import type ISales from './ISales';

export default interface IDataContext {
  data: ISales[] | null;
  loading: boolean;
  fetchError: string | null;
}
