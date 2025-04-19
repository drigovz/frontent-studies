import fetchData from "./api/fetchData.js";
import { url } from "./utils/conts.js";
import normalizedInterface from "./utils/utilities.js";
function printTransactions(transactions) {
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
async function handleData() {
    const data = await fetchData(url);
    if (!data)
        return;
    const transactions = data.map(normalizedInterface);
    printTransactions(transactions);
}
handleData();
//# sourceMappingURL=script.js.map