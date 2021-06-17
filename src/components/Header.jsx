import React from 'react';
import NavigationButtons from './NavigationButtons';

const Header = () => {
  return (
    <div>
      <div data-cy='header-navigation-container'>
        <h1 data-cy='header-title'>Course List</h1>
        <NavigationButtons  />
      </div>
    </div>
  );
};

export default Header;
