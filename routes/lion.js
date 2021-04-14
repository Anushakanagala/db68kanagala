var express = require('express');
const lion_controlers= require('../controllers/lion');
var router = express.Router();
/* GET lions */
router.get('/', lion_controlers.lion_view_all_Page );
/* GET detail lion page */
router.get('/detail', lion_controlers.lion_view_one_Page);

/* GET create lion page */
router.get('/create', lion_controlers.lion_create_Page);

/* GET create update page */
router.get('/update', lion_controlers.lion_update_Page);

/* GET create lion page */
router.get('/delete', lion_controlers.lion_delete_Page);






module.exports = router;