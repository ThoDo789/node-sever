### install node js
-- npm init
-- npm i espress
-- index.js => get started hello word:
                                        var express = require('express')
                                        var app = express()
                                        const port = 5000;
                                        app.get('/', function (req, res) {
                                        res.send('hello world')
                                        })
                                        app.listen(port,()=>console.log('hello world')
## install nodemon && ispectors
-- npm install -g nodemon or npm install nodemon --save-dev :help you change something so needn't restart server
-packgage.json=> script => "start" : "nodemon --inspect index.js" => npm start