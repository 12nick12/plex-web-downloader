var express = require('express');
var router = express.Router();

function btoa(string){
  return new Buffer(string).toString('base64');
}

function atob(string){
  return new Buffer(string, 'base64').toString('ascii');
}

/* GET home page. */
router.get('/:id', function(req, res, next) {
  var config = require('../config');
  var db = config.init_db();

  var shows = {};

  //on fais toute les opération de base a la suite
  db.serialize(function() {

    db.each("SELECT i.id as id, t.hints as hints, i.year as year"
    + " FROM media_items t, metadata_items i "
    + " WHERE t.metadata_item_id = i.id AND t.library_section_id = ? "
    ,req.params.id, function(err, row) {

        //découpage des hints
        var params = {};
        var tab = row.hints.split('&');
        tab.forEach(function(val,index,table){
          var tab2 = val.split('=');
          params[tab2[0]] = decodeURIComponent(tab2[1]);
        });
        row.info_meta = params;

        var id = btoa(row.id);
        shows[id] = {
          'nom': params.show,
          'id': id
        };
        
        if(row.year != '' && row.year != null)
          show[id].year = row.year;
    },
    //aprés toute les opération de la base
    function() {
        console.log(shows);
        res.render('show_list', { title: 'Liste des séries',shows: shows });
    });

  });

  db.close();
});

module.exports = router;
