/**
 * Created by blairanderson on 8/16/14.
 */


var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

url = 'http://api.jquery.com/';

request(url, function (error, response, html) {
  var results = [];

  if (!error) {
    var $ = cheerio.load(html);
    $('article.post').each(function () {
      var data = $(this);
      results.push({
        title: data.children().first().text(),
        decription: data.children().first().text(),
        href: data.children().first().text()
      })
    });

  }
  
  fs.writeFile('output.json', JSON.stringify(results, null, 4), function (err) {
    if (err){
      console.log(err);
    }
    console.log('File success');
  })

});

