import React from 'react';
import NavigationButtons from './NavigationButtons';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link>
      
      
      </Link>
      <div data-cy='header-navigation-container'>
        <h1 data-cy='header-title'>Course List</h1>
        <NavigationButtons  />
      </div>
    </div>
  );
};

export default Header;
