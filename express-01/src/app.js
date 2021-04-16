const express = require('express');
const app = express();
const morgan = require('morgan');
const config = require('./config');
const authRoutes = require('./routes/auth');
const heladosRoutes = require('./routes/helados');

const port = config.port;


app.use(morgan('tiny'));
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/helados', heladosRoutes);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})