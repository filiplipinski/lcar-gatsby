import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: 56,
  },
  imageGrid: {
    display: 'grid',
    gridGap: 10,
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gridAutoRows: 'minmax(50px, 250px)',
    margin: '0 auto',
    width: '100%',
  },
  imageItem: {
    [theme.breakpoints.up('sm')]: {
      '&:nth-child(4)': {
        // 2x2
        gridRowEnd: 'span 2',
        gridColumnEnd: 'span 2',
      },
      '&:nth-child(5)': {
        // poziomy 2x1
        gridColumnEnd: 'span 3',
      },
    },

    '& img': {
      transform: 'scale(1)',
      transition: 'transform 0.6s ease !important',
      cursor: 'pointer',

      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
  },
}));
