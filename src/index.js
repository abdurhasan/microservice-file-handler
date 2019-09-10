require('dotenv').config()
const app = require('./app');

const server = app.listen(process.env.PORT);

process.on('unhandledRejection', (reason, p) =>
  console.log('Unhandled Rejection at: Promise ', p, reason)
);
server.on('listening', () =>
  console.log(`Service_file is running on http://${process.env.HOST}:${process.env.PORT} | and Environtment : ${process.env.ENV_NAME}`)
);
