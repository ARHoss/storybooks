// Express app varibale
const express = require('express');
const passport = require('passport');
// Used to setup routes
const router = express.Router();


// @desc Auth with Google
// @route GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// @desc Google auth callback
// @route GET /auth/google/callback
router.get('/google/callback', 
    passport.authenticate('google', {
    failreRedirect: '/'
    }),
    (req, res) => {
        res.redirect('/dashboard')
    }
)

// @desc Logout user
// @route GET /auth/logout
router.get('/logout', (req, res) => {
    req.logout( () => res.redirect('/'))  
    }
)


module.exports = router;