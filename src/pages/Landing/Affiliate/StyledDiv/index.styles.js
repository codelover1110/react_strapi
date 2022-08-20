
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.main,
        "@media(min-width: 768px)": {
            padding: '24px',
        },
        "@media(max-width: 768px)": {
            padding: 16
        }
    },
    dashboard: {
        fontSize: '40px',
        color: 'theme.palette.common.black',
        fontWeight : 'bold'
    }
}));