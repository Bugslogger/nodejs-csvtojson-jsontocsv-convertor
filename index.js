const CsvToJson = require("./csvtojson");
require("colors");

function Filter(value) {
//   console.log(value);
  return value.OwnerEmail == "null";
}

console.log("[Code execution strated...]".bgMagenta);
CsvToJson(__dirname + "/listing.csv", __dirname + "/newjson.json", Filter);
