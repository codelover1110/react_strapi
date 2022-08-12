const Tooltip = (theme) => ({
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800],
          color: theme.palette.grey.A400
        },
        arrow: {
          color: theme.palette.grey[800]
        }
      }
    }
  })

  export default Tooltip;
