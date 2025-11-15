const path = require("path");
let result = path.resolve("app.js"); //dosyanın konumu
result = path.extname("app.js"); //uazantısı
result = path.parse(__filename);
console.log(result);
