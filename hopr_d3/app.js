const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const hopr = require("./routes/hopr.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", cors(), hopr);
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.listen(80,'0.0.0.0',function(){
    console.log("port is listening 80...");
});
