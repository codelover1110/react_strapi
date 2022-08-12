
const Backdrop = (theme) => ({
  MuiBackdrop: {
    styleOverrides: {
      root: {
        background: `alpha(${theme.palette.common.black}, 0.2)`,
        '&.MuiBackdrop-invisible': {
          background: 'transparent',
        },
      },
    },
  },
});

export default Backdrop;
