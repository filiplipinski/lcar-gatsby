import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: -1,
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  innerWrapper: {
    padding: '32px 16px',
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'stretch',
    },
  },
  rights: {
    display: 'none',

    [theme.breakpoints.up('sm')]: {
      display: 'block',
      textAlign: 'center',
      marginTop: 3,
    },
  },
}));
