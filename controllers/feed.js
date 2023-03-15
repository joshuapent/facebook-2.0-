const express = require('express');
const router = express.Router();

router.get('/*', (req, res, next) => {
    try {
        console.log(req.session.currentUser)
        if(typeof req.session.currentUser === 'undefined') {
            res.redirect('/')
        } 
        else {
            next();
        }
    } catch (err) {
        console.log(err);
        return next();
    }
})

router.get('/', async (req, res, next) => {
    try {
        let context = {
            user: req.session.currentUser.userExists,
        }
        res.render('profilePage/feed.ejs', context)
    } catch(err) {
        console.log(err);
        return next();
    }
})



module.exports = router;