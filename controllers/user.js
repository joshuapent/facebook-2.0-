const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.render('/login/login.ejs')
    } catch(err) {
        console.log(err);
        return next();
    }
})



module.exports = router;