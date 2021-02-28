import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.background.paper,

    [theme.breakpoints.up('sm')]: {
      backgroundColor: theme.palette.background.default,
    },
    paddingBottom: 32,
    paddingTop: 32,
  },
  flexContainer: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      '& > *': {
        flexBasis: '45%',
      },
    },
  },
  text: {
    maxWidth: 500,
  },
  img: {
    width: '100%',
    marginTop: 64,
  },
}));
