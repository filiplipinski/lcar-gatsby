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
        },
      },
    },
  },
});

export default theme;
