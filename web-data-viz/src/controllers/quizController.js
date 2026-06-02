var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
  var respostas = req.body.respostas;
  var idUsuario = req.body.idUsuario;
  var idPersonalidade = req.body.idPersonalidade;

  if (respostas == undefined) {
    res.status(400).send("respostas está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else if (idPersonalidade == undefined){
    res.status(400).send("idPersonalidade está undefined!");
  } 
  else {
    let qtdA = 0; 
    let qtdB = 0; 
    let qtdC = 0; 
    let qtdD = 0; 
    let qtdE = 0; 
    let qtdF = 0; 

    for (let i = 0; i < respostas.length; i++) {
        if (respostas[i] == "alternativaA") qtdA++;
        else if (respostas[i] == "alternativaB") qtdB++;
        else if (respostas[i] == "alternativaC") qtdC++;
        else if (respostas[i] == "alternativaD") qtdD++;
        else if (respostas[i] == "alternativaE") qtdE++;
        else if (respostas[i] == "alternativaF") qtdF++;
    }

    quizModel.cadastrar(qtdA, qtdB, qtdC, qtdD, qtdE, qtdF, idUsuario, idPersonalidade)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function obterPersonalidade(req, res) {
    var idUsuario = req.params.idUsuario;

    quizModel.buscarPersonalidadeUsuario(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function obterEstatisticas(req, res) {
    quizModel.buscarEstatisticas()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
  cadastrar,
  obterEstatisticas,
  obterPersonalidade
}