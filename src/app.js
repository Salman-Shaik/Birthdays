const express = require('express');

const app = express();
module.exports = app;

app.use(()=>console.log("HI");)
