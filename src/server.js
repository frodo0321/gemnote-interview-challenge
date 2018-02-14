
const app = require("express")();

const config = require("../config");

app.use(function requestLogger(request, response, next) {

    console.log(new Date().toString(), request.ip, request.method, request.url);

    return next();

})

require("./utils/routes")(app, __dirname, "");

app.use(require("./utils/error-handler")())

app.listen(config.port);

process.on("uncaughtException", console.error);
