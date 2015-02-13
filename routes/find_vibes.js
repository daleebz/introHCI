var data = require('../data.json');

exports.view = function(req, res){
  res.render('find_vibes', data);
};

