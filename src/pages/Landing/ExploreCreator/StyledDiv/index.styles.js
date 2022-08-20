
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.main,
        padding: '40px',
        "@media (max-width: 900px)": {
            padding: '20px'
        }
    },
    title: {
        fontSize: '40px',
        fontWeight: '600px',
        color: theme.palette.common.black,
    },
    contentHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #EFEFEF',
        paddingBottom: 20,
        borderColor: 'divider',
        borderRadius: '1px'
    },
    tabButton: {
        display: 'flex',
        "& .MuiButton-root": {
            "&:hover": {
                backgroundColor: '#EFEFEF'
            },
            "&:focus": {
                backgroundColor: '#EFEFEF'
            }
        }
    },
    selectBox: {
        minWidth: '120px',
        "& .MuiFormControl-root": {
            margin: 0
        },
        "& .MuiOutlinedInput-root": {
            height: '40px'
        },
    }
}));
