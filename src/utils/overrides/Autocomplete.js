const Autocomplete = (theme) => ({
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.shadows["10"]
        }
      }
    }
  })

export default Autocomplete;