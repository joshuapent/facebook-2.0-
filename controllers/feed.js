const express = require('express');
const router = express.Router();
const { Users } = require('../models')
const { Posts } = require('../models')

router.get('/*', (req, res, next) => {
    try {
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
         const showPost = await Posts.find({})
        let context = {
            user: req.session.currentUser.userExists,
            post:showPost
        }
        res.render('profilePage/feed.ejs', context)
    } catch(err) {
        console.log(err);
        return next();
    }
})



module.exports = router;