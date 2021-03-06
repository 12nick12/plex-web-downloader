var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  var config = res.locals.config;//require('../config');
  var db = config.init_db();

  var data = [];
  //we do all the basic operations following
  db.serialize(function() {

    //db.run("CREATE TABLE if not exists user_info (info TEXT)");
    //var stmt = db.prepare("INSERT INTO user_info VALUES (?)");
    //for (var i = 0; i < 10; i++) {
    //    stmt.run("Ipsum " + i);
    //}
    //stmt.finalize();

    db.each("SELECT id, name, section_type as type"
    + " FROM library_sections ORDER BY name ASC", function(err, row) {
      data.push(row);
    },
    //after all the operations of the database
    function() {
        res.render('index', { title: 'List of videos',channels: data, presentation: config.presentation });
    });

  });

  db.close();
});

module.exports = router;
