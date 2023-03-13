const express = require('express');
const app = express();
const methodOverride = require('method-override')

const loginController = require('./controllers/login.js')
const userController = require('./controllers/user.js')
const feedController = require('./controllers/feed.js')

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));

app.use(methodOverride('_method'));

app.use('/', loginController);

app.use('Home', userController);

app.use('Feed', feedController);

app.get('/*', (req, res) => {
    res.send(<h1>Page not found</h1>)
})

app.listen('4000', () => {
    console.log('Listening on port 4000');
})