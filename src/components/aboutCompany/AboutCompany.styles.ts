import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.background.paper,

    [theme.breakpoints.up('sm')]: {
      backgroundColor: theme.palette.background.default,
    },
    paddingBottom: 32,
    paddingTop: 56,
  },
  flexContainer: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      '& > *:nth-child(1)': {
        flexBasis: '55%',
      },
      '& > *:nth-child(2)': {
        flexBasis: '45%',
      },
    },
  },
  text: {
    maxWidth: 700,
  },
  img: {
    width: '100%',
    marginTop: 64,
  },
}));
