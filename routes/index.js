// Express app varibale
const express = require('express');
// Used to setup routes
const router = express.Router();
// checking if user is authenticated
let {ensureAuth, ensureGuest} = require('../middleware/auth')

// @desc Login/landing page
// @route GET /
router.get('/', ensureGuest, (req,res) => {
    res.render('login', {
        layout: 'login'
    })
})

// @desc Dashboard
// @route GET /dashboard
router.get('/dashboard', ensureAuth, (req,res) => {
    res.render('dashboard')
})


module.exports = router;