import React, { useState } from 'react';
import './App.css';
import About from './About';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Green Ecommerce</h1>
        <nav>
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('about')}>About</button>
        </nav>
      </header>
      {page === 'home' && (
        <div className="banner">
          <h2>Welcome to Green Ecommerce - Your One Stop Shop!</h2>
          <p>Find the best products at unbeatable prices.</p>
        </div>
      )}
      {page === 'about' && <About />}
      <footer>
        <p>© 2024 Green Ecommerce. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
