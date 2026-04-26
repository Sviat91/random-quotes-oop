# Random Quote OOP

## Description

This is an educational application for generating random quotes using an object-oriented approach (OOP) in JavaScript. The project consists of a client part (SPA in pure JS) and a simple Node.js server that provides random quotes via API.

## Project Structure

```
random-quote-oop/
│
├── client/                # Client side (frontend)
│   ├── index.html         # Main page
│   ├── index.js           # JS entry point
│   ├── styles.css         # Styles
│   └── src/
│       ├── classes/       # Application classes
│       │   ├── Quote.js
│       │   ├── RandomQuote.js
│       │   └── RandomQuotesApp.js
│       ├── data/
│       │   └── quotes.js  # Local quotes
│       └── utils/
│           └── MathUtils.js
│
├── server/                # Server side (backend)
│   ├── index.js           # Express server
│   ├── package.json       # Server dependencies
│   └── data/
│       └── quotes.js      # Quotes for API
│
└── ReadMe.md              # Project description
```

## How to Run

### Server (Node.js)

1. Go to the `server` folder:
   ```sh
   cd server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```
   The server will be available at http://localhost:3001

### Client (Frontend)

1. Open the `client/index.html` file directly in your browser or use a local server (e.g., with Live Server in VS Code).

## Features

- **Get local quote** — the "Get local Quote" button fetches a random quote from the local array.
- **Get online quote** — the "Get online Quote" button fetches a quote from a public external API.
- **Get own API quote** — the "Get own API Quote" button fetches a quote from your local Node.js server.

## Classes & Architecture

- `Quote` — quote model (id, text, author, formatting methods).
- `RandomQuote` — static methods for getting a random quote (locally, from external API, from own API).
- `RandomQuotesApp` — connects UI and logic, handles button events.
- `MathUtils` — utility for generating random numbers.

## Usage Example

1. Start the server (see above).
2. Open the client in your browser.
3. Click the buttons to get different quotes.

## Dependencies

- Node.js, Express, CORS (server only)
- For client — just a browser, JS ES6+

## Author

Project created for educational purposes.
