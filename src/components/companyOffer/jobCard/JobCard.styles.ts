import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 350,
    height: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  desktopRoot: {
    display: 'flex',

    '&>*:nth-child(1)': {
      flexBasis: '60%',
    },
    '&>*:nth-child(2)': {
      flexBasis: '40%',
    },
  },
  desktopImg: {
    height: '100%',
  },
  img: {
    height: 140,
  },
  title: {
    textTransform: 'uppercase',
  },
}));
