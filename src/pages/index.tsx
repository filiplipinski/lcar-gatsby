import React from 'react';

import { HeroBanner } from 'components/heroBanner/HeroBanner';
import { AboutCompany } from 'components/aboutCompany/AboutCompany';
import { CompanyPros } from 'components/companyPros/CompanyPros';
import { CompanyOffer } from 'components/companyOffer/CompanyOffer';
import { Realizations } from 'components/realizations/Realizations';

const IndexPage = () => {
  return (
    <div>
      <HeroBanner />
      <AboutCompany />
      <CompanyPros />
      <CompanyOffer />
      <Realizations />
    </div>
  );
};

export default IndexPage;
