require('dotenv').config();
const express = require('express');
const request = require('request');
const app = express();
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
// let http = require('http');
let formidable = require('formidable');
let mv = require('mv');
let fs = require("fs");
let path = require('path');
// const {ObjectId} = require('mongodb');
const config = require('./db');

const tensorflow = require('./service/TensorFlowService.js')
const vision = require('./service/Vision.js')

const Customer = require('./models/customer.js');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

const client = mongodb.MongoClient;

function imgToBin(img_path, callback) {
    fs.readFile(img_path, function(err, data) {
	  if (err) throw err;
	  // Encode to base64
	  callback(new Buffer.from(data, 'binary'));
	});
}

client.connect(config.DB, function(err, client)
{
	if (err)
		console.log('Impossible to connect to mongodb !')
	else
	{
	    console.log('connected!!');

		app.get('/', (req, res) => {
		   res.render('index.ejs')
		});

		app.get('/test', (req, res) => {

			vision.test(req.query.url, function(result) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(result));
			})
		});

		app.post('/fileupload', (req, res) => {

		   let form = new formidable.IncomingForm();
		   form.parse(req, function (err, fields, files) {
		       let oldpath = files.filetoupload.path;
		       let newpath = path.join(__dirname, './public/' + files.filetoupload.name);
		       mv(oldpath, newpath, function (err) {
		           if (err) throw err;
		           tensorflow.reco(newpath, function(result){
		           	  res.render('result.ejs', {path: newpath, result: result});
		           })
		       });
		   });
		});

		app.listen(process.env.PORT, function(){
		    console.log('Your node js server is running on PORT:',process.env.PORT);
		});
	}
});

