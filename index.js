var express = require('express')
var app = express()
const port = 5000;
// respond with "hello world" when a GET request is made to the homepage
app.get('/tho', function (req, res) {
  res.send('hello world')
})
app.listen(port,()=>console.log('hello', port))