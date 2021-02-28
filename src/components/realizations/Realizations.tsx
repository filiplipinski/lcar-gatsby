import React, { useMemo } from 'react';
import { Typography, Box } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from 'components/container/Container';

import { useStyles } from './Realizations.styles';

export const query = graphql`
  query RealizationsImgs {
    allFile(filter: { name: { regex: "/car/" }, relativeDirectory: { eq: "realizations" } }) {
      edges {
        node {
          base
          childImageSharp {
            fluid(maxWidth: 500, quality: 90) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`;

export const Realizations = () => {
  const styles = useStyles();
  const realizationsImgsData = useStaticQuery<GatsbyTypes.RealizationsImgsQuery>(query);

  const sortedRealizationImgsData = useMemo(
    () =>
      [...realizationsImgsData.allFile.edges].sort((a, b) =>
        a.node.base.localeCompare(b.node.base),
      ),
    [realizationsImgsData],
  );

  return (
    <Container className={styles.container}>
      <Box pt={4} pb={6}>
        <Typography variant="h2" align="center">
          Realizacje
        </Typography>
      </Box>

      <div className={styles.imageGrid}>
        {sortedRealizationImgsData.map((image, index) => {
          if (!image.node.childImageSharp?.fluid) return null;
          const filename = image.node.base.split('.')[0];

          return (
            <Img
              key={`${filename}-${index}`}
              fluid={image.node.childImageSharp?.fluid}
              alt={filename}
              className={styles.imageItem}
            />
          );
        })}
      </div>
    </Container>
  );
};
