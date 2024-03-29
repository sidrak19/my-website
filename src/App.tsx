import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import { Resume } from './Resume/Resume';
import { Projects } from './Projects/Projects';

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

const StyledRoot = styled(FlexColumnAlignCenter)(({theme}) => ({
  minHeight: '100vh',
  fontSize: normalFontSize,
  lineHeight: '1.5',
  overflow: 'hidden',
  backgroundColor: theme.appBackground,
  color: theme.textColor,
}));

const App = () => {
  return (
    <ThemeProviderWrapper>
      <GlobalStyle />
      <StyledRoot>
        <Background />
        <BrowserRouter>
          <Header />
          <Page>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="resume" element={<Resume />} />
              <Route path="projects" element={<Projects />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Page>
          <Footer />
        </BrowserRouter>
      </StyledRoot>
    </ThemeProviderWrapper>
  );
};

export default App;
