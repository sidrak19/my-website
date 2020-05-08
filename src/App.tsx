import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Biodata } from './Biodata/Biodata';
import { lightGreen } from './ColorUtils';
import { normalFontSize } from './FontUtils';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Home } from './Home/Home';
import { FlexColumnCenter, Page } from './LayoutUtils';
import { Projects } from './Projects';
import { Resume } from './Resume/Resume';

const StyledRoot = styled(FlexColumnCenter)({
  backgroundColor: lightGreen,
  minHeight: '100vh',
  fontSize: normalFontSize,
  fontFamily: `'Roboto Condensed', sans-serif;`,
  lineHeight: '1.5',
  overflow: 'hidden',
});

const App = () => {
  return (
    <StyledRoot>
      <HashRouter>
        <Header />
        <Page>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects} />
            <Route path="/biodata" component={Biodata} />
          </Switch>
        </Page>
        <Footer />
      </HashRouter>
    </StyledRoot>
  );
};

export default App;
