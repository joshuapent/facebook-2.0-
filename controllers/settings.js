const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.render('profilePage/settings.ejs')
    } catch(err) {
        console.log(err);
        return next();
    }
})

module.exports = router;