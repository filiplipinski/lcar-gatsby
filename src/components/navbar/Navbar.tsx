import React, { useMemo } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';

// import { Logo } from 'components/logo/Logo';

import { useStyles } from './Navbar.styles';

export const query = graphql`
  {
    file(name: { eq: "logo" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export const Navbar = () => {
  const styles = useStyles();
  const logoImgData = useStaticQuery(query);

  const logoFluid = useMemo(() => logoImgData.file?.childImageSharp.fluid, []);

  console.log(logoFluid);
  return (
    // <S.Wrapper>
    //   <Logo color="dark" />
    // </S.Wrapper>

    <AppBar position="static" className={styles.appbar}>
      <Toolbar>
        {/* <Logo color="dark" /> */}
        {/* <LogoImage /> */}

        {/* {logoFluid && <GatsbyImage fluid={logoFluid} />} */}
      </Toolbar>
    </AppBar>
  );
};
