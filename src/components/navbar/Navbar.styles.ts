import { makeStyles } from '@material-ui/core';

export const navigationHeight = 80;

export const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.background.default,
    height: navigationHeight,

    '& > *': {
      height: navigationHeight,
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  logoContainer: {
    flexGrow: 1,
    paddingRight: 60,
    cursor: 'pointer',
  },
  logo: {
    width: 150,
    margin: 'auto',

    [theme.breakpoints.up('sm')]: {
      marginLeft: 70,
      marginRight: 0,
    },
  },
  navList: {
    display: 'flex',
    outline: 'none',
    padding: 0,
    height: '100%',

    '& > *': {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  moreIcon: {
    color: theme.palette.primary.main,
    fontSize: 36,
  },
}));
