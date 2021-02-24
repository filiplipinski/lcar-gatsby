import React from 'react';
import Helmet from 'react-helmet';

import { Navbar } from 'components/navbar/Navbar';
import { Footer } from 'components/footer/Footer';
import { ThemeProvider as MuiThemeProvider } from 'providers/themeProvider/ThemeProvider';

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

      <MuiThemeProvider>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </MuiThemeProvider>
    </>
  );
};

export default MainTemplate;
