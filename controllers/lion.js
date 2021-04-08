var lion = require('../models/lion')
// List of all lion
exports.lion_list = async function (req, res) {
    // List of all lion
    res.send('NOT IMPLEMENTED: lion list');
};
exports.lion_list = async function(req, res) {
    try{
    thelion = await lion.find();
    res.send(thelion);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };
// for a specific lion.
exports.lion_detail = function(req, res) {
res.send('NOT IMPLEMENTED: lion detail: ' + req.params.id);
};
// Handle lion create on POST.
exports.lion_create_post = async function (req, res) {
    console.log(req.body)
    let document = new lion();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Dimensions":"Stylish", "Color":"Violet", "Price":1500}
    document.name = req.body.name;
    document.age = req.body.age;
    document.breed = req.body.breed;
    try{
        let result = await document.save();
        res.send(result);
        }
        catch(err){
        res.error(500,`{"error": ${err}}`);
        }
    };
// Handle lion delete form on DELETE.
exports.lion_delete = function(req, res) {
res.send('NOT IMPLEMENTED: lion delete DELETE ' + req.params.id);
};
// Handle lion update form on PUT.
exports.lion_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: lion update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.lion_view_all_Page = async function(req, res) {
    try{
    thelions = await lion.find();
    res.render('lions', { title: 'lion Search Results', results: thelions });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };