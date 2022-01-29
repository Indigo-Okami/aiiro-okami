// Imports
const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');

//
const uuid = require('./helpers/uuid')
const PORT = 3000;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

