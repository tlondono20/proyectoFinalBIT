//code of the server express
const express = require('express');
const path = require('path');

//initializations
const app = express();

//settings
app.set('port', process.env.PORT || 4000);
//set the port
app.set('views',path.join(__dirname,'views'));
//set de location of views

//middlewares
app.use(express.urlencoded({extended: false}));
//become objects in json
//global variables

//routes
app.get('/',(req, res) =>{
    res.send('hello world');
});
//main route

//static files
app.use(express.static(path.join(__dirname, 'public')));
//use the folder public

module.exports = app;