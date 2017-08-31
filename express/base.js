'use strict';

const express = require('express');
const http = require('http');
const boddyParser = require('body-parser');

const app = express();

app.get('/', (req, res, next) => res.status(200).end("OK"))


app.post('/data', (req, res, next) => {
    
        req.on('data', chunk => {
            console.log(chunk);
        }).on('end', () => res.end())
    
    })

    
app.use('/json', boddyParser.json())   
app.post('/json', (req, res, next) => {

    console.log(req.body);
    res.end()    
})
        
app.listen(3000, () => console.log("Started listening"));

