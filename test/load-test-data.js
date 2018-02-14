const connection = require("../src/utils/database").connection;

const testData = require("./test-data");

connection.model("Product").create(testData)
    .then(() => {
        connection.close();
        console.log("Complete!");
        process.exit(0);
    })

process.on("uncaughtException", console.error);
