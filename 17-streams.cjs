const { writeFileSync } = require("fs");

for (let i = 0; i < 1000; i++) {
  writeFileSync("./content/big.txt", `Hi Tapas ${i}\n`, { flag: "a" });
}
