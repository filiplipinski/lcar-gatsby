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
  },
  h2: {
    fontWeight: fontWeightBold,
    textTransform: 'uppercase',
    color: palette.primary.main,
    padding: '32px 0',
  },
  body1: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '24px',
    color: palette.primary.main,
  },
});
