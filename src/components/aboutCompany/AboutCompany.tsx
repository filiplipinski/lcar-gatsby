import React, { useMemo } from 'react';
import { Box, Typography } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from 'components/container/Container';

import { useStyles } from './AboutCompany.styles';

export const query = graphql`
  query CarsImg {
    file(name: { eq: "cars" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 90) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export const AboutCompany = () => {
  const styles = useStyles();
  const imgData = useStaticQuery<GatsbyTypes.CarsImgQuery>(query);
  const imgFluid = useMemo(() => imgData.file?.childImageSharp?.fluid, [imgData]);

  return (
    <Container className={styles.wrapper}>
      <Box mb={4}>
        <Typography variant="h2" align="center">
          O firmie
        </Typography>
      </Box>

      <div className={styles.flexContainer}>
        <Typography className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada sapien id
          ultrices bibendum. Donec volutpat eleifend augue, quis feugiat est interdum sit amet.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Vestibulum ante ipsum primis in faucibus orci luctus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Pellentesque malesuada sapien id ultrices bibendum.
          <br />
          <br /> Donec volutpat eleifend augue, quis feugiat est interdum sit amet. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Vestibulum ante ipsum primis in faucibus orci luctus
        </Typography>

        <div>{imgFluid && <Img fluid={imgFluid} alt="cars" className={styles.img} />}</div>
      </div>
    </Container>
  );
};
