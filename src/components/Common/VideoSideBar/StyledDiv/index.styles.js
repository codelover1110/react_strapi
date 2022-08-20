import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        background: theme.palette.primary.main,
        padding: '24px, 12px',
        color: theme.palette.common.black,
    },
    header: {
        padding: '24px 14px',
        display: 'flex',
        justifyContent: 'space-between',
        size: '15px',
        lineHeight: '24px',
        fontWeight: '600',
        
    },
    vCard: {
        cursor: 'pointer',
        display: 'flex',
        padding: '10px 12px',
        marginRight: '15px',
        borderRadius: '12px',
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
            backgroundColor: theme.palette.background.paper,
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
        },
        margin: '12px'
    },
    vAvatar: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '15px',
        "& img": {
            borderRadius: 12,
        }
    },
    title: {
        marginBottom: '8px',
        fontSize: '15px',
        fontWeight: '600',
        lineHeight: '24px',
        color: theme.palette.grey.primay,
    },
    HelpIcon: {
        marginRight: '14px',
    },
    CloseIcon: {
        cursor: 'pointer'
    },
    rightPart: {
        
    }
}));