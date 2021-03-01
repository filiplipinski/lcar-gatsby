import React from 'react';
import Helmet from 'react-helmet';

import { Navbar } from 'components/navbar/Navbar';
import { Footer } from 'components/footer/Footer';
import { ThemeProvider } from 'providers/themeProvider/ThemeProvider';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainTemplate: React.FC = ({ children }) => {
  return (
    <>
      <Helmet lang="pl" title="LCAR Auto Detailing" />

      <ThemeProvider>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
