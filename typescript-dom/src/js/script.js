import fetchData from "./api/fetchData.js";
import { url } from "./utils/conts.js";
import normalizedInterface from "./utils/utilities.js";
async function handleData() {
    const data = await fetchData(url);
    if (!data)
        return;
    const transactions = data.map(normalizedInterface);
    transactions.forEach((item) => {
        console.log(item.value);
    });
}
handleData();
//# sourceMappingURL=script.js.map