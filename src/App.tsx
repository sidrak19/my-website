import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import { Background } from './Background/Background';
import { normalFontSize } from './FontUtils';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Home } from './Home/Home';
import { FlexColumnAlignCenter, Page } from './LayoutUtils';
import { Projects } from './Projects/Projects';
import { Resume } from './Resume/Resume';

const StyledRoot = styled(FlexColumnAlignCenter)({
  minHeight: '100vh',
  fontSize: normalFontSize,
  lineHeight: '1.5',
  overflow: 'hidden',
  backgroundColor: 'aliceblue',
});

const App = () => {
  const HeaderWithRouter = withRouter(Header);

  return (
    <StyledRoot>
      <Background />
      <BrowserRouter>
        <HeaderWithRouter />
        <Page>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </Page>
        <Footer />
      </BrowserRouter>
    </StyledRoot>
  );
};

export default App;
