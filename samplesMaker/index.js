const appModule = require('./templates/appModule');
const indexHtml = require('./templates/indexHtml');
const mainTs = require('./templates/mainTs');
const polyfillsTs = require('./templates/polyfillsTs');
const angularJson = require('./templates/angularJson');
const tsconfigJson = require('./templates/tsconfigJson');
const packageJson = require('./templates/packageJson');

const sampleName = 'thf-avatar-basic';
const component = 'ThfAvatar';

module.exports = {
  initialize: () => {
    appModule.generateSampleModuleFile(sampleName, component);
    indexHtml.generateIndexHtml(sampleName);
    mainTs.generateMainTs(sampleName);
    polyfillsTs.generatePolyfillsTs(sampleName);
    angularJson.generateAngularJson(sampleName);
    tsconfigJson.generateTsconfigJson(sampleName);
    packageJson.generatePackageJson(sampleName);
  }
}