const configuration = require('./configuration');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const getDirName = require('path').dirname;

module.exports = {

  /**
   * Function to return all project's names
   * @return {string} project's names
   */
  projectsNames: () => {
    let names = [];

    configuration.thfProjects.forEach(project => names.push(project.name));

    return names;
  },
  writeFile: (path, contents, cb) => {
    mkdirp(getDirName(path), function (err) {
      if (err) return cb(err);
      fs.writeFile(path, contents, cb);
    });
  },

  /** Return projects */
  projects: configuration.thfProjects,

  /** Return configurations */
  configurations: configuration,

  /**
   * Function to read all files from path with regular expression filter
   * @param {*} paths paths folder
   * @param {*} filter regular expression filter
   */
  readFilesFromPaths: (filter) => {
    let fileNames = []

    configuration.thfProjects.forEach(project => {

      fromDir(`${configuration.sourceFolder}/${project.name}/src/`, filter, filename => {
        fileNames.push(filename.replace('../', ''));
      })
    });
    return fileNames;
  }
}
 /**
 * Function to read recursive all files from folder
 * @param {*} startPath folder to search
 * @param {*} filter filter files
 * @param {*} callback callback function
 */
function fromDir(startPath, filter, callback) {
  if (!fs.existsSync(startPath)) {
    console.error('Diretório não encontrado', startPath);
    return;
  }
  var files = fs.readdirSync(startPath);
  for (var i = 0; i < files.length; i++) {
    var filename = path.join(startPath, files[i]);
    var stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      fromDir(filename, filter, callback); //recurse
    } else if (filter.test(filename.replace(/\\/g, '/'))) {
      callback(filename.replace(/\\/g, '/'));
    }
  };
}
