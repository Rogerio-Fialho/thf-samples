const handlebars = require('handlebars')
const configuration = require('../configuration');
const util = require('../util')

this.generateSampleModuleFile = (sampleName, component) => {
  const thfComponent = (component.substring(0, 3) + '-' + component.substring(3, component.length)).toLowerCase();
  const moduleSource = `import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { {{component}}Module } from '@totvs/thf-ui/components/{{thfComponent}}';
import { AppComponent } from './app.component';

@NgModule({
imports: [
  BrowserModule,
  {{component}}Module
],
declarations: [
  AppComponent
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }`;
  
  const moduleTemplate = handlebars.compile(moduleSource);
  let moduleContent = moduleTemplate({
    docName: sampleName,
    component: component,
    thfComponent: thfComponent
  });

  util.writeFile(`${configuration.outputSamplesFolder}/sample-${sampleName}/src/app/app.module.ts`, moduleContent, result => {
    if (result) {
      console.error(`error`.red + ':   ', `Erro ao salvar arquivo sample-${sampleName}/src/app/app.module.ts: ${result.message}`);
    }
  });
}
