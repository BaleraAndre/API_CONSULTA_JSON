const fs = require('fs');

let pessoas = [];

try {
    const pessoasExistentes = fs.readFileSync('./db.json', 'utf-8');
    pessoas = JSON.parse(pessoasExistentes);
} catch (e) {
    console.log("ERROR");
}

function obterPessoaPorId(id) {
  const pessoaEncontrada = pessoas.find((pessoa) => pessoa.id === id);
  return pessoaEncontrada;
}

module.exports = { obterPessoaPorId };