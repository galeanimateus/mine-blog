var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/:empresaId", function (req, res) {
  quizController.buscarquizPorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
  quizController.cadastrar(req, res);
})

module.exports = router;