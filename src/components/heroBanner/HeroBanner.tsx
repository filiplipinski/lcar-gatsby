import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Typography } from '@material-ui/core';
import Img from 'gatsby-image';
import { Container } from 'components/container/Container';

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
    const foundImg = heroImgData.allFile.edges.find(
      (edge) => edge.node.childImageSharp?.fluid?.originalName === 'banner.jpg',
    );
    return foundImg?.node.childImageSharp?.fluid;
  }, []);

  const bannerShadowFluid = useMemo(() => {
    const foundImg = heroImgData.allFile.edges.find(
      (edge) => edge.node.childImageSharp?.fluid?.originalName === 'banner-shadow.png',
    );
    return foundImg?.node.childImageSharp?.fluid;
  }, []);

  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.textBox}>
          <Typography variant="h2" color="secondary" className={styles.textLine}>
            <span className={styles.number}>1</span>
            <span className={styles.dot}>.</span> Profesjonalizm
          </Typography>
          <Typography variant="h2" color="secondary" className={styles.textLine}>
            <span className={styles.number}>2</span>
            <span className={styles.dot}>.</span> Staranność
          </Typography>
          <Typography variant="h2" color="secondary" className={styles.textLine}>
            <span className={styles.number}>3</span>
            <span className={styles.dot}>.</span> Dokładność
          </Typography>
        </div>
      </Container>

      {bannerFluid && <Img fluid={bannerFluid} className={styles.mainImg} />}
      {bannerShadowFluid && <Img fluid={bannerShadowFluid} className={styles.imgShadow} />}
    </div>
  );
};
