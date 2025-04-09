import fetchData from "./api/fetchData.js";
import url from "./utils/conts.js";
import TransactionApi from "./interfaces/TransactionApi.js";

async function handleData() {
  const data = await fetchData<TransactionApi[]>(url);

  if (data) {
    data.forEach((item) => {
      console.log(item);
    });
  }
}

handleData();
