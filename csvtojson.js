const { writeFile, createReadStream, writeFileSync } = require("fs");
const { parse } = require("csv-parse");
require("colors");

let data;
/**
 *
 * @param {String} csvpath
 * @param {String} jsonpath
 * @param {Function} filter
 */

module.exports = function CsvToJson(csvpath, jsonpath, filter) {
  if (!csvpath) {
    console.log("[Code Execution Termination]".bgRed);
    console.log("[Please provide path of you csv file]".red);
    return;
  }

  if (!jsonpath) {
    console.log("[Code Execution Termination]".bgRed);
    console.log(
      "[Please provide path where you want to create new json file]".red
    );
    return;
  }
  try {
    console.log("[csv to json conversion started...]".bgYellow);

    let parser = parse({ columns: true }, callBakcFunction);

    function callBakcFunction(error, records) {
      if (error) {
        console.log(`${error}`.bgRed);
        return;
      }

      if (filter) {
        data = records.filter(filter);
      }

      // console.log(filter);
      let = error = writeFileSync(jsonpath, JSON.stringify(data || records));

      if (error == null) {
        console.log("[Successfully Converted csv To Json]".bgGreen);

        console.log(
          "[converted json length]: ".bgWhite,
          require(__dirname + "/newjson.json").length
        );
        return;
      } else {
        console.log("[Fail To Convert csv file to json]".bgRed);
      }
    }
    createReadStream(csvpath).pipe(parser);
  } catch (error) {
    console.log("Error: ", error);
  }
};
