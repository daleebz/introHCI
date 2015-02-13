var data = require('../data.json');

exports.view = function(req, res){
  res.render('write_vibes', data);
};