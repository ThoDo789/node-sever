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

## install morgan : http request  logger middleware
-- npm install morgan
-- index.js =>
 const morgan = require('morgan') 
 app.use(morgan('combined'));

 ###### basic knowledge

 ## template engine (handlebar) :
    -- npm install express-handlebars
            const handlenbar  = require('express-handlebars');

            app.engine('hbs', handlenbar({extname: 'hbs'}));

            app.set('view engine', 'hbs');

            app.set('views',path.join(__dirname,'resources/views'));

            app.get('/', function (req, res) {
            res.render('home');
            });...

--folder:
src
└──resources
    ├──public
    ├── index.js
    └── views
        ├── partials
        |        ├── header.hbs
        |        └── footer.hbs  
        ├── home.hbs
        └── layouts
            └── main.hbs

main.hbs => {{>header}} {{{body}}} {{>footer}}

 ## static file && SASS
--static file: app.use(express.static(path.join(__dirname,'static-folder')));

--sass : npm install node-sass --save-dev
## use bootstrap

## basic routing
 app.get('/',function(req,res){ res.render('home')})
## GET method

## query parameters
 passing data to URL
<form  method="GET" action="/news"> passing data to news page
 

 ## POST request data from client to server

## MVC 
                                            <=                      
    req client => server =>router=> dispatch =>controller=> model( mySQL,mongoFB)
                                                      └──view                  



## Controllers && routers


 app.get('/',function(req,res){ res.render('home')})
  |       |       |
  |       |       └── controller   
  |       |
  |   dispatch     
  |
  |
  | 
  |
  └── action


  