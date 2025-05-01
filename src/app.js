const express = require('express');
const path = require('path');
const risks = require('./data/risks.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use('/scripts', express.static(path.join(__dirname, '../scripts')));
app.use('/styles', express.static(path.join(__dirname, '../styles')));

app.get('/api/risks/:category', (req, res) => {
  const category = req.params.category;
  const data = risks[category];
  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ error: 'Category not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});