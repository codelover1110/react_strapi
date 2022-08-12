import { createContext, FC, useMemo, useState } from 'react';

import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';

import { getItem, setItem } from './helper';
import GlobalCss from './defaultCss';
import ComponentsOverrides from './overrides';
import palette from './palette';
// import shape from './shape';
// import typography from './typography';

// ----------------------------------------------------------------------
const themeMode = getItem('userThemeMode');
console.log("dsasf",getItem('userThemeMode'));

setItem('userThemeMode', 'light');

const breakpoints = {
  values: {
    xs: 0,
    sm: 767,
    md: 900,
    lg: 1200,
    xl: 1300,
  },
};

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const ThemeConfig = ({ children }) => {
  const curTheme = getItem('userThemeMode');
  console.log(curTheme);
  const [mode, setMode] = useState(curTheme === 'light' ? 'light' : 'dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const themeOptions = useMemo(
    () => ({
      palette:
        mode === 'light'
          ? {
              mode,
              ...palette.paletteLight,
            }
          : {
              mode,
              ...palette.paletteDark,
            },
      // shape,
      // typography,
      breakpoints,
    }),
    [mode]
  );

  const theme = createTheme(themeOptions);

  theme.components = ComponentsOverrides(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <GlobalCss />
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </StyledEngineProvider>
  );
};

export { ThemeConfig, ColorModeContext };
