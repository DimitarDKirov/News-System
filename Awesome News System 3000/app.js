/* globals module require */

const config = require("./config/app");
const app = require("./config/app/application");

app.listen(config.port, () =>
    console.log(`Server running at port: ${config.port}`)
);