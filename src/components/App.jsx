import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import RedditClone from './Reddit-Clone';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route path='/' component={RedditClone} />
        <Route component={Error404}/>
      </Switch>
      <h1 style={{height: '50px'}}></h1>
    </div>
  );
}

export default App;
