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
    position: 'absolute',
    zIndex: 2,
    left: '10%',
    top: 100,
  },
  textLine: {
    lineHeight: 1,
    textTransform: 'capitalize',
    color: theme.palette.common.white,
  },
  number: {
    fontSize: 24,
    fontWeight: theme.typography.fontWeightRegular,
  },
  dot: {
    color: theme.palette.secondary.main,
    fontSize: 56,
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
