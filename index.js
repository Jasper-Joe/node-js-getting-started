const express = require("express");
const path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.post("/rides", function (resquest, response) {
  console.log("OK");
  response.send([]);
});

app.get("/rides", function (resquest, response) {
  response.send("Success");
});
app.listen(process.env.PORT || 5000);
