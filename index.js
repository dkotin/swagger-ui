const express = require('express')
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath()
const fs = require('fs')
const app = express()

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

//pass file path with /get?file=
// https://localhost:3000/get?file=loan-1.0.0-apis-swagger.yaml
app.get('/get', function(req, res) {
	const contents = fs.readFileSync(req.query.file)
	res.send(contents);
});

app.use(express.static(pathToSwaggerUi))

app.listen(3000)
