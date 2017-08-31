'use strict';

const express = require('express');
const app = express();

app.get("/", (req,res,next) => {
    res.send("hello world").end();
});

app.get("/throwSync", (req,res,next) => {
    throw new Error("I'm sync error");
});


app.get("/throwAsync", (req,res,next) => {
    process.nextTick( () => {
        throw new Error("I'm async error from nextTick");
    });
});

app.get("/error", (req,res,next) => {
    next(new Error("Correctly returned error"));
})

app.use((err, req,res,next) => {

    console.log("Error handler triggered");
    res.end("Error handled in error middleware");

})

app.listen("3000", () => console.log("listening on 3000"));