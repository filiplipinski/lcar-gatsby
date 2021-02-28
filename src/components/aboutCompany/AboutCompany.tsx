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
    <Container id="about-company" className={styles.wrapper}>
      <Box mb={4}>
        <Typography variant="h2" align="center">
          O firmie
        </Typography>
      </Box>

      <div className={styles.flexContainer}>
        <Typography className={styles.text}>
          Firma specjalizuje się w naprawach bezinwazyjnych <strong>PDR</strong> (wyciąganie
          wgnieceń) oraz naprawach inwazyjnych za pomocą spotera. Dodatkowo wykonujemy korekty
          lakieru, polerowanie reflektorów, nanoszenie powłok kwarcowych, ceramicznych, wosków
          ochronnych. <br />U nas wykonasz wszystko od A do Z. Naprawiamy szkody parkingowe,
          usuwanie zarysowań, spawamy plastiki, zderzaki, naprawiamy odpryski na szybach,
          lakierujemy skóry i plastiki. Obszywamy równie kierownice i wykonujemy inne usługi
          tapicerskie.
          <br /> <br />
          Firma <strong>LCAR</strong> to również wynajem samochodów osobowych, busów oraz wywrotek.
          Prowadzimy usługę Door to Door, zostawiając u klienta wybrane auto zastępcze.
        </Typography>

        <div>{imgFluid && <Img fluid={imgFluid} alt="cars" className={styles.img} />}</div>
      </div>
    </Container>
  );
};
