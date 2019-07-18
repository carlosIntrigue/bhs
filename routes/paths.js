var express = require('express');
var router = express.Router();
var Handlebars = require('hbs');


/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('paths',{
    title: "My First Blog Post!",
    author: {
      id: 47,
      name: "Yehuda Katz"
    },
    body: "My first post. Wheeeee!"
  });
});

module.exports = router;
