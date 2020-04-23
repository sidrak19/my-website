import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About } from './About';
import './App.css';
import { Projects } from './Projects';
import { Resume } from './Resume';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={About} exact />
          <Route path="/resume" component={Resume} exact />
          <Route path="/projects" component={Projects} exact />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
