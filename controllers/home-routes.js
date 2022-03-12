const router = require('express').Router();
const sequelize = require('../config/connection');
// const { Post, User, Comment } = require('../models');



router.get('/', (req, res) => {
    res.render('homepage', {
        // userId: req.session.user_id,
        // loggedIn: req.session.loggedIn
    });
});



router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirect('/');
//         return;
//     }

    res.render('login');
});
module.exports = router;