const express = require('express');
const router = express.Router();


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