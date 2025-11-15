const url = require("url");
const address = "http://sahinkaraoglan.com/projeler?year=2025&month=kasım";
let result = url.parse(address, true);
console.log(result);
console.log(result.path);
console.log(result.query.year);
console.log(result.query.month);
