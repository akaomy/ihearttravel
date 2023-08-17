const express = require("express");
const app = express();
const models = require("./models");
require('dotenv').config();


models.sequelize.sync().then(function () {
    console.log("> database has been synced");
    }).catch(function (err) {
    console.log(" > there was an issue in synchronizing the database", err);
});

app.get('/journals', async (req, res) => {
    const journals = await models.Journal.findAll();
    res.send(JSON.stringify(journals, undefined, 4));
});

app.get('/journal-map-places', async (req, res) => {
    const journalMapPlaces = await models.JournalMapPlaces.findAll();
    res.send(JSON.stringify(journalMapPlaces, undefined, 4));
});

app.get('/journal-todo-cards', async (req, res) => {
    const journalTodoCard = await models.JournalTodoCard.findAll();
    res.send(JSON.stringify(journalTodoCard, undefined, 4));
});

app.listen(process.env.DEV_PORT, (err) => {
    if (!err)
        console.log(`Server is running at http://${process.env.HOST_NAME}:${process.env.DEV_PORT}/`);
    else
        console.log("Error occured. Server is not running", err);
}); 