import React, { useState } from 'react';
import Slider from 'react-slick';
import { Typography, Box, useTheme, useMediaQuery } from '@material-ui/core';

import { Container } from 'components/container/Container';
import { SliderDot } from 'components/sliderDot/SliderDot';

import { useStyles } from './CompanyOffer.styles';
import { CarJobTypeSelection } from './carJobTypeSelection/CarJobTypeSelection';
import { JobCard } from './jobCard/JobCard';

const cardData = [
  {
    title: 'Usuwanie wgnieceń',
    description:
      'Donec volutpat eleifend augue, quis feugiat est interdum sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
  {
    title: 'Korekta lakieru',
    description:
      'Sed semper velit at porta tempor. Vestibulum eget nisi rutrum, pretium nunc nec, mollis leo. Sed at diam ut nibh pellentesque tempus eget feugiat nulla. Etiam id consequat ligula.',
  },
  {
    title: 'Polerowanie',
    description:
      'Maecenas tempor quis libero sed tristique. Ut eleifend, purus viverra placerat placerat, ante dolor volutpat odio.',
  },
];

export const CompanyOffer = () => {
  const styles = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className={styles.container}>
      <Container>
        <Box pt={4} pb={6}>
          <Typography variant="h2" align="center">
            Oferta
          </Typography>
        </Box>

        <CarJobTypeSelection />
      </Container>

      <Container disablePaddings className={styles.cardsContainer}>
        {!isDesktop && (
          <Slider
            speed={500}
            dots
            centerMode
            centerPadding={isTablet ? '200px' : '30px'}
            arrows={false}
            beforeChange={(current, next) => setActiveSlide(next)}
            customPaging={(i) => (
              <SliderDot isActive={i === activeSlide} onClick={() => setActiveSlide(i)} />
            )}
            appendDots={(dot) => <div style={{ bottom: -40 }}>{dot}</div>}
          >
            {cardData.map(({ title, description }) => (
              <Box key={title} pl={2} pr={2} className={styles.sliderItem}>
                <JobCard title={title} description={description} />
              </Box>
            ))}
          </Slider>
        )}

        {isDesktop && (
          <div>
            {cardData.map(({ title, description }) => (
              <Box key={title} mt={2} mb={2}>
                <JobCard isDesktop title={title} description={description} />
              </Box>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};
