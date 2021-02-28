import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,

    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.background.default,
    },

    paddingBottom: 56,
  },
  infosContainer: {
    marginTop: 48,
  },
  flexContainer: {
    '& > *:nth-child(2)': {
      marginTop: 24,
    },

    [theme.breakpoints.up('md')]: {
      display: 'flex',

      '& > *': {
        flexBasis: '50%',
      },

      '& > *:nth-child(2)': {
        marginTop: 0,
      },
    },
  },
  iconContainer: {
    backgroundColor: 'white',
    width: 80,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,

    [theme.breakpoints.up('md')]: {
      marginRight: 32,
    },
  },
  icon: {
    fontSize: 48,
    color: theme.palette.secondary.main,
  },
}));
