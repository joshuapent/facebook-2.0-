const express = require('express');
const router = express.Router();
const { Users } = require('../models')

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
        res.render('settings/settings.ejs', context)
    } catch(err) {
        console.log(err);
        return next();
    }
})

router.get('/DeleteMyAccount', async (req, res, next) => {
    try {
        const account = await Users.findById(req.session.currentUser.id);
        let context = {
            user: req.session.currentUser.userExists,
        }
        res.render('settings/delete.ejs', context)
    } catch (err) {
        console.log(err);
        return next();
    }
})

router.delete('/delete', async (req, res, next) => {
    try {
        const deleteAccount = await Users.findByIdAndDelete(req.session.currentUser.userExists._id); 
        req.session.destroy();
        res.redirect('/');
    } catch (err) {
        console.log(err);
        return next();
    }
})

router.get('/edit', async (req, res, next) => {
    try {
        const currentUser = await Users.findById(req.session.currentUser.userExists._id);
        //console.log('session:', req.session.currentUser)
        context = {
            user: currentUser
        }
    
       //console.log('context:', currentUser);
        // console.log(profileEdit.userExists.name);
        res.render('settings/edit.ejs', context)
    } catch(someEdit) {
            console.log(someEdit);
            return next();
        
    }
})

router.put('/edit/:id', async(req, res, next) => {
    try {
        // console.log(req.params);
        console.log(req.body);
        const updateItem = await Users.findByIdAndUpdate(req.params.id, {$set:req.body});
         console.log(updateItem);
        res.redirect('/settings/edit');
    } catch(postComment) {
        console.log(postComment);
        return next();
    }
})

module.exports = router;