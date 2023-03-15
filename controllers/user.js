const express = require('express');
const router = express.Router();
const { Users } = require('../models')
const { Posts } = require('../models')

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
        const allPosts = await Posts.find({})
        let context = {
            user: req.session.currentUser.userExists,
            post: allPosts
        }
        console.log(Posts)
        res.render('profilePage/index.ejs', context)
    } catch(err) {
        console.log(err);
        return next();
    }
})

router.get('/posts', async (req, res, next) => {
    try {
        const showPost = await Posts.findOne({Posts})
      console.log(showPost)
        let context = 
    { 
        post: showPost,
        user: req.session.currentUser.userExists
    }
        res.render('profilePage/picShow.ejs', context)
    } catch(err) {
        console.log(err);
        return next();
    }
})


// router.get('/user/:id', async (req, res, next) => {
//     try {
//         res.render('/user/profile.ejs')
//     } catch(err) {
//         console.log(err);
//         return next();
//     }
// })

router.post('/newPost', async (req, res, next) => {
    try {
        console.log(req.body);
        const newPost = await Posts.create(req.body);
        // mySeedData.push(newPost);
        // console.log(newPost);
        res.redirect('/home')
        
    } catch(err) {
        console.log(err);
        return next();
    }
})



//params.sting ?
router.put('/:id', async(req, res, next) => {
    try {
        console.log(req.params.id);
        console.log(req.body);
        const updateItem = await Post.findByIdAndUpdate(req.params.id, req.body);
        console.log(updateItem);
        res.redirect('/post');
    } catch(postComment) {
        console.log(postComment);
        return next();
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        console.log(req.params);
        console.log("Delete route");
        const postGettingDeleted = await Post.findByIdAndDelete(req.params.id);
        console.log(postGettingDeleted);
        res.redirect('/post');
    } catch(erasePost) {
        console.log(erasePost);
        return next();
    }
})

module.exports = router;