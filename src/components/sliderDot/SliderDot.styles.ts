import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  dot: {
    color: theme.palette.grey[100],
    fontSize: 40,
    transition: theme.transitions.create(['color']),
  },
  activeDot: {
    color: theme.palette.secondary.main,
  },
}));
