import { countBy } from "../utils/utilities.js";
export default class Statistics {
    transactions;
    total;
    payments;
    status;
    constructor(transactions) {
        this.transactions = transactions;
        this.total = this.setTotal();
        this.payments = this.setPayments();
        this.status = this.setStatus();
    }
    /**
     * utilizando o type predicate nós estamos indicando que o retorno dessa função
     * será true somente quando o tipo passado for o tipo 'TransactionWithValue'
     */
    filterValue(transaction) {
        return transaction.value !== null;
    }
    setTotal() {
        return this.transactions
            .filter(this.filterValue)
            .reduce((total, actualItem) => {
            return total + actualItem.value;
        }, 0);
    }
    setPayments() {
        // desestruturando 'paymentType' de dentro do objeto 'Transaction'
        return countBy(this.transactions.map(({ paymentType }) => paymentType));
    }
    setStatus() {
        return countBy(this.transactions.map(({ status }) => status));
    }
}
//# sourceMappingURL=Statistics.js.map