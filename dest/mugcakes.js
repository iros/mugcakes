/* global $,Miso,JST */
$(function(){

  $.fn.stars = function(max) {
    return $(this).each(function() {
      // Get the value
      var val = +($(this).html());
      // Make sure that the value is in 0 - 5 range, multiply to get width
      var size = val * 16;
      // Create stars holder
      var $span = $("<span />").width(size);
      // Replace the numerical value with stars
      $(this).html($span);
    });
  };

  var cakes = new Miso.Dataset({
    importer : Miso.Dataset.Importers.GoogleSpreadsheet,
    parser : Miso.Dataset.Parsers.GoogleSpreadsheet,
    key : "0Al5UYaVoRpW3dEZPaG1QMWl5NTBXNGdqZkVEZmE2eEE",
    worksheet: "2"
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

  var $el = $("#cakes");
  cakes.fetch().done(function() {
    cakes.each(function(cake) {
      $el.append(JST["templates/cake.html"]({
        cake : cake,
        controls : workingColumns
      }));
    });

    $(".stars").stars(10);
  });

  

}());