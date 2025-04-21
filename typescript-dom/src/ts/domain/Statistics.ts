import { TransactionWithValue } from "../@types/TransactionWithValue";
import CountList from "../interfaces/CountList";
import Transaction from "../interfaces/Transaction";
import { countBy } from "../utils/utilities.js";

export default class Statistics {
  private transactions: Transaction[];
  total: number;
  payments: CountList;
  status: CountList;

  constructor(transactions: Transaction[]) {
    this.transactions = transactions;
    this.total = this.setTotal();
    this.payments = this.setPayments();
    this.status = this.setStatus();
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

  private setPayments(): CountList {
    // desestruturando 'paymentType' de dentro do objeto 'Transaction'
    return countBy(this.transactions.map(({ paymentType }) => paymentType));
  }

  private setStatus(): CountList {
    return countBy(this.transactions.map(({ status }) => status));
  }
}
