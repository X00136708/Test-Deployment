const express = require('express');
const helmet = require('helmet');
const host = process.env.JS_HOST || 'localhost';
const port = process.env.JS_PORT || 3000;
const app = express();

app.use(helmet());

app.get("/", function (request, response){
    response.send("Hello Worldssssssss");
});

const server = app.listen(port, host, () => console.log(`Server listens on https://${host}:${port}`))
