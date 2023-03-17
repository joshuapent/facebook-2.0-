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
        const allPosts = await Posts.find({})
        let context = {
            user: req.session.currentUser.userExists,
            post: allPosts
        }
        res.render('profilePage/index.ejs', context)
    } catch(err) {
        console.log(err);
        return next();
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const showPost = await Posts.findById(req.params.id)
        let context = { 
        post: showPost,
        user: req.session.currentUser.userExists
        }
    res.render('profilePage/picShow.ejs', context)
    } catch(err) {
        console.log(err);
        return next();
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const deletePost = await Posts.findByIdAndDelete(req.params.id)
        res.redirect('/home')
    } catch (err) {
        console.log(err)
        return next();
    }
})

router.post('/newPost', async (req, res, next) => {
    try {
        console.log(req.body);
        const newPost = await Posts.create(req.body);
        res.redirect('/home')
        
    } catch(err) {
        console.log(err);
        return next();
    }
})

router.put('/:id', async(req, res, next) => {
    try {
        const updateItem = await Post.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/post');
    } catch(postComment) {
        console.log(postComment);
        return next();
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const postGettingDeleted = await Post.findByIdAndDelete(req.params.id);
        res.redirect('/post');
    } catch(erasePost) {
        console.log(erasePost);
        return next();
    }
})

module.exports = router;