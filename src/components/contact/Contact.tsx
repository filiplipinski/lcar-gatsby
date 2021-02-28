import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { Home, PhoneAndroid, MailOutline } from '@material-ui/icons';

import { Container } from 'components/container/Container';

import { useStyles } from './Contact.styles';
import { ContactForm } from './contactForm/ContactForm';

export const Contact = () => {
  const styles = useStyles();

  return (
    <Container id="contact" className={styles.container}>
      <Box pt={4} pb={6}>
        <Typography variant="h2" align="center">
          Kontakt
        </Typography>
      </Box>

      <div className={styles.flexContainer}>
        <div className={styles.infosContainer}>
          <Box display="flex" alignItems="center" mb={4}>
            <div className={styles.iconContainer}>
              <Home className={styles.icon} />
            </div>
            <div>
              <Typography variant="h4">Karol Lipiński</Typography>
              <Typography variant="body2">
                ul. Złota 48 <br /> 26-604 Radom
              </Typography>
            </div>
          </Box>

          <Box display="flex" alignItems="center" mb={4}>
            <div className={styles.iconContainer}>
              <PhoneAndroid className={styles.icon} />
            </div>
            <div>
              <Typography variant="h4" component="a" href="tel:+48539943336">
                <Typography variant="h4" component="span" color="textPrimary">
                  +48
                </Typography>{' '}
                539 943 336
              </Typography>
              <Typography variant="body2">Telefon komórkowy</Typography>
            </div>
          </Box>

          <Box display="flex" alignItems="center">
            <div className={styles.iconContainer}>
              <MailOutline className={styles.icon} />
            </div>
            <div>
              <Typography variant="h4">
                <Typography variant="h4" component="span" color="textPrimary">
                  karol.lipinski
                </Typography>
                @lcar.pl
              </Typography>

              <Typography variant="body2">Adres email</Typography>
            </div>
          </Box>
        </div>

        <ContactForm />
      </div>
    </Container>
  );
};
