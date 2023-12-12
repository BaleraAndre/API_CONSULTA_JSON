const express = require('express');
const router = express.Router();
const pessoasDAO = require('./PessoasDAO');

router.get('/pessoas/:id', (req, res) => {
  const pessoaId = parseInt(req.params.id);
  const pessoa = pessoasDAO.obterPessoaPorId(pessoaId);

  if (pessoa) {
    res.json({ pessoa });
  } else {
    res.status(404).json({ mensagem: 'Pessoa não encontrada' });
  }
});

module.exports = router;