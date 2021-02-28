import React from 'react';

import { Typography, Box, TextField, Button, Grid } from '@material-ui/core';

import { useStyles } from './ContactForm.styles';

export const ContactForm = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Typography variant="h4">Skontaktuj się z nami!</Typography>
      <Typography variant="body2">Formularz kontaktowy</Typography>

      <Box mb={4} />

      <Grid container spacing={2} direction="column" component="form">
        <Grid item>
          <TextField fullWidth required name="name" label="Imię" variant="outlined" />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            required
            name="email"
            type="email"
            label="E-mail"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField fullWidth name="phone" label="Telefon" type="tel" variant="outlined" />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            multiline
            rows={3}
            name="message"
            label="Treść wiadomości..."
            variant="outlined"
          />
        </Grid>

        <Grid item component={Box} display="flex" justifyContent="center">
          <Button
            color="primary"
            // TODO form submit
            // type="submit"
            variant="contained"
            size="large"
            className={styles.button}
          >
            Wyślij
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
