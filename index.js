const express = require('express');
const app = express();
const cors = require('cors');
const { Router } = require('express');
const { routes } = require('./src');

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

const port = process.env.PORT || '8000';

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is up at ${port}`);
});
