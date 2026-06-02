var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/obterPersonalidade/:idUsuario", function (req, res) {
  quizController.obterPersonalidade(req, res);
});

router.get("/obterEstatisticas", function (req, res) {
    quizController.obterEstatisticas(req, res);
});

router.post("/cadastrar", function (req, res) {
  quizController.cadastrar(req, res);
});

module.exports = router;