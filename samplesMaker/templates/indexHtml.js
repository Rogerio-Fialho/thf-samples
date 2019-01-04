const handlebars = require('handlebars')
const configuration = require('../configuration');
const util = require('../util')

module.exports = {
  generateIndexHtml: function (sampleName) {
    const htmlSampleName = sampleName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-');
    htmlSampleName.charAt(0).toUpperCase() + htmlSampleName.slice(1);
    const moduleSource = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>{{htmlSampleName}}</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <app></app>
</body>
</html>`;

    const moduleTemplate = handlebars.compile(moduleSource);
    let moduleContent = moduleTemplate({
      sampleName: sampleName,
      htmlSampleName: htmlSampleName
    });

    util.writeFile(`${configuration.outputSamplesFolder}/sample-${sampleName}/src/index.html`, moduleContent, result => {
      if (result) {
        console.error(`error`.red + ':   ', `Erro ao salvar arquivo sample-${sampleName}/src/index.html: ${result.message}`);
      }
    });
  }

}
