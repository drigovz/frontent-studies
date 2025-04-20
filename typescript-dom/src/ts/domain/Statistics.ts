import { TransactionWithValue } from "../@types/TransactionWithValue";
import Transaction from "../interfaces/Transaction";

export default class Statistics {
  private transactions: Transaction[];
  total: number;

  constructor(transactions: Transaction[]) {
    this.transactions = transactions;
    this.total = this.setTotal();
  }

  /**
   * utilizando o type predicate nós estamos indicando que o retorno dessa função
   * será true somente quando o tipo passado for o tipo 'TransactionWithValue'
   */
  private filterValue(
    transaction: Transaction
  ): transaction is TransactionWithValue {
    return transaction.value !== null;
  }

  private setTotal(): number {
    return this.transactions
      .filter(this.filterValue)
      .reduce((total, actualItem) => {
        return total + actualItem.value;
      }, 0);
  }
}
