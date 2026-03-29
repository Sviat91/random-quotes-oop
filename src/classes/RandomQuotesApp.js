import RandomQuote from './RandomQuote.js';

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById('generate-btn');
    this.quoteTextElement = document.getElementById('quote-text');
    this.authorElement = document.getElementById('author');
    this.currentQuote = null;
    this.init();
  }
  displayQuote() {
    this.quoteTextElement.textContent = this.currentQuote.formatText();
    this.authorElement.textContent = this.currentQuote.formatAuthor();
  }
  getRandomQuote() {
    const randomQuote = RandomQuote.getRandomQuote();
    this.currentQuote = randomQuote;
    this.displayQuote(randomQuote);
  }

  init() {
    this.randomQuoteBtn.addEventListener('click', () => this.getRandomQuote());
  }
}

export default RandomQuotesApp;
