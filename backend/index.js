const express = require("express");
const app = express();
const models = require("./models");
const cors = require("cors");
const bodyParser = require('body-parser');
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
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
    res.send(JSON.stringify(journal, undefined, 4));
});

app.post('/journals/create', async function (req, res) {
    try {
        const journal = await models.Journal.create({
        JournalName: req.body.JournalName,
        });
        res.status(201).json(journal);
    } catch (err) {
            console.log(err);
            res.status(500).json({err: 'An error occured while creating new record'});
    }
});

app.listen(process.env.DEV_PORT, (err) => {
    if (!err)
        console.log(`Server is running at http://${process.env.HOST_NAME}:${process.env.DEV_PORT}/`);
    else
        console.log("Error occured. Server is not running", err);
}); 