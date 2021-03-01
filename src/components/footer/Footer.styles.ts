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
    marginRight: 8,
  },
  instagramIcon: {
    fontSize: 64,
    borderRadius: 20,
    color: theme.palette.common.black,
    background:
      'radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)',
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
