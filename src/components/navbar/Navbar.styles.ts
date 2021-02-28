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
    width: 150,
    margin: 'auto',

    [theme.breakpoints.up('sm')]: {
      marginLeft: 70,
      marginRight: 0,
    },
  },
}));
