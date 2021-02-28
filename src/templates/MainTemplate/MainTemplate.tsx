import React from 'react';
import Helmet from 'react-helmet';
import smoothscroll from 'smoothscroll-polyfill';

import { Navbar } from 'components/navbar/Navbar';
import { Footer } from 'components/footer/Footer';
import { ThemeProvider } from 'providers/themeProvider/ThemeProvider';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

smoothscroll.polyfill();

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

      <ThemeProvider>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
