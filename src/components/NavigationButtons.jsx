import React from 'react';
import Workshops from './buttons/Workshops';
import Testing from './buttons/Testing';

const NavigationButtons = () => {



  return (
    <div data-cy='header-navigation-buttons'>
      <Workshops
        type='button'
        data-cy='workshops-btn'
        onClick={()=> document.getElementById()}
      />
      <Testing name='Testing' />
      <button>Vue</button>
      <button>Productivity</button>
      <button>Node</button>
      <button>React</button>
    </div>
  );
};

export default NavigationButtons;
