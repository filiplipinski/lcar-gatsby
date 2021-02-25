import React from 'react';

import { useStyles } from 'styles/index.styles';
import { HeroBanner } from 'components/heroBanner/HeroBanner';
import { AboutCompany } from 'components/aboutCompany/AboutCompany';
import { CompanyPros } from 'components/companyPros/CompanyPros';

const IndexPage = () => {
  const styles = useStyles();

  return (
    <div>
      <HeroBanner />
      <AboutCompany />
      <CompanyPros />
    </div>
  );
};

export default IndexPage;
