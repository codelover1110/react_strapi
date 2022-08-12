import { alpha, darken, PaletteOptions } from '@mui/material';

const BLACK = '#1A1D1F';
const WHITE = '#FCFCFC';
const PRIMARY = {
  light: '#FFF',
  main: '#F4F4F4',
  dark: darken('#00B0F0', 0.2),
  contrastText: WHITE,
};

const PRIMARYDARK = {
  light: 'rgba(0,176,240,0.2)',
  main: '#111315',
  dark: darken('#00B0F0', 0.2),
  contrastText: BLACK,
};

const GRAY = {
  '100': '#DCDCDC',
  '200': alpha(BLACK, 0.2),
  '300': '#F3F3F3',
  A200: '#EFEFEF', // input border
  A400: '#F7F7F7', // input disabled color
};

const GRAYDARK = {
  '100': '#DCDCDC',
  '200': alpha(WHITE, 0.2),
  '300': '#F3F3F3',
  A200: '#272B30', // input border
  A400: '#F7F7F7', // input disabled color
};
const SUCCESS = {
  light: 'rgba(0,240,144,0.2)',
  main: '#00F090',
};
const ERROR = {
  light: 'rgba(240,64,0,0.2)',
  main: '#F04000',
};
const TEXT = {
  selected : '#1A1D1F',
  disabled : '#6F767E'
}
const TEXTDARK = {
  selected : '#FCFCFC',
  disabled : '#6F767E'
}

const FormControl = {
  main : '#F4F4F4'
}
const FormControlDark = {
  main : '#272B30'
}

const BACKGROUND_COLOR = {
  paper: WHITE,
  default: WHITE,
  transparendBg: alpha(WHITE, 0.2),
  // bg: `linear-gradient(to top left, ${alpha('#F0F0D2', 0.15)} 0%, ${alpha('#00B0F0', 0.15)} 100%)`,
  bg: '#FCFCFC',
  primaryGradient: `radial-gradient(circle, #F0F0D2 0%, #00B0F0 100%)`,
  blueGradient: `linear-gradient(to top left, #00B0F0 0%, #f0f0d2 120%)`,
};

const BACKGROUND_DARK_COLOR = {
  paper: BLACK,
  default: BLACK,
  transparendBg: alpha(BLACK, 0.2),
  // bg: `linear-gradient(to top left, ${alpha('#002020', 0.85)} 0%, ${alpha('#282828', 1)} 100%)`,
  bg: '#1A1D1F',
  primaryGradient: `radial-gradient(circle, #F0F0D2 0%, #00B0F0 100%)`,
  blueGradient: `linear-gradient(to top left, #00B0F0 0%, #f0f0d2 120%)`,
};

const paletteLight = {
  common: { black: BLACK, white: WHITE },
  primary: { ...PRIMARY },
  grey: { ...GRAY },
  success: { ...SUCCESS },
  // secondary: { ...SECONDARY },
  // info: { ...INFO },
  // warning: { ...WARNING },
  error: { ...ERROR },
  background: { ...BACKGROUND_COLOR },
  text: { ...TEXT },
  formControl: { ...FormControl }
};

const paletteDark = {
  common: { black: WHITE, white: '#272B30'},
  primary: { ...PRIMARYDARK },
  grey: { ...GRAYDARK },
  success: { ...SUCCESS },
  // secondary: { ...SECONDARY },
  // info: { ...INFO },
  // warning: { ...WARNING },
  error: { ...ERROR },
  background: { ...BACKGROUND_DARK_COLOR },
  text: { ...TEXTDARK },
  formControl: {...FormControlDark}
};

export default { paletteLight, paletteDark};
