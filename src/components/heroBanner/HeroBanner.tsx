import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Typography, Box } from '@material-ui/core';
import Img from 'gatsby-image';

import { useStyles } from './HeroBanner.styles';

export const query = graphql`
  query HeroImg {
    allFile(filter: { name: { regex: "/banner/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
              originalName
            }
          }
        }
      }
    }
  }
`;

export const HeroBanner = () => {
  const styles = useStyles();
  const heroImgData = useStaticQuery<GatsbyTypes.HeroImgQuery>(query);

  const bannerFluid = useMemo(() => {
    const foundImg = heroImgData.allFile.edges.find((edge) => edge.node.childImageSharp?.fluid?.originalName === 'banner.jpg');
    return foundImg?.node.childImageSharp?.fluid;
  }, []);

  const bannerShadowFluid = useMemo(() => {
    const foundImg = heroImgData.allFile.edges.find((edge) => edge.node.childImageSharp?.fluid?.originalName === 'banner-shadow.png');
    return foundImg?.node.childImageSharp?.fluid;
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.textBox}>
        <Box display="flex" mb={1}>
          <Typography variant="h3">1</Typography>
          <Typography variant="h3" color="secondary">
            .
          </Typography>

          <Typography variant="h3">Profesjonalizm</Typography>
        </Box>
        <Box display="flex" mb={1}>
          <Typography variant="h3">2</Typography>
          <Typography variant="h3" color="secondary">
            .
          </Typography>

          <Typography variant="h3">Staranność</Typography>
        </Box>
        <Box display="flex" mb={1}>
          <Typography variant="h3">3</Typography>
          <Typography variant="h3" color="secondary">
            .
          </Typography>

          <Typography variant="h3">Dokładność</Typography>
        </Box>
      </div>

      {bannerFluid && <Img fluid={bannerFluid} className={styles.mainImg} />}
      {bannerShadowFluid && <Img fluid={bannerShadowFluid} className={styles.imgShadow} />}
    </div>
  );
};
