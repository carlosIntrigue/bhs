var express = require('express');
var router = express.Router();
var Handlebars = require('hbs');


Handlebars.registerHelper('list', function(items, options) {
  var out = "<ul>";

  for(var i=0, l=items.length; i<l; i++) {
    out = out + "<li>" + options.fn(items[i]) + "</li>";
  }

  return out + "</ul>";
});
/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('blockHelper',{
    people: [
      {firstName: "Yehuda", lastName: "Katz"},
      {firstName: "Carl", lastName: "Lerche"},
      {firstName: "Alan", lastName: "Johnson"}
    ]
  });
});

module.exports = router;
