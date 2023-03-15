const express = require('express');
const router = express.Router();
const { Users } = require('../models')

router.get(`/search`, async (req, res, next) => {
    try {
        console.log(req.query)
        const currentSearch = req.query;
        const findPerson = await Users.findOne(req.query.name);
        console.log(findPerson)
        context = {
            user: findPerson
        }
        res.render('search/search.ejs', context)
        return next();
    } catch(err) {
        console.log(err);
        return next();
    }
})

module.exports = router;