const thfVersion = require('../package.json').version;

module.exports = {

  /** Base folder that contains THF Projects */
  sourceFolder: './../',

  /** Version of thf ( package.json version ) */
  version: thfVersion,


  /** Folder of THF Projects do samples */
  thfProjects: [
    {
      name: 'thf',
      version: thfVersion
    },
    {
      name: 'thf-kendo',
      version: thfVersion
    },
    {
      name: 'thf-code-editor',
      version: thfVersion
    }
  ],

  /** Folder that contains samples */
  outputSamplesFolder: './samples',

}
