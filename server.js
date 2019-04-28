const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/todoApp', {useNewUrlParser: true});

requireDir('./src/models');

app.use('/api',require('./src/routes'));

const port = 3000;

app.listen(process.env.PORT || port, function() {
    console.log(`Server listening on port ${port}`);
});