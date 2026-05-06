import React from 'react';

function Steps() {
  const steps = [
    'Почистити і нарізати картоплю',
    'Варити картоплю в соленій воді 15-20 хвилин',
    'Злити воду і помняти картоплю',
    'Додати гарячого молока поступово',
    'Додати масло і змішати',
    'Посолити за смаком'
  ];

  return (
    <div className="steps">
      <h2>Способ приготування:</h2>
      <ol>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default Steps;
