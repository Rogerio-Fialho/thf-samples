const handlebars = require('handlebars')
const configuration = require('../configuration');
const util = require('../util')

this.generateTsconfigJson = sampleName => {
  const moduleSource = `{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "sourceMap": true,
    "declaration": false,
    "module": "es2015",
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "es5",
    "typeRoots": [
      "node_modules/@types"
    ],
    "lib": [
      "es2018",
      "dom"
    ]
  }
}`;

  const moduleTemplate = handlebars.compile(moduleSource);
  let moduleContent = moduleTemplate({
    sampleName: sampleName
  });

  util.writeFile(`${configuration.outputSamplesFolder}/sample-${sampleName}/tsconfig.json`, moduleContent, result => {
    if (result) {
      console.error(`error`.red + ':   ', `Erro ao salvar arquivo sample-${sampleName}/tsconfig.json: ${result.message}`);
    }
  });
}
