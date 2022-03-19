import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import './App.css';
import { Background } from './Background/Background';
import { normalFontSize } from './FontUtils';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { FlexColumnAlignCenter, Page } from './LayoutUtils';
import { Error404 } from './404/404';
import { ThemeProviderWrapper } from './Themes/ThemeProviderWrapper';
import { Home } from './Home/Home';

const GlobalStyle = createGlobalStyle(({theme}: {theme: any}) => ({
  // scrollbar width is supported by Firefox
  scrollbarWidth: 'thin',

  '::-webkit-scrollbar': {
    WebkitAppearance: 'none',
    width: '8px',
  },

  '::-webkit-scrollbar-track': {
    background: theme.scrollerBackgroundColor,
  },

  '::-webkit-scrollbar-thumb': {
    background: theme.scrollerColor,
    '&:hover': {
      background: theme.scrollerColor,
    }
  },
}));

const Resume = React.lazy(() => import('./Resume/Resume'));
const Projects = React.lazy(() => import('./Projects/Projects'));

const StyledRoot = styled(FlexColumnAlignCenter)(({theme}) => ({
  minHeight: '100vh',
  fontSize: normalFontSize,
  lineHeight: '1.5',
  overflow: 'hidden',
  backgroundColor: theme.appBackground,
  color: theme.textColor,
}));

const App = () => {
  const HeaderWithRouter = withRouter(Header);

  return (
    <ThemeProviderWrapper>
      <GlobalStyle />
      <StyledRoot>
        <Background />
        <BrowserRouter>
          <HeaderWithRouter />
          <Page>
            <React.Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/resume" component={Resume} />
                <Route path="/projects" component={Projects} />
                <Route component={Error404} status={404} />
              </Switch>
            </React.Suspense>
          </Page>
          <Footer />
        </BrowserRouter>
      </StyledRoot>
    </ThemeProviderWrapper>
  );
};

export default App;
