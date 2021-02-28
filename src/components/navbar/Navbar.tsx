import React, { useMemo } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from 'components/container/Container';

import { useStyles } from './Navbar.styles';

export const query = graphql`
  query LogoImg {
    file(name: { eq: "logo" }) {
      childImageSharp {
        fluid(maxWidth: 150, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export const Navbar = () => {
  const styles = useStyles();
  const logoImgData = useStaticQuery<GatsbyTypes.LogoImgQuery>(query);

  const logoFluid = useMemo(() => logoImgData.file?.childImageSharp?.fluid, [logoImgData]);

  return (
    <AppBar id="header" position="static" className={styles.appbar}>
      <Toolbar>
        <Container>
          {logoFluid && <Img fluid={logoFluid} alt="lcar logo" className={styles.logo} />}
        </Container>
      </Toolbar>
    </AppBar>
  );
};
