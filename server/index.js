const express = require('express'); // Common JS module
const quotes = require('./data/quotes');
const app = express();
const PORT = 3000;

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  return quote;
}

app.get('/quotes/unique', (req, res) => {
  const randomQuote = getRandomQuote();
  res.json(randomQuote);
});

app.listen(PORT, () => {
  console.log(`Quotes API service is runnig on PORT ${PORT}
`);
});
