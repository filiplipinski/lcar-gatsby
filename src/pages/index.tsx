import React from 'react';

import { useStyles } from 'styles/index.styles';
import { HeroBanner } from 'components/heroBanner/HeroBanner';
import { AboutCompany } from 'components/aboutCompany/AboutCompany';

const IndexPage = () => {
  const styles = useStyles();

  return (
    <div>
      <HeroBanner />
      <AboutCompany />
    </div>
  );
};

export default IndexPage;
