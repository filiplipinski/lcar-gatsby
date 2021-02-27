import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,

    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.background.default,
    },
  },
  cardsContainer: {
    marginTop: 24,

    [theme.breakpoints.up('md')]: {
      marginTop: 48,
    },
  },
}));
