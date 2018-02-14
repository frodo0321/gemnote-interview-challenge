const mongoose = require("mongoose");
const bluebird = require("bluebird");
const path = require("path");
const fs = require("fs");

const config = require("../../config");

function toTitleCase(str) {
    return str.split(".")[0].replace(/(^|-)(\w)/g, (all, $1, $2) => $2.toUpperCase());
}

mongoose.Promise = bluebird.Promise;
mongoose.set("debug", true);

const mongoOptions = {
    server: {
        socketOptions: {
            autoReconnect: true,
            keepAlive: Number.MAX_VALUE
        }
    },
    promiseLibrary: bluebird
};

mongoose.connect(config.mongodb.url);
const db = mongoose.connection;

db.on("close", () => {
    console.log("connection closed");
});
db.on("connected", () => {
    console.log("MongoDB connected!");
});
db.on("connecting", () => {
    console.log("connecting to MongoDB @ %s", config.mongodb.url);
});
db.on("disconnected", () => {
    console.log("MongoDB disconnected!");
    setTimeout(
        () => db.open(config.mongodb.url, mongoOptions),
        1000
    );
});
db.on("disconnecting", () => {
    console.log("disconnecting from MongoDB...");
});
db.on("error", error => {
    console.log("Error in MongoDb connection");
    console.log(error);
    db.close();
});
db.on("fullsetup", () => {
    console.log("All nodes are connected.");
});
db.on("open", () => {
    console.log("Connected to mongo server.");
});
db.on("reconnected", () => {
    console.log("MongoDB reconnected!");
});



const modelsPath = path.resolve(path.join(__dirname, "../models"));

fs.readdirSync(modelsPath).forEach(file => {

    const dbModelName = toTitleCase(file);
    const schemaPath = path.join(modelsPath, file);
    db.model(dbModelName, require(schemaPath));
});


module.exports.connection = db;
