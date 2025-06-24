import type ISales from '../interfaces/ISales';

export type SaleItem = Omit<ISales, 'data'>;
