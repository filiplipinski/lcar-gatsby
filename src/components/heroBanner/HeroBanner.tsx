import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Typography, Grow } from '@material-ui/core';
import Img from 'gatsby-image';
import { Container } from 'components/container/Container';

import { useStyles } from './HeroBanner.styles';

export const query = graphql`
  query HeroImg {
    allFile(filter: { name: { regex: "/banner/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1400, quality: 85) {
              ...GatsbyImageSharpFluid_noBase64
              originalName
            }
          }
        }
      }
    }
  }
`;

const labels = ['Profesjonalizm', 'Staranność', 'Dokładność'];

export const HeroBanner = () => {
  const styles = useStyles();
  const heroImgData = useStaticQuery<GatsbyTypes.HeroImgQuery>(query);

  const bannerFluid = useMemo(() => {
    const foundImg = heroImgData.allFile.edges.find(
      (edge) => edge.node.childImageSharp?.fluid?.originalName === 'banner.jpg',
    );
    return foundImg?.node.childImageSharp?.fluid;
  }, [heroImgData]);

  const bannerShadowFluid = useMemo(() => {
    const foundImg = heroImgData.allFile.edges.find(
      (edge) => edge.node.childImageSharp?.fluid?.originalName === 'banner-shadow.png',
    );
    return foundImg?.node.childImageSharp?.fluid;
  }, [heroImgData]);

  // id start here, cause navbar is fixed
  return (
    <div id="start" className={styles.container}>
      <Container>
        <div className={styles.textBox}>
          {labels.map((label, index) => (
            <Grow in timeout={(index + 1) * 400} style={{ transformOrigin: '0 50%' }} key={label}>
              <Typography variant="h2" color="secondary" className={styles.textLine}>
                <span className={styles.number}>{index + 1}</span>
                <span className={styles.dot}>.</span> {label}
              </Typography>
            </Grow>
          ))}
        </div>
      </Container>

      {bannerFluid && <Img fluid={bannerFluid} className={styles.mainImg} />}
      {bannerShadowFluid && <Img fluid={bannerShadowFluid} className={styles.imgShadow} />}
    </div>
  );
};
