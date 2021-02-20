import React from 'react';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import theme from 'theme/theme';

export const ThemeProvider: React.FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
