const express = require('express');
const app = express();
const methodOverride = require('method-override')


app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));

app.use(methodOverride('_method'));



app.get('/', (req, res) => {
    res.send(<h1>Hey</h1>)
})

app.get('/*', (req, res) => {
    res.send(<h1>Page not found</h1>)
})

app.listen('4000', () => {
    console.log('Listening on port 4000');
})