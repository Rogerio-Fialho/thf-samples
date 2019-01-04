const handlebars = require('handlebars')
const configuration = require('../configuration');
const util = require('../util');
const thfPackage = require('../../../thf-portal/package.json');
const version = configuration.version;
const dependencies = thfPackage.dependencies;
const devDependencies = thfPackage.devDependencies;
const angularVersion = dependencies['@angular/core'];
const rxjsVersion = dependencies.rxjs;
const zoneJsVersion = dependencies['zone.js'];
const coreJsVersion = dependencies['core-js']
const angularDevkitVersion = devDependencies['@angular-devkit/build-angular'];
const typesNodeVersion = devDependencies['@types/node'];
const codelizerVersion = devDependencies.codelyzer;
const protractorVersion = devDependencies.protractor;
const tsNodeVersion = devDependencies['ts-node'];
const tsLintVersion = devDependencies.tslint;
const typescriptVersion = devDependencies.typescript;

module.exports = {
  generatePackageJson: function (sampleName) {
    const moduleSource = `{
  "name": "{{sampleName}}",
  "version": "{{version}}",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "{{angularVersion}}",
    "@angular/common": "{{angularVersion}}",
    "@angular/compiler": "{{angularVersion}}",
    "@angular/core": "{{angularVersion}}",
    "@angular/forms": "{{angularVersion}}",
    "@angular/platform-browser": "{{angularVersion}}",
    "@angular/platform-browser-dynamic": "{{angularVersion}}",
    "@angular/router": "{{angularVersion}}",
    "@totvs/thf-ui": "{{version}}",
    "core-js": "{{coreJsVersion}}",
    "rxjs": "{{rxjsVersion}}",
    "zone.js": "{{zoneJsVersion}}"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "{{angularDevkitVersion}}",
    "@angular/cli": "{{angularVersion}}",
    "@angular/compiler-cli": "{{angularVersion}}",
    "@angular/language-service": "{{angularVersion}}",
    "@types/node": "{{typesNodeVersion}}",
    "codelyzer": "{{codelizerVersion}}",
    "protractor": "{{protractorVersion}}",
    "ts-node": "{{tsNodeVersion}}",
    "tslint": "{{tsLintVersion}}",
    "typescript": "{{typescriptVersion}}"
  }
}`;

    const moduleTemplate = handlebars.compile(moduleSource);
    let moduleContent = moduleTemplate({
      sampleName: sampleName,
      version: version,
      angularVersion: angularVersion,
      rxjsVersion: rxjsVersion,
      coreJsVersion: coreJsVersion,
      zoneJsVersion: zoneJsVersion,
      angularDevkitVersion: angularDevkitVersion,
      typesNodeVersion: typesNodeVersion,
      codelizerVersion: codelizerVersion,
      protractorVersion: protractorVersion,
      tsNodeVersion: tsNodeVersion,
      tsLintVersion: tsLintVersion,
      typescriptVersion: typescriptVersion
    });

    util.writeFile(`${configuration.outputSamplesFolder}/sample-${sampleName}/package.json`, moduleContent, result => {
      if (result) {
        console.error(`error`.red + ':   ', `Erro ao salvar arquivo sample-${sampleName}/package.json: ${result.message}`);
      }
    });
  }

}
