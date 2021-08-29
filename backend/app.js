const express = require('express');
const config = require('config');

const app = express();
const PORT = config.get('port');

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server has been started on http://localhost:${PORT}`);
});