// const Joi = require('joi');

// const passwordSchema = Joi.string().min(3).max(10).alphanum();

// console.log(passwordSchema.validate('1234567789'))

const express = require('express');

const app = express();

app.use('*', (req, res) => {
  console.log('Был запрос от брайзера');
  res.send('<h1>Ну это мой HTML тебе в ответ</h1>')
});

const listener = app.listen(4444, () => {
  console.log(`Веб-сервер запущен на порте ${listener.address().port}`);
});
