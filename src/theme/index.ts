type Breakpoints = {
  huge: string;
  bigDesktop: string;
  desktop: string;
  bigTablet: string;
  tablet: string;
  bigPhone: string;
  phone: string;
};

const breakpoints: Breakpoints = {
  huge: '1700',
  bigDesktop: '1440',
  desktop: '1150',
  bigTablet: '1020',
  tablet: '767',
  bigPhone: '400',
  phone: '320',
};

const colors = {
  primary: {
    main: 'blue',
    light: 'blue',
    dark: 'blue',
  },
  secondary: {
    main: 'yellow',
    light: 'yellow',
    dark: 'yellow',
  },
  text: {
    primary: '#2D2E28',
    secondary: 'grey',
    disabled: 'grey',
  },
  background: {
    default: '#fff',
    paper: '#fafafa',
  },
  succes: 'green',
  error: '#C02811',
  common: {
    white: 'hsl(0, 0%, 100%)',
    black: 'hsl(0, 0%, 0%)',
  },
  grey: {
    grey1: 'hsl(0, 0%, 35%)',
    grey2: 'hsl(0, 0%, 74%)',
    grey3: 'hsl(0, 0%, 87%)',
    grey4: 'hsl(0, 0%, 91%)',
    grey5: 'hsl(0, 0%, 97%)',
  },
};

const font = {
  size: {
    header: '4.5rem',
    paragraph: '1.7rem',
    button: '1.5rem',
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 600,
  },
};

const mq = Object.keys(breakpoints).reduce((acc, breakpoint) => {
  acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;
  return acc;
}, {} as Breakpoints);

export const theme = {
  colors,
  mq,
  breakpoints,
  font,
  layout: {
    mobileNavbarHeight: '100px',
    navbarHeight: '150px',
  },
  shape: {
    borderRadius: '4px',
  },
  zIndex: {
    default: '1000',
    navbar: '1100',
    sideMenu: '1200',
    modal: '1300',
    snackbar: '1400',
    tooltip: '1500',
  },
};
