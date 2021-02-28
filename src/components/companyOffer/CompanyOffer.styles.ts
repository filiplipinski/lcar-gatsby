import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,

    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.background.default,
    },
    paddingBottom: 56,
  },
  cardsContainer: {
    '&&': {
      marginTop: 56,
    },

    '& .slick-track': {
      display: 'flex !important',
    },

    '& .slick-slide': {
      height: 'auto',

      '&>div': {
        height: '100%',
      },
    },
  },
  sliderItem: {
    outline: 'none',
    height: '100%',
  },
}));
