import React from 'react';
import './App.css';

function Greeting() {
  const name = "Світ";
  const date = new Date().toLocaleDateString('uk-UA');

  return (
    <div className="greeting">
      <h1>Привіт, {name}!</h1>
      <p>Ласкаво просимо</p>
      <p className="date">Сьогодні: {date}</p>
    </div>
  );
}

export default Greeting;
