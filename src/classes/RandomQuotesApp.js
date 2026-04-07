import RandomQuote from './RandomQuote.js';
import Quote from './Quote.js';

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById('generate-btn');
    this.randomQuoteApiBtn = document.getElementById('generate-btn-api');
    this.quoteTextElement = document.getElementById('quote-text');
    this.authorElement = document.getElementById('author');
    this.currentQuote = null;
    this.init();
  }
  displayQuote() {
    this.quoteTextElement.textContent = this.currentQuote.formatText();
    this.authorElement.textContent = this.currentQuote.formatAuthor();
  }
  changeCurrentQuote(newQuote) {
    if (newQuote instanceof Quote) {
      this.currentQuote = newQuote;
      this.displayQuote();
    }
  }

  getRandomQuote() {
    this.changeCurrentQuote(RandomQuote.getRandomQuote());
  }

  getRandomQuoteViaApi() {
    RandomQuote.getRandomQuoteAPI().then((quote) =>
      this.changeCurrentQuote(quote),
    );
  }

  init() {
    this.randomQuoteBtn.addEventListener('click', () => this.getRandomQuote());
    this.randomQuoteApiBtn.addEventListener('click', () =>
      this.getRandomQuoteViaApi(),
    );
  }
}

export default RandomQuotesApp;
