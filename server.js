const express = require('express');
const app = express();
const methodOverride = require('method-override')
const session = require('express-session');
const MongoStore = require("connect-mongo");
require('dotenv').config();

const loginController = require('./controllers/login.js')
const userController = require('./controllers/user.js')
const feedController = require('./controllers/feed.js')
const settingsController = require('./controllers/settings.js')
const searchController = require('./controllers/search.js')

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));

app.use(methodOverride('_method'));

app.use(
    session({
        store: MongoStore.create({ mongoUrl: process.env.CONNECT_THIS }),
        secret: "super secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7, // one week
        },
    })
);

app.use('/', loginController);

app.use('/', searchController)

app.use('/home', userController);

app.use('/feed', feedController);

app.use('/settings', settingsController)

app.get('/*', (req, res) => {
    res.send('<h1>Page not found</h1>')
})

app.listen('4000', () => {
    console.log('Listening on port 4000');
})