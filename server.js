const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Bear = require("./app/models/bear");

mongoose.connect("mongodb://localhost:27017/more_test", { useNewUrlParser: true });
let bear = require("./app/models/bear");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8000;
let router = express.Router();

router.use((req, res, next) => {
    console.log("something is happening.");
    next();
});



router.route("/bears")
  .post((req, res) => {
    let bear = new Bear ();
    console.log(req, res);
})

app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);

