var express = require("express"), app = express(), path = require("path");
app.use(express["static"](__dirname + "/public"));
app.listen(3000);
console.log("localhost : 3000 connected");