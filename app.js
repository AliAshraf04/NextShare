import express from 'express';

const app = express();

app.get('/messages', (req, res) => {
  const requestSource = req.headers['x-id'];
  console.log(`${new Date().toISOString()}: EXECUTING /messages on backend from ${requestSource}`);
  res.json([
    { id: 1, text: 'Hello All' },
    { id: 2, text: 'Hope you all have a good day!' },
  ]);
});

app.listen(8080);
