export default class Statistics {
    transactions;
    total;
    constructor(transactions) {
        this.transactions = transactions;
        this.total = this.setTotal();
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
}
//# sourceMappingURL=Statistics.js.map