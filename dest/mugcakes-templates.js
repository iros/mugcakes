this["JST"] = this["JST"] || {};

this["JST"]["templates/cake.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="cake">\n  <div class="details">\n    <h3><span class="bold"><a href="?cake=' +
((__t = ( cake['Mugcake name'])) == null ? '' : __t) +
'">' +
((__t = ( cake['Mugcake name'] )) == null ? '' : __t) +
'</a></span></h3>\n    <div class="by">\n      By <a href="http://twitter.com/' +
((__t = ( cake['Twitter account'].slice(1) )) == null ? '' : __t) +
'">' +
((__t = ( cake['Twitter account'] )) == null ? '' : __t) +
'</a>\n    </div>\n    <hr>\n\n    <span class="detail rating ' +
((__t = ( cake['Rating'] >= 7 ? 'good' : (cake['Rating'] > 3 ? 'medium' : 'bad') )) == null ? '' : __t) +
'">\n      Rating: <span class="stars">' +
((__t = ( cake['Rating'] )) == null ? '' : __t) +
'</span>\n    </span>\n    ';
 if (cake['Qualitative Yumminess'] !== null) { ;
__p += '\n      <span class="detail">Qualitative Yumminess: ' +
((__t = ( cake['Qualitative Yumminess'] )) == null ? '' : __t) +
'</span>\n    ';
 } ;
__p += '\n    \n    <span class="detail">\n      Cook time: ' +
((__t = ( cake['Microwave Time'] )) == null ? '' : __t) +
' \n      ';
 if (cake['Microwave Wattage']) { ;
__p += '\n        in a ' +
((__t = ( cake['Microwave Wattage'] )) == null ? '' : __t) +
' microwave.\n      ';
 } ;
__p += '\n    </span>\n\n    <h3>Ingredients</h3>\n    ';
 _.each(cake, function(val, key) { ;
__p += '\n      ';
 if (controls.indexOf(key) === -1 && val !== null) { ;
__p += '\n        <span class="detail">' +
((__t = ( key )) == null ? '' : __t) +
': ' +
((__t = ( val )) == null ? '' : __t) +
'</span>\n      ';
 } ;
__p += '\n    ';
 }); ;
__p += '\n\n    ';
 if (cake['Instructions'] !== null) { ;
__p += '\n      <h3>Instructions</h3>  \n      <p>' +
((__t = ( cake['Instructions'] )) == null ? '' : __t) +
'</p>\n    ';
 } ;
__p += '\n  </div>\n\n  <div class="photo">\n    ';
 if (cake['Photo']) { ;
__p += '\n      <img src="' +
((__t = ( cake['Photo'] )) == null ? '' : __t) +
'" width="300" alt=""/>\n    ';
 } else { ;
__p += '\n      <img src="img/mugcake.jpg" width="300" alt=""/>\n    ';
 } ;
__p += '\n  </div>\n</div>';

}
return __p
};