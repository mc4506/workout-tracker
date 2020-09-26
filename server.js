const express = require('express');
const app = express();
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');


const logger = require('morgan');

const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(logger("dev"));

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", { useNewUrlParser: true });

app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});