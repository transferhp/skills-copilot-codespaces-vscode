// create web server
import express from 'express';
const app = express();
const port = 3000;

// create comments object
const comments = [
  { name: 'John', comment: 'Hello, World!' },
  { name: 'Jane', comment: 'How are you?' },
  { name: 'Tom', comment: 'I am fine, thank you.' },
];

// create route
app.get('/comments', (_, res) => {
  res.json(comments);
});

// start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});