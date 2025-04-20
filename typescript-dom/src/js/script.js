import fetchData from "./api/fetchData.js";
import { url } from "./utils/conts.js";
import normalizedInterface, { printStatistics, printTransactions, } from "./utils/utilities.js";
async function handleData() {
    const data = await fetchData(url);
    if (!data)
        return;
    const transactions = data.map(normalizedInterface);
    printTransactions(transactions);
    printStatistics(transactions);
}
handleData();
//# sourceMappingURL=script.js.map