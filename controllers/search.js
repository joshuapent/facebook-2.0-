const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const { Posts } = require('../models');

router.get(`/search`, async (req, res, next) => {
    try {
        const user = await Users.find(req.query);
        context = {
            user: user.slice(0, 10)
        }
        res.render('search/search.ejs', context)
    } catch(err) {
        console.log(err);
        return next();
    }
})

router.get('/visit/:id', async (req, res, next) => {
    try {
        console.log(req.params)
        const user = await Users.findById(req.params.id)
        const allPosts = await Posts.find({})
        context = {
            user: user,
            post: allPosts
        }
        res.render('search/otherUser.ejs', context)
    } catch(err) {
        console.log(err);
        return next();
    }
})

router.get('/visit/post/:id', async (req, res, next) => {
    try {
        const showPost = await Posts.findById(req.params.id)
        let context = { 
        post: showPost,
        user: req.session.currentUser.userExists
        }
    res.render('search/userPicShow.ejs', context)
    } catch(err) {
        console.log(err);
        return next();
    }
})

module.exports = router;