import React, { useMemo, useState } from 'react';
import Slider from 'react-slick';
import { Typography, Box, useTheme, useMediaQuery } from '@material-ui/core';

import { Container } from 'components/container/Container';
import { SliderDot } from 'components/sliderDot/SliderDot';

import { useStyles } from './CompanyOffer.styles';
import { CarJobTypeSelection } from './carJobTypeSelection/CarJobTypeSelection';
import { JobCard } from './jobCard/JobCard';
import { CarJobTypeEnum } from './carJobTypeSelection/CarJobTypeSelection.types';

import { companyOfferData } from './CompanyOffer.data';

export const CompanyOffer = () => {
  const styles = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedCarJobType, setCarJobType] = useState(CarJobTypeEnum.Detailing);

  const dataToDisplay = useMemo(() => companyOfferData[selectedCarJobType], [selectedCarJobType]);

  return (
    <div id="company-offer" className={styles.container}>
      <Container>
        <Box pt={4} pb={6}>
          <Typography variant="h2" align="center">
            Oferta
          </Typography>
        </Box>

        <CarJobTypeSelection selectedCarJobType={selectedCarJobType} onSelect={setCarJobType} />
      </Container>

      {!isDesktop && (
        <Container disablePaddings className={styles.cardsContainer}>
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
            {dataToDisplay.map(({ title, description }) => (
              <Box key={title} pl={2} pr={2} className={styles.sliderItem}>
                <JobCard title={title} description={description} />
              </Box>
            ))}
          </Slider>
        </Container>
      )}

      {isDesktop && (
        <Container className={styles.cardsContainer}>
          {dataToDisplay.map(({ title, description }) => (
            <Box key={title} mt={2} mb={2}>
              <JobCard isDesktop title={title} description={description} />
            </Box>
          ))}
        </Container>
      )}
    </div>
  );
};
