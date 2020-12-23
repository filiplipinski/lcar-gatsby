import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme';
import { Navbar } from 'components/navbar/Navbar';
import { Footer } from 'components/footer/Footer';

import * as S from './MainTemplate.styles';

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
      <ThemeProvider theme={theme}>
        <S.Wrapper>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </S.Wrapper>
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
