const express = require("express");
//const bodyParser = require('body-parser')
const mongoose = require("mongoose");

const app = express();
const PORT = 3005;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
//app.use(bodyParser.json());
app.use(require("./routes"));

mongoose.connect( "mongodb://127.0.0.1:27017/social",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Use this to log mongo queries being executed!
mongoose.set("debug", true);

mongoose.connection.on( "open", () => app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`)));
