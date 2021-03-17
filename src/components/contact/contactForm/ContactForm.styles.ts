import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: '32px 16px',
    backgroundColor: 'white',

    [theme.breakpoints.up('sm')]: {
      padding: 32,
    },
  },
  button: {
    width: 150,
  },
  phoneInput: {
    // hide native number input arrows
    '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '& input[type=number]': {
      '-moz-appearance': 'textfield',
    },
  },
  alert: {
    '& .MuiAlert-message': {
      fontSize: 18,
    },
  },
}));
