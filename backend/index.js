const express = require("express");
const app = express();
const models = require("./models");
const hostname = '127.0.0.1';
const port = 4000;

models.sequelize.sync().then(function () {
    console.log("> database has been synced");
    }).catch(function (err) {
    console.log(" > there was an issue in synchronizing the database", err);
});

app.get('/journals', (req, res) => {
    res.send('it works with express');
});

app.listen(port, (err) => {
    if (!err)
        console.log(`Server is running at http://${hostname}:${port}/`);
    else
        console.log("Error occured. Server is not running", err);
}); 