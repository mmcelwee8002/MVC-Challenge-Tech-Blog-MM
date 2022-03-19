const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');



router.get('/', (req, res) => {
    console.log(req.session)
    res.render('homepage', {
        
        userId: req.session.user_id,
        loggedIn: req.session.loggedIn
    });
});


// Render the login page.  If the user is logged in, redirect to the home page.
router.get('/login', (req, res) => {
   
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});


router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

module.exports = router;