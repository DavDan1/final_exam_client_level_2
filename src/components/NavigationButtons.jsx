import React from 'react';

const NavigationButtons = () => {
  return (
    <div data-cy='header-navigation-buttons'>
      <button data-cy='workshops-btn'>Workshops</button>
      <button>Testing</button>
      <button>Vue</button>
      <button>Productivity</button>
      <button>Node</button>
      <button>React</button>
    </div>
  );
};

export default NavigationButtons;
