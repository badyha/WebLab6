import React from 'react';
import './App.css';
import Recipe from './components/Recipe';
import Steps from './components/Steps';

function App() {
  return (
    <div className="app">
      <Recipe />
      <Steps />
    </div>
  );
}

export default App;
