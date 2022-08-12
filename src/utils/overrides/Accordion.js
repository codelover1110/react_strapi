

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Accordion = (theme) => ({
  MuiAccordion: {
    styleOverrides: {
      root: {
        boxShadow: "none",
        background: "transparent",
        marginTop: "0 !important",
        color : theme.palette.text.disabled,
        "&:before": {
          display: "none"
        }
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        padding: 0,
        "& .MuiTypography-root": {
          ...theme.typography.body2
        }
      }
    }
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        padding: 0,

      },
      expanded: {
        minHeight: 20
      },
      content: {
        margin: "0px !important"
      }
    },
  },
})

export default Accordion;