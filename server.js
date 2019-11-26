const express = require("express");
const nunjucks = require("nunjucks");
const server = express();

server.listen(5000, function() {
  console.log("Server is running");
});

//Server configuration

server.set("view engine", "njk");
server.use(express.static("../front-end/public"));

nunjucks.configure("../front-end/views", {
  express: server
});

// ROUTES

server.get("/", function(req, res) {
  return res.render("index");
});

server.get("/sobre", function(req, res) {
  return res.render("sobre");
});

server.get("/receitas", function(req, res) {
  return res.render("receitas");
});
