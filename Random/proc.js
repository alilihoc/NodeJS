const { spawn } = require('child_process');

module.exports = function() {
    const callLs = () => {
      const ls = spawn('find', ['./']);

      ls.stdout.on("data", (data) => {
        console.log(`Stdout: ${data}`);
      });

      ls.stderr.on("data", (data) => {
        console.log(`Stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
      });
    };

    callLs();

}
