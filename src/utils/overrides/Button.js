const Button = (theme) => ({
  MuiButton: {
    defaultProps: {
      // The props to change the default for.
      variant: 'contained',
      size: 'large',
    },
    styleOverrides: {
      root: {
        boxShadow: 'none',
        borderRadius: 8,
        color: theme.palette.common.black,
        '&:hover': {
          boxShadow: 'none',
        },
        '&.MuiButton-containedInfo': {
          background: theme.palette.primary.light,
          color: theme.palette.common.black,
          border: `2px solid ${theme.palette.common.white}`,
          '&:hover': {
            borderColor: theme.palette.primary.main,
          },
        },
      },
      sizeLarge: {
        padding: '10px 33px',
        fontSize: theme.typography.h4.fontSize,
      },
      sizeMedium: {
        padding: '6px 18px',
      },
      containedPrimary: {},
      containedSecondary: {},

      outlinedInherit: {
        borderColor: '#E7E7E7',
      },
      textInherit: {},
    },
  },
});

export default Button;
