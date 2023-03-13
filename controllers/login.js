const express = require('express');
const router = express.Router();

router.get('/login', async (req, res, next) => {
    try {
        res.render('/login/login.ejs')
    } catch(err) {
        console.log(err);
        return next();
    }
})

router.get('/register', async (req, res, next) => {
    try {
        res.render('/login/register.ejs')
    } catch(err) {
        console.log(err);
        return next();
    }
})

module.exports = router;