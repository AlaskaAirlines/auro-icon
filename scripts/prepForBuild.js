const fs = require('fs');
const bundle = 'auro-icon__bundled.js';
const alaskaBundle = 'auro-alaska__bundled.js';
const indexFile = './build/index.html';
const alaskaFile = './build/alaska.html';

// File destination.txt will be created or overwritten by default.
let copyFiles = async function() {
  fs.copyFile(`./dist/${bundle}`, `./build/${bundle}`, (err) => {
    if (err) throw err;
    console.log(`${bundle} was copied to ./build dir`);
  });

  fs.copyFile(`./dist/${alaskaBundle}`, `./build/${alaskaBundle}`, (err) => {
    if (err) throw err;
    console.log(`${alaskaBundle} was copied to ./build dir`);
  });

  fs.copyFile(`./demo/css/style.css`, `./build/css/style.css`, (err) => {
    if (err) throw err;
    console.log(`CSS was copied to ./build dir`);
  });
}

// Edit string in new index.html file
fs.readFile(indexFile, 'utf8', function (err,data) {
  copyFiles();

  if (err) {
    return console.log(err);
  }

  const element = data.replace(`../src/auro-icon.js`, `auro-icon__bundled.js`);

  fs.writeFile(indexFile, element, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});

// Edit string in new index.html file
fs.readFile(alaskaFile, 'utf8', function (err,data) {

  if (err) {
    return console.log(err);
  }

  const element = data.replace(`../src/auro-alaska.js`, `auro-alaska__bundled.js`);

  fs.writeFile(alaskaFile, element, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
