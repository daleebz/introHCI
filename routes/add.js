var data = require("../data.json");
var google = require("../google.json");
var qualcomm = require("../qualcomm.json");
var apple = require("../apple.json");
var teradata = require("../teradata.json");
var yahoo = require("../yahoo.json");

var allVibes = google["vibes"]+yahoo["vibes"]+qualcomm["vibes"]+apple["vibes"]+teradata["vibes"];

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

   if (newvibe.company=="Google") {

    google["vibes"].unshift(newvibe);
    res.render('add', google);

   }
   else if (newvibe.company=="Apple") {

    apple["vibes"].unshift(newvibe);
    res.render('add', apple);

   }
   else if (newvibe.company=="Teradata") {

    teradata["vibes"].unshift(newvibe);
    res.render('add', teradata);

   }
   else if (newvibe.company=="Qualcomm") {

    qualcomm["vibes"].unshift(newvibe);
    res.render('add', qualcomm);

   }

   else {

    yahoo["vibes"].unshift(newvibe);
    res.render('add', yahoo);

   }

   data["vibes"].unshift(newvibe);

 };
