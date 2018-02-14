const connection = require("../utils/database").connection;


module.exports = function(app, route) {

    app.route(route)
        .get(
            function(request, response, next) {

                // TODO do better validation on page and pageSize
                var page = Number(request.query.page);
                var pageSize = Number(request.query.pageSize);

                var skip = page * pageSize;
                var limit = pageSize;

                const productQuery = {};
                const productOptions = {}

                return connection.model("Product").find(productQuery, productOptions)
                    .then(products => {
                        return response.json({products})
                    })

            }
        )

}
