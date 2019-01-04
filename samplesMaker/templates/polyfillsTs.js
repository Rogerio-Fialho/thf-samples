const handlebars = require('handlebars')
const configuration = require('../configuration');
const util = require('../util')

module.exports = {
  generatePolyfillsTs: function (sampleName) {
    const moduleSource = `import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
`;

    const moduleTemplate = handlebars.compile(moduleSource);
    let moduleContent = moduleTemplate({
      sampleName: sampleName
    });

    util.writeFile(`${configuration.outputSamplesFolder}/sample-${sampleName}/src/polyfills.ts`, moduleContent, result => {
      if (result) {
        console.error(`error`.red + ':   ', `Erro ao salvar arquivo sample-${sampleName}/src/polyfills.ts: ${result.message}`);
      }
    });
  }

}
