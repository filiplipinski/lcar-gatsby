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
    main: '#0F0F0F',
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
  red: 'red',
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
    regular: 400,
    bold: 700,
    extraBold: 800,
  },
};

const initialMq: Breakpoints = {
  huge: '',
  bigDesktop: '',
  desktop: '',
  bigTablet: '',
  tablet: '',
  bigPhone: '',
  phone: '',
};

const mq = Object.keys(breakpoints).reduce((acc, breakpoint) => {
  acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;
  return acc;
}, initialMq);

const spacing = {
  '1': '8px',
  '2': '16px',
  '3': '24px',
  '4': '32px',
  '5': '40px',
};

export const theme = {
  colors,
  mq,
  breakpoints,
  font,
  spacing,
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
