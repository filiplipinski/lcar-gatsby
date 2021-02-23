import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.background.default,
    height: 80,
    '&>*': {
      height: 80,
    },
  },
  logo: {
    width: 130,
    margin: 'auto 0 auto 70px',
  },
}));
