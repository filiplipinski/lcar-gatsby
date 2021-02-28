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
}));
