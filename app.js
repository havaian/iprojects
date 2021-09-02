const express = require('express');
const app = express();
const { render } = require('ejs');
const morgan = require('morgan');
const Airtable = require('airtable');
require('dotenv').config();
const bent = require('bent');
const getJSON = bent('json');

app.listen(5500);
console.log('~ iProjects is launched / localhost:5500 ~');

app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// FETCH DATA FROM AIRTABLE
// PASS IT TO THE WEBPAGE

app.get('/workout', (req, res) => {

    getJSON(`https://api.airtable.com/v0/${process.env.habitsBase}/Workout?api_key=${process.env.airtableAPIkey}`)
    .then((result) => {
        res.render('workout', { tRecords: result, title: 'Workout' });
    });

});

app.get('/sleep', (req, res) => {

    getJSON(`https://api.airtable.com/v0/${process.env.habitsBase}/Sleep?api_key=${process.env.airtableAPIkey}`)
    .then((result) => {
        res.render('sleep', { tRecords: result, title: 'Sleep' });
    });

});

app.get('/reading', (req, res) => {

    getJSON(`https://api.airtable.com/v0/${process.env.habitsBase}/Reading?api_key=${process.env.airtableAPIkey}`)
    .then((result) => {
        res.render('reading', { tRecords: result, title: 'Reading' });
    });

});

app.get('/japanese', (req, res) => {

    getJSON(`https://api.airtable.com/v0/${process.env.habitsBase}/Japanese?api_key=${process.env.airtableAPIkey}`)
    .then((result) => {
        res.render('japanese', { tRecords: result, title: 'Japanese' });
    });

});

app.get('/nofap', (req, res) => {
    
    getJSON(`https://api.airtable.com/v0/${process.env.habitsBase}/Nofap?api_key=${process.env.airtableAPIkey}`)
    .then((result) => {
        res.render('nofap', { tRecords: result, title: 'Nofap' });
    });

});

app.use('/', (req, res) => {

    getJSON(`https://api.airtable.com/v0/${process.env.projectsBase}/Main?api_key=${process.env.airtableAPIkey}`)
    .then((result) => {
        res.render('projects', { tRecords: result, title: 'Projects' });
    });

});