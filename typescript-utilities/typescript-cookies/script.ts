import Cryptography from "./classes/Cryptography";
import CookiesToolset from "./classes/CookiesToolset";

// cryptography usage
/*
const value = "senh@.123";
const crypt = new Cryptography();

crypt
  .encrypt(value)
  .then((result) => {
    console.log(result);
    return crypt.decrypt(result);
  })
  .then((r) => toolset.get("test").then((r) => console.log(r)));
*/

// cookies toolset usage
const cookiesToolset = new CookiesToolset();

cookiesToolset.set("test", "senh@123");
cookiesToolset.get("test").then((r) => console.log(r));
// toolset.remove("test");
