// contains all the user routes

// get router
const  express = require('express')
const router = express.Router();
const users = []

router.get('/users', (req, res, next)=>{
    const options = {
        path : '/users',
        pageTitle: 'Users',
        users: users,
    }
    res.render('users', options)
})

router.post('/add-user',(req, res, next)=>{
    users.push({name : req.body.username})
    res.redirect('/users')
})

// exportt module
module.exports = router


