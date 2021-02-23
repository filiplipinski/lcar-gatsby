import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme';
import { Navbar } from 'components/navbar/Navbar';
import { Footer } from 'components/footer/Footer';
import { ThemeProvider as MuiThemeProvider } from 'providers/themeProvider/ThemeProvider';
import { Container } from 'components/container/Container';

const linkData = [
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap',
  },
];

const MainTemplate: React.FC = ({ children }) => {
  return (
    <>
      <Helmet lang="pl" title="LCAR Auto Detailing" link={linkData} />
      <GlobalStyle />

      <MuiThemeProvider>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </MuiThemeProvider>
    </>
  );
};

export default MainTemplate;
