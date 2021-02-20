import React from 'react';
import { Typography, Box } from '@material-ui/core';

import { LogoProps } from './Logo.types';
import { useStyles } from './Logo.styles';

// TODO: usless prop probably, will be img logo
export const Logo: React.FC<LogoProps> = ({ color }) => {
  const styles = useStyles();

  return (
    <Box display="flex" alignItems="center">
      <Typography variant="h2" className={styles.lcar}>
        LCAR
      </Typography>

      <Typography variant="h1" color="secondary">
        .
      </Typography>

      <Typography variant="h5" style={{ textTransform: 'uppercase' }}>
        Auto Detailing
      </Typography>
    </Box>
  );
};
