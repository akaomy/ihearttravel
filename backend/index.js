const express = require("express");
const app = express();
const models = require("./models");
require('dotenv').config();


models.sequelize.sync().then(function () {
    console.log("> database has been synced");
    }).catch(function (err) {
    console.log(" > there was an issue in synchronizing the database", err);
});

app.get('/journals', (req, res) => {
    res.send('it works with express');
});

app.listen(process.env.DEV_PORT, (err) => {
    if (!err)
        console.log(`Server is running at http://${process.env.HOST_NAME}:${process.env.DEV_PORT}/`);
    else
        console.log("Error occured. Server is not running", err);
}); 