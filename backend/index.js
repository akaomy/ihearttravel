const express = require("express");
const app = express();
const models = require("./models");
const cors = require("cors");
require("dotenv").config();


models.sequelize.sync().then(function () {
    console.log("> database has been synced");
    }).catch(function (err) {
    console.log(" > there was an issue in synchronizing the database", err);
});

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST',
    credentials: true
}));

app.get('/', async (req, res) => {
    res.send('Login page goes here');
});

app.get('/journals', async (req, res) => {
    const journals = await models.Journal.findAll();
    res.send(JSON.stringify(journals, undefined, 4));
});

app.get('/journals/:id', async function (req, res) {
    let journal = await models.Journal.findByPk(req.params.id);
    if (!journal) {
        return res.sendStatus(404);
    }
    res.send("<pre>" + JSON.stringify(journal, undefined, 4) + "<pre/>");
});

// app.get('/journal-map-places', async (req, res) => {
//     const journalMapPlaces = await models.JournalMapPlaces.findAll();
//     res.send(JSON.stringify(journalMapPlaces, undefined, 4));
// });

// app.get('/journal-todo-cards', async (req, res) => {
//     const journalTodoCard = await models.JournalTodoCard.findAll();
//     res.send(JSON.stringify(journalTodoCard, undefined, 4));
// });

app.listen(process.env.DEV_PORT, (err) => {
    if (!err)
        console.log(`Server is running at http://${process.env.HOST_NAME}:${process.env.DEV_PORT}/`);
    else
        console.log("Error occured. Server is not running", err);
}); 