var data = require("../data.json");

exports.addFriend = function(req, res) {    

   var newvibe = {
        "name": req.query.name,
        "project": req.query.project,
        "managment": req.query.management,
        "team": req.query.team,
        "workenvirontment": req.query.workenvironment,
        "company": req.query.company,
        "quality": req.query.quality,
       
   };

   data["vibes"].unshift(newvibe);
   res.render('company', data);

 };
