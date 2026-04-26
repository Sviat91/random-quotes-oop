const express = require('express'); // Common JS module
const cors = require('cors');
const quotes = require('./data/quotes');
const app = express();
const PORT = 3001;

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  return quote;
}

// const corsOptions = {
//   origin: ['http://localhost:8080'],
// };

app.use(cors());

app.get('/quotes/unique', (req, res) => {
  const randomQuote = getRandomQuote();
  res.json(randomQuote);
});

app.listen(PORT, () => {
  console.log(`Quotes API service is runnig on PORT ${PORT}
`);
});
