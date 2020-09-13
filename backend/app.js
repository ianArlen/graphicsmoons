//Bring express
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(require("cors")());

//Bring in the routes
app.use("/", require("./routes/sale"));


//Setup Error Handlers
const errorhandlers = require('./handlers/errorhandlers');
app.use(errorhandlers.notFound);
app.use(errorhandlers.mongoseErrors);
app.use(errorhandlers.developmentErrors);

module.exports = app;