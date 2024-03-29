const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { Users } = require('../models')

router.get('/', (req, res, next) => {
    try {
        if(typeof req.session.currentUser !== 'undefined') {
            res.redirect('/home')
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
        res.render('login/login.ejs')
    } catch(err) {
        console.log(err);
        return next();
    }
})

router.get('/register', async (req, res, next) => {
    try {
        res.render('login/register.ejs')
    } catch(err) {
        console.log(err);
        return next();
    } 
})

router.get('/logout', (req, res) => {
    try {
        req.session.destroy();
        res.redirect('/');
    } catch(err) {
        console.log(err);
        return next();
    }
})

router.post('/loginRoute', async(req, res, next) => {
    try {
        const loginAttempt = req.body;
        const userExists = await Users.findOne({email: loginAttempt.email});
        const validAttempt = await bcrypt.compare(loginAttempt.password, userExists.password);
        if(validAttempt === false) return res.send("Email or password is incorrect");
        req.session.currentUser = {userExists};
    
        return res.redirect('/home')
    } catch (err) {
        console.log(err);
        return next();
    }
})

router.post('/registerRoute', async(req, res, next) => {
    try {
         const userInfo = req.body;
         const userExists = await Users.findOne({email: userInfo.email})
         if(userExists) {
            return res.redirect('/');
         }
         let salt = await bcrypt.genSalt(12);
         const hash = await bcrypt.hash(userInfo.password, salt);
         userInfo.password = hash;
         const newAccount = await Users.create(userInfo);
         return res.redirect('/home')
    } catch (err) {
        console.log(err)
        return next();
    }
})

module.exports = router;