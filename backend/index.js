const express = require('express');
const dotenv = require('dotenv');

const envFile =
  process.env.NODE_ENV === 'production'
    ? '.env.production'
    : '.env.development';

dotenv.config({ path: envFile });

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    env: process.env.NODE_ENV
  });
});

app.listen(PORT, () => {
  console.log(
    `Backend rodando em ${process.env.NODE_ENV} na porta ${PORT}`
  );
});
