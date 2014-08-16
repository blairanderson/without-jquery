// HOW TO RUN
// $ node working.js
var fs = require('fs');
var async = require('async');
var handlebars = require('handlebars');
var methodsList = require('./method.js');

// read the file and use the callback to render
fs.readFile('help.hbs', function (err, data) {
  if (!err) {
    // make the buffer into a string
    var template = handlebars.compile(data.toString());

    async.each(methodsList, function (m, next) {
      var filename, writer, output, method;

      filename = m.href.replace("html", "md");
      method = m.href.replace('docs/', "").replace(".html", "");
      writer = fs.createWriteStream(filename);

      writer.on('error', function (err) {
        console.log("ERROR" + err)
      });

      output = template({
        title: m.title,
        description: m.description,
        method: method,
        href: m.href,
        filename: filename
      });

      writer.end(output, next(null, filename));

    }, function (err, res) {
      console.log("err", err);
      console.log("res", res);
    });
  } else {
    throw new Error(err);
  }
});