const express = require('express');
const moviesRouter = require('./routes/MoviesRouters');

const app = express();

//middleware
app.use(express.json());


app.use('/movies', moviesRouter);


module.exports = app;