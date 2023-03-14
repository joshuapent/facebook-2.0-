const express = require('express');
const router = express.Router();
const { Users } = require('../models')

router.get('/', async (req, res, next) => {
    try {
        res.render('settings/settings.ejs')
    } catch(err) {
        console.log(err);
        return next();
    }
})

router.get('/DeleteMyAccount', async (req, res, next) => {
    try {
        const account = await Users.findById(req.session.currentUser.id);
        context = {
            account: account
        }
        res.render('settings/delete.ejs', context)
    } catch (err) {
        console.log(err);
        return next();
    }
})

router.delete('/delete', async (req, res, next) => {
    try {
        const deleteAccount = await Users.findByIdAndDelete(req.session.currentUser.id); //need to figure out what to put in the ()
        res.redirect('/');
    } catch (err) {
        console.log(err);
        return next();
    }
})

module.exports = router;