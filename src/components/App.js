import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Testimony from '../pages/Testimony';
import TestimonyNew from '../pages/TestimonyNew';
import TestimonyTV from '../pages/TestimonyTV';
import NotFound from '../pages/NotFound';

function App() {
  return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={TestimonyNew} />
            <Route exact path="/testimony" component={Testimony} />
            <Route exact path="/testimony/new" component={TestimonyNew} />
            <Route exact path="/testimony/tv" component={TestimonyTV} />
            <Route exact path="/home" component={Home} />
            <Route component={NotFound} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
