import fetchData from "./api/fetchData.js";
import { url } from "./utils/conts.js";
import TransactionApi from "./interfaces/TransactionApi.js";
import normalizedInterface, {
  printStatistics,
  printTransactions,
} from "./utils/utilities.js";

async function handleData() {
  const data = await fetchData<TransactionApi[]>(url);
  if (!data) return;

  const transactions = data.map(normalizedInterface);
  printTransactions(transactions);
  printStatistics(transactions);
}

handleData();
