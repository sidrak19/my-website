import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { About } from './About/About';
import './App.css';
import { Header } from './Header/Header';
import { FlexColumnCenter } from './LayoutUtils';
import { Projects } from './Projects';
import { Resume } from './Resume';

const StyledRoot = styled(FlexColumnCenter)({
  /* Use combo: Light Green: A8D5BAFF, Lightest Sky: E7EBE0FF and Clear water: ABD6DFFF */
  /* For blue theme, use: #89ABE3FF and white */
  /* Ref: https://www.designwizard.com/blog/design-trends/colour-combination */
  backgroundColor: '#a8d5baff',
  minHeight: '100vh',
});

const App = () => {
  return (
    <StyledRoot>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={About} exact />
          <Route path="/resume" component={Resume} exact />
          <Route path="/projects" component={Projects} exact />
        </Switch>
      </BrowserRouter>
    </StyledRoot>
  );
};

export default App;
