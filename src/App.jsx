import React from 'react';
import Header from './components/Header'
import {Switch, Route} from 'react-router'

const App = () => {
  return (
    <>
    <Switch>
      <Route exact patch='/'>
       <Header/>
    </Route>
    </Switch>
    
     
    </>
  );
};

export default App;
