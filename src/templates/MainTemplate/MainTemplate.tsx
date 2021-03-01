import React from 'react';
import Helmet from 'react-helmet';

import { Navbar } from 'components/navbar/Navbar';
import { Footer } from 'components/footer/Footer';
import { ThemeProvider } from 'providers/themeProvider/ThemeProvider';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// TODO dorobić useStaticQuery
const title = 'LCAR Auto Detailing Radom';
const description =
  'Specjalizujemy się w naprawach bezinwazyjnych PDR (wyciąganie wgnieceń) oraz naprawach za pomocą spotera. Dodatkowo wykonujemy korekty lakieru, polerowanie reflektorów, nanoszenie powłok kwarcowych, ceramicznych, a także wosków ochronnych';
const keywords =
  'lcar, auto, detailing, radom, usuwanie wgnieceń, koretka lakieru, polerowanie, czyszczenie, wynajem, tuning, modernizacja';
const url = 'https://www.lcar.pl/';

const MainTemplate: React.FC = ({ children }) => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: 'pl' }}>
        {/* General tags */}
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {/* <meta property="og:image" content={image} /> */}
      </Helmet>

      <ThemeProvider>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
