import React, { useState } from 'react';
import Slider from 'react-slick';
import { Typography, useTheme, useMediaQuery } from '@material-ui/core';

import { Container } from 'components/container/Container';
import { ExperienceIcon } from 'assets/icons/ExperienceIcon';
import { HappyClientsIcon } from 'assets/icons/HappyClientsIcon';
import { BestNo1Icon } from 'assets/icons/BestNo1Icon';
import { SliderDot } from 'components/sliderDot/SliderDot';

import { useStyles } from './CompanyPros.styles';

export const CompanyPros = () => {
  const styles = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Container className={styles.container}>
      <Slider
        speed={500}
        infinite
        dots
        autoplay
        slidesToShow={isDesktop ? 3 : 1}
        slidesToScroll={1}
        arrows={false}
        beforeChange={(current, next) => setActiveSlide(next)}
        customPaging={(i) => (
          <SliderDot isActive={i === activeSlide} onClick={() => setActiveSlide(i)} />
        )}
      >
        <div className={styles.sliderItem}>
          <ExperienceIcon />
          <Typography variant="h3" align="center" className={styles.title}>
            Doświadczenie
          </Typography>
          <Typography align="center">
            <strong>15 lat</strong> firmy na rynku i niezliczona ilość powierzonych nam zadań dla
            naszych klientów
          </Typography>
        </div>
        <div className={styles.sliderItem}>
          <HappyClientsIcon />
          <Typography variant="h3" align="center" className={styles.title}>
            Zadowoleni klienci
          </Typography>
          <Typography align="center">
            Gwarancja zadowolenia - każdy Klient wychodzi od nas pełni satysfakcji
          </Typography>
        </div>
        <div className={styles.sliderItem}>
          <BestNo1Icon />
          <Typography variant="h3" align="center" className={styles.title}>
            Gwarancja jakości
          </Typography>
          <Typography align="center">Najlepszy zespół i sprzęt do nasz klucz do sukcesu</Typography>
        </div>
      </Slider>
    </Container>
  );
};
