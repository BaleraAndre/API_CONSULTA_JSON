const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pessoasRoutes = require('./routes');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/api', pessoasRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});