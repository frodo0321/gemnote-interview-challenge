
function errorHandler() {

    return function errorHandlerInner(error, request, response, next) {

        return response.json(error);

    }
}

module.exports = errorHandler;
