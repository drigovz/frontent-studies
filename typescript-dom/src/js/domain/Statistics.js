import { countBy } from "../utils/utilities.js";
export default class Statistics {
    transactions;
    total;
    payments;
    status;
    week;
    bestDay;
    constructor(transactions) {
        this.transactions = transactions;
        this.total = this.setTotal();
        this.payments = this.setPayments();
        this.status = this.setStatus();
        this.week = this.setWeek();
        this.bestDay = this.setBestDay();
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
    setWeek() {
        const weekDays = {
            Sunday: 0,
            Monday: 1,
            Tuesday: 2,
            Wednesday: 3,
            Thursday: 4,
            Friday: 5,
            Saturday: 6,
        };
        this.transactions.reduce((total, actual) => {
            const day = actual.date.getDay();
            switch (day) {
                case 0:
                    return (weekDays.Sunday += 1);
                case 1:
                    return (weekDays.Monday += 1);
                case 2:
                    return (weekDays.Tuesday += 1);
                case 3:
                    return (weekDays.Wednesday += 1);
                case 4:
                    return (weekDays.Thursday += 1);
                case 5:
                    return (weekDays.Friday += 1);
                case 6:
                    return (weekDays.Saturday += 1);
                default:
                    break;
            }
        }, 0);
        return weekDays;
    }
    setBestDay() {
        // Object.entries -> transfoma um objeto em array
        return Object.entries(this.week).sort((actual, next) => {
            // retorna se o próximo dia é menor que o dia atual
            return next[1] - actual[1];
        })[0]; // retorna o primeiro item do array
    }
}
//# sourceMappingURL=Statistics.js.map