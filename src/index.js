const express = require('express');

const app = express();
const port = 3333;

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

console.log(`App listen in http://localhost:${port}`);

app.listen(port);
