var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var lion_controller = require('../controllers/lion');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Handbag ROUTES ///
// POST request for creating a Handbag.
router.post('/lion', lion_controller.lion_create_post);
// DELETE request to delete Handbag.
router.delete('/lion/:id', lion_controller.lion_delete);
// PUT request to update Handbag.
router.put('/lion/:id', lion_controller.lion_update_put);
// GET request for one Handbag.
router.get('/lion/:id', lion_controller.lion_detail);
// GET request for list of all Handbag.
router.get('/lion', lion_controller.lion_list);
module.exports = router;