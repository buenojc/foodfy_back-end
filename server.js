const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const recipes = require("./data");

server.listen(5000, function () {
  console.log("Server is running");
});

//Server configuration

server.set("view engine", "njk");
server.use(express.static("../frontend/public"));

nunjucks.configure("../frontend/views", {
  express: server,
  autoescape: false,
  noCache: true,
});

// ROUTES

server.get("/", function (req, res) {
  return res.render("index", { recipes });
});

server.get("/sobre", function (req, res) {
  return res.render("sobre");
});

server.get("/receitas", function (req, res) {
  return res.render("receitas", { recipes });
});

server.get("/receitas/:index", function (req, res) {
  const recipeIndex = req.params.index;
  const recipe = recipes[recipeIndex];

  if (!recipe) {
    return res.send("Receita não encontrada");
  }
  return res.render("receita", { recipe });
});
