const express = require('express');
const morgan = require('morgan');
const handlenbar  = require('express-handlebars');
const app = express();  // app is a intance of express;
const port = 5000;
const path = require('path');
const { send } = require('process');


const route = require('./routers')

// static file
app.use(express.static(path.join(__dirname,'public')));


//middleware
app.use(express.urlencoded({
  extended:true
}));
 app.use(express.json());

// http logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', handlenbar({
  extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'));


console.log('PATH:',path.join(__dirname,'resources/views'))



//route init
route(app);


app.listen(port,()=>console.log('hello', port));