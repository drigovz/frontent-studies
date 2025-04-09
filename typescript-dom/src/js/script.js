import fetchData from "./api/fetchData.js";
import url from "./utils/conts.js";
async function handleData() {
    const data = await fetchData(url);
    if (data) {
        data.forEach((item) => {
            console.log(item);
        });
    }
}
handleData();
//# sourceMappingURL=script.js.map