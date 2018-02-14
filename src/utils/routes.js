const fs = require('fs');
const path = require('path');

function dirTree(filename) {
    var stats = fs.lstatSync(filename),
        info = {
            path: filename,
            name: path.basename(filename)
        };

    if (stats.isDirectory()) {
        info.type = "directory";
        info.children = fs.readdirSync(filename)
            .map(function(child) {
                return dirTree(filename + '/' + child);
            })
            .filter(function(child) {
                return child;
            });
    } else {
        // Assuming it's a file. In real life it could be a symlink or
        // something else!
        if (filename.endsWith(".js")) {
            info.type = "javascript";
        } else {
            return false;
        }
    }

    return info;
}

function fileListFromTree(tree) {
    var ret = [];
    function recurseThroughTree(tree) {
        if (((tree || {}).children || {}).length > 0) {
            return tree.children
                .map(function(child) {
                    if (child.type == "directory") {
                        return recurseThroughTree(child);
                    } else {
                        ret.push(child);
                    }
                });
        } else {
            return;
        }
    }
    recurseThroughTree(tree);
    return ret;
}

const routesPath = "../routes";

function addFields(fileList) {
    fileList.forEach(function(file) {
        const normalized = path.normalize(path.join(__dirname, routesPath));
        const relative = routesPath + file.path.split(normalized).pop();
        Object.assign(file, {
            relative: relative,
            route: path.join("/", file.name.replace(".js", ""))
        });
    });
    return fileList;
}

module.exports = function(app, dir, apiPath) {

    const fileList = fileListFromTree(dirTree(path.join(__dirname, routesPath)));
    addFields(fileList);

    fileList.forEach(function(file) {
        const route = require(file.relative)(app, path.join(apiPath + file.route));
    });

};
