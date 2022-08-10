// include express
const express = require('express')

//include body-parser
const bodyParser = require('body-parser')
// include path
const path = require('path')

//import routes
const defaultRoutes = require('./routes/defaults')
//import user routes
const userRoutes = require('./routes/users')

//initiate express
const  app = express();

// set view engine
app.set('view engine', 'ejs')
// set view
app.set('views', 'views')

// set static folder
app.use(express.static(path.join(__dirname, 'public')))
// set bodyparser
app.use(bodyParser.urlencoded({extended: false}))

// execute routes
app.use(userRoutes)
app.use(defaultRoutes)



// start the server on 3000 post
app.listen(3000)

