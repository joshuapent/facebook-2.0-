const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.render('profilePage/index.ejs')
    } catch(err) {
        console.log(err);
        return next();
    }
})

router.get('/posts', async (req, res, next) => {
    try {
        res.render('profilePage/picShow.ejs')
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

router.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const newPost = await this.post.create(req.body);
        // mySeedData.push(newPost);
        console.log(newPost);
        res.redirect('/post');
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