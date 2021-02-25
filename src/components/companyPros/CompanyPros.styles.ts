import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 64,
    marginBottom: 64,
  },
  title: {
    margin: '24px 0',
  },
  sliderItem: {
    outline: 'none',
    padding: 24,
    display: 'flex !important',
    flexDirection: 'column',
    alignItems: 'center',
  },
  dot: {
    color: theme.palette.background.paper,
    fontSize: 40,
    transition: theme.transitions.create(['color']),
  },
  activeDot: {
    color: theme.palette.secondary.main,
  },
}));
