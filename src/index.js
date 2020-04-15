const express = require('express');
const { uuid } = require('uuidv4');

const app = express();
const port = 3333;

const techs = [];

app.use(express.json());

app.get('/techs', (req, res) => {
  const { title } = request.query;
  const results = title
    ? techs.filter((tech) => tech.title.includes(title))
    : techs;
  return res.json(results);
});

app.post('/techs', (req, res) => {
  const { title, owner } = req.body;

  const tech = { id: uuid(), title, owner };
  techs.push(tech);

  return res.json(tech);
});

app.put('/techs/:id', (req, res) => {
  const { id } = req.params;
  const { title, owner } = req.body;

  const techIndex = techs.findIndex((tech) => tech.id === id);

  if (techIndex < 0) {
    return res.status(400).json({ error: 'Technology not found' });
  }

  const tech = {
    id,
    title,
    owner,
  };

  techs[techIndex] = tech;
  return res.json(tech);
});

app.delete('/techs/:id', (req, res) => {
  const { id } = req.params;

  const techIndex = techs.findIndex((tech) => tech.id === id);

  if (techIndex < 0) {
    return res.status(400).json({ error: 'Technology not found' });
  }

  techs.splice(techIndex, 1);
  return res.status(200).send();
});

app.listen(port, () => {
  console.log(`App listening in http://localhost:${port} 🤘🚀`);
});
