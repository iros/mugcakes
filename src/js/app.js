$(function(){

  var cakes = new Miso.Dataset({
    importer : Miso.Dataset.Importers.GoogleSpreadsheet,
    parser : Miso.Dataset.Parsers.GoogleSpreadsheet,
    key : '0Al5UYaVoRpW3dEZPaG1QMWl5NTBXNGdqZkVEZmE2eEE',
    worksheet: '2'
  });

  var workingColumns = [
    "_id",
    "Mugcake name",
    "Twitter account",
    "Photo", 
    "Rating",
    "Qualitative Yumminess",
    "Instructions",
    "Microwave Wattage",
    "Microwave Time"
  ];

  var $el = $('#cakes');
  cakes.fetch().done(function() {
    cakes.each(function(cake) {
      $el.append(JST['templates/cake.html']( { 
        cake : cake,
        controls : workingColumns
      }));
    });
  });

}());