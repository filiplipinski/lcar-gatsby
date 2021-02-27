import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  button: {
    '& .MuiButton-endIcon': {
      marginLeft: 'auto',
    },
  },
  buttonIcon: {
    transform: 'scale(2)',
    marginRight: -8,
    backgroundColor: theme.palette.common.black,
  },
}));
