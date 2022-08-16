import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme)=>({
    root: {
        background: theme.palette.primary.main,
        padding: '50px',
        ['@media (max-width:900px)']: {
            padding: '20px'
        }
    },
    dashboard: {
        fontSize: '40px',
        color: theme.palette.common.black,
        fontWeight: 'bold'
    },
    
}))