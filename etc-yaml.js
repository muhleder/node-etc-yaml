var yaml = require('js-yaml');
var fs = require('fs');

exports.attach = function() {
  var etc = this;

  etc.parseYAML = function(filePath) {
    var data = fs.readFileSync(filePath, 'utf8');
    return yaml.load(data);
  };

  etc.parsers.yaml = etc.parseYAML;
  etc.parsers.yml = etc.parseYAML;
};
