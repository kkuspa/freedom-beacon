/*
 * the routes for the messages resource.
 */

var data = require('../data.json');

exports.show = function(req, res) {
    var friend = data['flock'][req.params.id];
    friend['id'] = req.params.id;
    
    res.render('conversation', {'friend': friend});
};