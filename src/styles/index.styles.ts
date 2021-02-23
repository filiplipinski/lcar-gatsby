import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    height: '50vh',
    pointerEvents: 'none',

    [theme.breakpoints.up('sm')]: {
      height: '60vh',
    },
  },
  textBox: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    zIndex: 1,
    top: '25%',
    left: '10%',

    color: theme.palette.background.default,
    fontSize: 20,

    [theme.breakpoints.up('sm')]: {
      fontSize: 30,
    },
  },
  mainImg: {
    '&&': {
      position: 'absolute !important',
    },
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    objectFit: 'cover',
  },
  imgShadow: {
    '&&': {
      position: 'absolute !important',
    },
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    objectFit: 'cover',
  },
}));
