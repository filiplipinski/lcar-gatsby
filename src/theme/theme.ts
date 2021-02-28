import { createMuiTheme } from '@material-ui/core/styles';
import { palette } from './palette';
import { typography } from './typography';

const theme = createMuiTheme({
  palette,
  typography,
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
          backgroundColor: palette.background.default,
        },
        a: {
          textDecoration: 'none',
        },
      },
    },
    MuiTypography: {
      colorPrimary: {
        color: palette.primary.main,
      },
      colorSecondary: {
        color: palette.common.white,
      },
      colorTextPrimary: {
        color: palette.secondary.main,
      },
    },
    MuiMenu: {
      list: {
        padding: 0,
      },
    },
    MuiButton: {
      root: {},
      contained: {
        borderRadius: 0,
      },
      containedPrimary: {
        backgroundColor: palette.secondary.main,
        color: '#fff',

        '&&:hover': {
          backgroundColor: palette.secondary.dark,
        },
      },
      containedSecondary: {
        backgroundColor: palette.grey[100],
        color: palette.grey[500],

        '&:hover': {
          backgroundColor: palette.grey[200],
        },
      },
      containedSizeLarge: {
        fontSize: 16,
      },
    },
    // textfield below
    MuiInputBase: {
      root: {
        border: `1px solid ${palette.background.default}`,
        backgroundColor: palette.common.white,
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 0,
      },
    },
  },
});

export default theme;
