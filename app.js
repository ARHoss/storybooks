// Getting Express module
const express = require('express');
// Express app varibale
const app = express();
// Getting passport for authentication
const passport = require('passport');
// mongoose
const mongoose = require('mongoose')
// import config.env file for securing database string
require('dotenv').config({ path: './config/config.env'});
// Sending passport module to passport.js
require('./config/passport')(passport)
// Handlebars - alternate to EJS
const exphbs = require('express-handlebars');
// for authentication
const session = require('express-session');
// For logging
const morgan = require('morgan');
// DB
const connectDB = require('./config/db');
const MongoStore = require('connect-mongo');
connectDB();
// Only used during development - Creates log for views
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
// Handlebars - alternate to EJS
app.engine('.hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');
// Tells Express to make public folder accessible to public
app.use(express.static('public'));
// Session
app.use(session({//This one controls the middleware
    secret: 'keyboard cat',//any
    resave: false,//do not save session if nothing is modified
    saveUninitialized: false,//do not create a session until something is stored
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING })
}))
// Passport middelware
app.use(passport.initialize())
app.use(passport.session())

// Port
const PORT = process.env.PORT || 3000;

// Routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
// Listener on port provided by the environment or 3000
app.listen(PORT, function() {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

