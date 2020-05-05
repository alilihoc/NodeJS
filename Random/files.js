const fs = require('fs');

module.exports = () => {
  var currentDirectory = process.cwd();
  //console.log(currentDirectory);

  // async
  fs.readFile('./hello.js', 'utf8', (err, result) => {
    if(result) {
      //console.log(result);
    }
  });

  // sync
  var data = fs.readFileSync('./hello.js', 'utf8');

  fs.writeFileSync('./test.txt', 'Hello world', 'utf8');

  console.log(data);
}
