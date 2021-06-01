const express = require('express');
const morgan = require('morgan');
const handlenbar  = require('express-handlebars');
const app = express();
const port = 5000;
const path = require('path');

// static file
app.use(express.static(path.join(__dirname,'public')));

// http logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', handlenbar({
  extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'));
console.log('PATH:',path.join(__dirname,'resources/views'))
app.get('/', function (req, res) {
  res.render('home');
});
app.get('/news', function (req, res) {
  res.render('news');
});

app.listen(port,()=>console.log('hello', port));