const fs = require("fs");
/*
const files = fs.readdir("./", function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
*/

/*
//DOSYA OKUMA
const data = fs.readFile("index.html", "utf8", function (error, data) {
  if (error) console.log(error);
  else console.log(data);
});
*/

/*
//DOSYA OLUŞTURMA
fs.writeFile("deneme.txt", "Hello World", function (error) {
  if (error) console.log(error);
  else console.log("Dosya oluşturuldu.");
});
*/

//DOSYA SİLME
fs.unlink("deneme.txt", function (error) {
  console.log("dosya silindi.");
});
