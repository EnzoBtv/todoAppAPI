const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

mongoose.connect('mongodb+srv://dbUser:C5JZiSR1BaOUiRp3@cluster0-lun0k.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

requireDir('./src/models');

app.use('/api',require('./src/routes'));

const port = 3000;

app.listen(process.env.PORT || port, function() {
    console.log(`Server listening on port ${port}`);
});