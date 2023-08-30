import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
      <Router>
          <header/>
          <main>
              <div className="container">
                <Routes />
              </div>
          </main>
          <footer/>
      </Router>
  );
}

export default App;
