import React from 'react';

import { useStyles } from 'styles/index.styles';
import { HeroBanner } from 'components/heroBanner/HeroBanner';
import { AboutCompany } from 'components/aboutCompany/AboutCompany';
import { CompanyPros } from 'components/companyPros/CompanyPros';
import { CompanyOffer } from 'components/companyOffer/CompanyOffer';

const IndexPage = () => {
  const styles = useStyles();

  return (
    <div>
      <HeroBanner />
      <AboutCompany />
      <CompanyPros />
      <CompanyOffer />
    </div>
  );
};

export default IndexPage;
