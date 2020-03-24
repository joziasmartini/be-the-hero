const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({
    evento: 'semana omnistack',
    aluno: 'jozias martini'
  });
});

app.listen(3333);