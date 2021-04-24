var express = require('express');
const lion_controlers= require('../controllers/lion');
var router = express.Router();
/* GET lions */
router.get('/', lion_controlers.lion_view_all_Page );
/* GET detail lion page */
router.get('/detail', lion_controlers.lion_view_one_Page);



// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

/* GET create lion page */
router.get('/create', secured, lion_controlers.lion_create_Page);

/* GET create update page */
router.get('/update',secured, lion_controlers.lion_update_Page);

/* GET create lion page */
router.get('/delete', secured, lion_controlers.lion_delete_Page);

module.exports = router;


