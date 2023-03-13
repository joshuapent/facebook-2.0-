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

// router.get('/user/:id', async (req, res, next) => {
//     try {
//         res.render('/user/profile.ejs')
//     } catch(err) {
//         console.log(err);
//         return next();
//     }
// })


module.exports = router;