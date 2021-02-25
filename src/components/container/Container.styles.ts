import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: theme.breakpoints.values.lg,
    margin: '0 auto',
    width: '100%',
    padding: '0 16px',
    position: 'relative',
  },
}));
