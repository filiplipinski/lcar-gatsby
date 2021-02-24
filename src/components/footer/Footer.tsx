import { Typography } from '@material-ui/core';
import React from 'react';

import { Container } from 'components/container/Container';

import { useStyles } from './Footer.styles';

export const Footer: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.innerWrapper}>
          <div className={styles.flexContainer}>
            <div>
              <Typography variant="h3">Kontakt</Typography>
              <Typography>
                <Typography component="span" color="secondary">
                  +48
                </Typography>{' '}
                539 943 336 <br />
                Pon.-Pt. 8-18
              </Typography>
            </div>

            <div>
              <Typography variant="h3">Email</Typography>

              <Typography>
                <Typography component="span" color="secondary">
                  karol.lipinski
                </Typography>
                @lcar.pl
              </Typography>
            </div>

            <div>
              <Typography variant="h3">Adres</Typography>

              <Typography component="strong">Karol Lipiński</Typography>

              <Typography>
                ul.{' '}
                <Typography component="span" color="secondary">
                  Złota 48
                </Typography>{' '}
                <br /> 26-604 Radom
              </Typography>
            </div>
          </div>

          <div className={styles.rights}>
            <Typography component="strong">
              <Typography component="span" color="secondary">
                LCAR.PL
              </Typography>{' '}
              ® 2020
              <i style={{ fontSize: '12px', display: 'block' }}>Strona w budowie</i>
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
};
