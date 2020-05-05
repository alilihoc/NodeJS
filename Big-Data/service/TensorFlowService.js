const spawn = require("child_process").spawn;

class TensorFlowService {
	reco(img_url, callback) {
		const pyProcess = spawn('python',["/app/models/reco.py", img_url]);
		pyProcess.stdout.on('data', function(data) {
			callback(data.toString())
		});
		pyProcess.stderr.on('data', (data) => {
			console.log(data.toString())
	    });
	}
}

module.exports = new TensorFlowService();