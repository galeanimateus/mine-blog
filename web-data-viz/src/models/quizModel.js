var database = require("../database/config");

function cadastrar(qtdA, qtdB, qtdC, qtdD, qtdE, qtdF, idUsuario, idPersonalidade) {
  
  var instrucaoSql = `INSERT INTO quiz (qtdA, qtdB, qtdC, qtdD, qtdE, qtdF, id_usuario, id_personalidade) VALUES (${qtdA}, ${qtdB}, ${qtdC}, ${qtdD}, ${qtdE}, ${qtdF}, ${idUsuario}, ${idPersonalidade})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
function buscarPersonalidadeUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT id_personalidade 
        FROM quiz 
        WHERE id_usuario = ${idUsuario} 
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarEstatisticas() {
    var instrucaoSql = `
        SELECT id_personalidade, COUNT(DISTINCT id_usuario) as qtdUsuarios 
        FROM quiz 
        GROUP BY id_personalidade;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
  cadastrar,
  buscarPersonalidadeUsuario,
  buscarEstatisticas
}
