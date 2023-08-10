// const Joi = require('joi');

// const passwordSchema = Joi.string().min(3).max(10).alphanum();

// console.log(passwordSchema.validate('1234567789'))

const express = require('express');

const app = express();

app.use('*', () => {
  console.log('Был запрос от брайзера');
});

const listener = app.listen(4444, () => {
  console.log(`Веб-сервер запущен на порте ${listener.address().port}`);
});
