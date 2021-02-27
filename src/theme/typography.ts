import { Palette } from '@material-ui/core/styles/createPalette';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';

const fontWeightRegular = 400;
const fontWeightMedium = 700;
const fontWeightBold = 800;

export const typography = (palette: Palette): TypographyOptions => ({
  fontFamily: 'Sen, sans-serif',
  fontWeightRegular,
  fontWeightMedium,
  fontWeightBold,

  h1: {
    fontWeight: fontWeightBold,
    color: palette.primary.main,
    textTransform: 'uppercase',
  },
  h2: {
    fontWeight: fontWeightBold,
    textTransform: 'uppercase',
    color: palette.primary.main,
  },
  h3: {
    fontWeight: fontWeightBold,
    textTransform: 'uppercase',
    color: palette.primary.main,
  },
  body1: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '24px',
    color: palette.primary.main,
  },
});
