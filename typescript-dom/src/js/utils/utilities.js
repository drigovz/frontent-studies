import Statistics from "../domain/Statistics.js";
/**
 *
 * @param value need to pass string on format '0.000,00' returns '0000.00'
 */
function normalizeAmoutValue(value) {
    let number = parseFloat(value.replaceAll(".", "").replace(",", "."));
    return isNaN(number) ? null : number;
}
function normalizeDateTimeValue(value) {
    const [date, time] = value.split(" ");
    const [day, month, year] = date.split("/").map(Number);
    const [hour, minutes] = time.split(":").map(Number);
    return new Date(year, month - 1, day, hour, minutes);
}
export default function normalizedInterface(transaction) {
    return {
        new: Boolean(transaction["Cliente Novo"]),
        date: normalizeDateTimeValue(transaction.Data),
        email: transaction.Email,
        paymentType: transaction["Forma de Pagamento"],
        id: transaction.ID,
        name: transaction.Nome,
        status: transaction.Status,
        amount: transaction["Valor (R$)"],
        value: normalizeAmoutValue(transaction["Valor (R$)"]),
    };
}
export function printTransactions(transactions) {
    const table = document.querySelector("#transactions tbody");
    if (!table)
        return;
    transactions.forEach((transaction) => {
        table.innerHTML += `
      <tr>
        <td>${transaction.name}</td>
        <td>${transaction.email}</td>
        <td>R$ ${transaction.amount}</td>
        <td>${transaction.paymentType}</td>
        <td>${transaction.status}</td>
      </tr>
    `;
    });
}
function printList(list, containerId) {
    const containerElement = document.getElementById(containerId);
    if (containerElement) {
        Object.keys(list).forEach((key) => {
            containerElement.innerHTML += `
        <p>${key}: ${list[key]}</p>
      `;
        });
    }
}
export function printStatistics(transactions) {
    const statistics = new Statistics(transactions);
    printList(statistics.payments, "payments");
    printList(statistics.status, "status");
    const totalElement = document.querySelector("#total span");
    if (totalElement) {
        totalElement.innerText = statistics.total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }
    const dayElement = document.querySelector("#bestDay span");
    if (dayElement) {
        dayElement.innerText = statistics.bestDay[0];
    }
}
export function countBy(arr) {
    return arr.reduce((total, item) => {
        if (total[item]) {
            total[item] += 1;
        }
        else {
            total[item] = 1;
        }
        return total;
    }, {});
}
//# sourceMappingURL=utilities.js.map