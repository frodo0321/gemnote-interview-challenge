

const connection = require("../src/utils/database").connection;
console.log("connection", connection);

const testData = require("./test-data");

console.log("PRODUCT", connection.model("Product"));
connection.model("Product").create(testData);

process.on("uncaughtException", console.error);
