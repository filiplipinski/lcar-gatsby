import React, { useCallback, useState, SyntheticEvent } from 'react';
import { useForm } from 'react-hook-form';
import { send } from 'emailjs-com';

import {
  Typography,
  Box,
  TextField,
  FormControl,
  FormHelperText,
  Button,
  Grid,
  Snackbar,
  CircularProgress,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import { useStyles } from './ContactForm.styles';

const serviceId = 'service_on7bhap';
const templateId = 'template_qv4qypk';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const ContactForm = () => {
  const styles = useStyles();
  const { handleSubmit, register, errors, reset } = useForm<FormValues>({ mode: 'onBlur' });
  const [submitLoading, setSubmitLoading] = useState(false);
  const [successAlertOpen, setSuccessAlertOpen] = useState(false);
  const [errorAlertOpen, setErrorAlertOpen] = useState(false);

  const handleClose = useCallback((event?: SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setSuccessAlertOpen(false);
    setErrorAlertOpen(false);
  }, []);

  const handleSubmitCallback = useCallback(async ({ name, email, phone, message }: FormValues) => {
    setSubmitLoading(true);
    const templateParams = {
      from_name: name,
      reply_to: email,
      phone,
      message,
    };

    await send(serviceId, templateId, templateParams).then(
      () => {
        reset();
        setSuccessAlertOpen(true);
        setSubmitLoading(false);
      },
      () => {
        setErrorAlertOpen(true);
        setSubmitLoading(false);
      },
    );
  }, []);

  return (
    <div className={styles.container}>
      <Typography variant="h4">Skontaktuj się z nami!</Typography>
      <Typography variant="body2">Formularz kontaktowy</Typography>

      <Box mb={4} />

      <Grid
        container
        spacing={2}
        direction="column"
        component="form"
        onSubmit={handleSubmit(handleSubmitCallback)}
      >
        <Grid item>
          <FormControl fullWidth error={!!errors.name}>
            <TextField
              fullWidth
              inputRef={register({
                required: 'To pole jest wymagane.',
                maxLength: { value: 100, message: 'Mozesz wpisać maksymalnie 100 znaków.' },
                minLength: { value: 3, message: 'Musisz wpisać minimalnie 3 znaki.' },
              })}
              name="name"
              label="Imię"
              variant="outlined"
            />
            <FormHelperText>{errors.name?.message}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl fullWidth error={!!errors.email}>
            <TextField
              fullWidth
              inputRef={register({
                required: 'To pole jest wymagane.',
                maxLength: { value: 100, message: 'Mozesz wpisać maksymalnie 100 znaków.' },
              })}
              name="email"
              type="email"
              label="E-mail"
              variant="outlined"
            />
            <FormHelperText>{errors.email?.message}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            name="phone"
            label="Telefon"
            type="number"
            variant="outlined"
            inputRef={register({
              maxLength: { value: 12, message: 'Mozesz wpisać maksymalnie 12 znaków.' },
            })}
            className={styles.phoneInput}
          />
        </Grid>
        <Grid item>
          <FormControl fullWidth error={!!errors.message}>
            <TextField
              fullWidth
              multiline
              inputRef={register({
                required: 'To pole jest wymagane.',
                maxLength: { value: 1000, message: 'Mozesz wpisać maksymalnie 1000 znaków.' },
                minLength: { value: 5, message: 'Musisz wpisać minimalnie 5 znaków.' },
              })}
              rows={3}
              name="message"
              label="Treść wiadomości..."
              variant="outlined"
            />
            <FormHelperText>{errors.message?.message}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item component={Box} display="flex" justifyContent="center">
          <Button
            disabled={submitLoading}
            color="primary"
            type="submit"
            variant="contained"
            size="large"
            className={styles.button}
          >
            Wyślij
            {submitLoading && <CircularProgress size={20} style={{ marginLeft: 5 }} />}
          </Button>
        </Grid>
      </Grid>

      <Snackbar
        open={successAlertOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          elevation={6}
          variant="filled"
          severity="success"
          className={styles.alert}
        >
          Wiadomość została wysłana! Odezwiemy się najszybciej jak możemy
        </Alert>
      </Snackbar>

      <Snackbar
        open={errorAlertOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          elevation={6}
          variant="filled"
          severity="error"
          className={styles.alert}
        >
          Coś poszło nie tak :( Skontaktuj się z nami: +48 539 943 336
        </Alert>
      </Snackbar>
    </div>
  );
};
