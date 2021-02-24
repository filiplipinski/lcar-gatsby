import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        // '@font-face': [sen],
        html: {
          boxSizing: 'border-box',
          fontSize: '62.5%',
        },
        body: {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
          fontSize: '1.6rem',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Sen, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 800,
  },
  palette: {
    primary: {
      main: '#2d2e28', // OK
    },
    secondary: {
      main: '#FF0000', // TODO: podien na prawdziwy kolor
    },
    background: {
      default: '#fff',
    },
    common: {
      white: '#fafafa', // OK
      black: '#00000',
    },
  },
});

theme.typography.h1 = {
  ...theme.typography.h1,
  fontWeight: theme.typography.fontWeightBold,
};
theme.typography.h2 = {
  ...theme.typography.h2,
  fontWeight: theme.typography.fontWeightBold,
};
theme.typography.h3 = {
  ...theme.typography.h3,
};
theme.typography.h4 = {
  ...theme.typography.h4,
};
theme.typography.h5 = {
  ...theme.typography.h5,
};
theme.typography.h6 = {
  ...theme.typography.h6,
};
theme.typography.body1 = {
  ...theme.typography.body1,
  fontWeight: 400,
  fontSize: 16,
  lineHeight: '24px',
};

export default theme;
