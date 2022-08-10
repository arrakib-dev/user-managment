// contains all the defaul raoutes i.e. / or /404

// get router
const  express = require('express')
const router = express.Router();

router.get('/', (req, res, next)=>{
    const options = {
        path : '/',
        pageTitle: 'Add User Form',
    }
    res.render('homepage', options)
})

router.use((req, res, next)=>{
    const options = {
        pageTitle: 'Page Not Found',
    }
    res.render('404', options)
})

// export module
module.exports = router