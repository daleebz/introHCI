var data = require("../data.json");

exports.addFriend = function(req, res) {    

   res.render('add', data);

   var newvibe = {
        "name": req.query.name,
        "project": req.query.project,
        "managment": req.query.management,
        "team": req.query.team,
        "workenvirontment": req.query.workenvironment,
   };

   data["vibes"].push(newvibe);
 };
