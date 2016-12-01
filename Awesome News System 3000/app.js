/* globals module require */

const config = require("./config/app");

const app = require("./config/app/application");
const data = require("./data/index")(config);

require("./routers/index")(app, data);


app.listen(config.port, () =>
    console.log(`Server running at port: ${config.port}`)
);