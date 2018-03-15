const express = require('express');
const app = express();

const bp = require('body-parser')
app.use(bp.json());
app.use(express.static(__dirname+'/pokeAngular/dist'));

var mongoose = require('mongoose')
mongoose.connect()

app.listen(8000, function() {
	console.log("listening on port 8000");
})