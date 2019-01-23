const handlebars = require('handlebars')
const configuration = require('../configuration');
const util = require('../util')

this.generateMainTs = sampleName => {
  const moduleSource = `import './polyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));`;

  const moduleTemplate = handlebars.compile(moduleSource);
  let moduleContent = moduleTemplate({
    sampleName: sampleName
  });

  util.writeFile(`${configuration.outputSamplesFolder}/sample-${sampleName}/src/main.ts`, moduleContent, result => {
    if (result) {
      console.error(`error`.red + ':   ', `Erro ao salvar arquivo sample-${sampleName}/src/main.ts: ${result.message}`);
    }
  });
}
