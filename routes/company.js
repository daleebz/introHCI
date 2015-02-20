
var google = require("../google.json");
var qualcomm = require("../qualcomm.json");
var apple = require("../apple.json");
var teradata = require("../teradata.json");
var yahoo = require("../yahoo.json");
var data = require('../data.json');


exports.view = function(req, res){

  res.render('company', data);
  
};

exports.compid = function(req, res) {

	var companyid = req.params.id;

	console.log(companyid);

	if (companyid=="Google") {


    res.render('company', google);

   }
   else if (companyid=="Apple") {


    res.render('company', apple);


   }
   else if (companyid=="Teradata") {


    res.render('company', teradata);

   }
   else if (companyid=="Qualcomm") {


    res.render('company', qualcomm);

   }

   else {

    res.render('company', yahoo);

   }

}
