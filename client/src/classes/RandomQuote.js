import quotes from '../data/quotes.js';
import MathUtils from '../utils/MathUtils.js';
import Quote from './Quote.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  static async getQuoteOwnApi() {
    const url = 'http://localhost:3001/quotes/unique';
    const options = { headers: { 'Content-Type': 'application/json' } };
    try {
      const res = await fetch(url, options);
      const { id, text, author } = await res.json();
      return new Quote(id, text, author);
    } catch (error) {
      console.error(error);
    }
  }
  // static getRandomQuoteAPI() {
  //   const url = 'https://quoteslate.vercel.app/api/quotes/random';
  //   const options = { headers: { 'Content-Type': 'application/json' } };
  //   return fetch(url, options)
  //     .then((response) => response.json())
  //     .then(({ id, quote, author }) => new Quote(id, quote, author))
  //     .catch((error) => console.error(error));
  // }

  static async getRandomQuoteAPI() {
    const url = 'https://quoteslate.vercel.app/api/quotes/random';
    const options = { headers: { 'Content-Type': 'application/json' } };
    try {
      const response = await fetch(url, options);
      const { id, quote, author } = await response.json();
      return new Quote(id, quote, author);
    } catch (error) {
      console.error(error);
    }
  }
}

export default RandomQuote;
