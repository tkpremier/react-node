var fs = require('fs');
var sass = require('node-sass');
var postCSS = require('postcss');
var autoPrefixer = require('autoprefixer');
var winston = require('winston');

const secondWrite = './assets/styles/styles2.css';

function compile(file, outFile = './assets/styles/styles.css') {
  sass.render(
    {
      file,
      outFile
    },
    (err, result) => {
      try {
        postCSS([autoPrefixer({ grid: 'autoplace', from: undefined })])
        .process(result.css, { from: file, to: outFile } )
        .then((res) => {
          console.log('done: ', res, outFile);
          fs.writeFile(outFile, res.css, (error) => {
            if (error) {
              console.error('error', 'file write error: ', error);
              throw Error;
            }
            console.log('writeFileDone: ');
            // } else {
            //   // winston.log('info', 'successfully saved css');
            //   // fs.writeFile(buildPath + '.map', res.map, (e) => {
            //   //   if (e) {
            //   //     winston.log('error', 'error: ', e);
            //   //     throw e;
            //   //   } else {
            //   //     winston.log('info', 'sucessfully saved map');
            //   //   }
            //   // });
            // }
          });
        });
      } catch (err) {
        if (err) {
          console.error('error: ', err);
          throw err;
        }
      }
     }
  );
};
compile(process.argv[2], process.argv[3]);
