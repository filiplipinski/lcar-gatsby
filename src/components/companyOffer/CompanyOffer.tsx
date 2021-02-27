import React from 'react';
import Slider from 'react-slick';
import { Typography, Box } from '@material-ui/core';

import { Container } from 'components/container/Container';

import { useStyles } from './CompanyOffer.styles';
import { CarJobTypeSelection } from './carJobTypeSelection/CarJobTypeSelection';

export const CompanyOffer = () => {
  const styles = useStyles();

  return (
    <Container className={styles.container}>
      <Box pt={4} pb={4}>
        <Typography variant="h2" align="center">
          Oferta
        </Typography>
      </Box>

      <CarJobTypeSelection />

      <div className={styles.cardsContainer}>karty</div>
    </Container>
  );
};
