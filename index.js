const path = require('path');
module.exports = new Proxy({}, {
    get(target, name) {
        return require(path.resolve(__dirname, `./schemas/${name}_pb.js`))[name];
    }
});
