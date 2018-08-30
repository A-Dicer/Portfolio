//----------------------------- Requirements --------------------------------------------
const express        = require("express");
const bodyParser     = require("body-parser");
const mongoose       = require("mongoose");
const routes         = require("./routes");

//------------------------------- Express -----------------------------------------------
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));
app.use(routes);

//------------------------------- Mongoose ----------------------------------------------
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/portfolio",
  { useMongoClient: true }
);

//----------------------------- Start Server --------------------------------------------
const PORT = process.env.PORT || 3001;
app.listen(PORT, function(err) { 
  if (err) console.log(err); 
  else console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`); 
});