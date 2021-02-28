import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.common.black,
    paddingTop: 48,
    paddingBottom: 48,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
  },
  facebookIcon: {
    fontSize: 64,
    color: '#4267B2',
    marginRight: 8,
  },
  youtubeIcon: {
    fontSize: 64,
    color: '#FF3400',
  },
  phoneIcon: {
    fontSize: 40,
    color: theme.palette.common.white,
    marginRight: 16,
  },
  expandLessIcon: {
    marginTop: 24,
    fontSize: 96,
    color: theme.palette.common.white,
  },
  title: {
    marginBottom: 24,
  },
  logoContainer: {
    marginTop: 64,

    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
    },
  },
  logo: {
    width: 200,
    cursor: 'pointer',
  },
  rights: {
    marginTop: 64,

    '& span': {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
}));
