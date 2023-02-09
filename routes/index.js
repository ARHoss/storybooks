// Express app varibale
const express = require('express');
// Used to setup routes
const router = express.Router();
// checking if user is authenticated
let {ensureAuth, ensureGuest} = require('../middleware/auth')
// Get Story Model
const Story = require('../models/Story')

// @desc Login/landing page
// @route GET /
router.get('/', ensureGuest, (req,res) => {
    res.render('login', {
        layout: 'login'
    })
})

// @desc Dashboard
// @route GET /dashboard
router.get('/dashboard', ensureAuth, async (req,res) => {
    try {
        const stories = await Story.find({user: req.user.id}).lean()//lean returns JS objects
        res.render('dashboard', {
            name: req.user.firstName,
            stories
        })
    } catch (error) {
        console.error(error);
        res.render('error/500')
    }
   
        
})


module.exports = router;