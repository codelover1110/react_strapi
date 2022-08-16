
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.main,
        padding: '40px',
        fontSize: '16px',
        "& .MuiListItem-root": {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '25px 0px',

        },
        "& .MuiPaper-root": {
            padding: '30px',
            ['@media (max-width:700px)']: {
                padding: '10px'
            }
        },
        "& .MuiGrid-container": {
        }
    },
    dashboard: {
        fontSize: '40px',
        color: theme.palette.common.black,
        fontWeight: 'bold'  
    },
    Notification: {
        borderRadius: '8px',
        "& .MuiFormControl-root":{
            marginBottom: '0px'
        }
    },
    head: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    Filter: {

    },
    header: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        fontSize: '20px',
        fontWeight: '600',
        marginBottom: '30px'
    },
    ListItems: {
        marginBottom: '20px',
        "& .MuiListItem-root": {
            padding: '0px'
        },

        "& .MuiTypography-root": {
            fontSize: '15px',
            fontWeight: '600',
        },
        "& .MuiListItemButton-root": {
            paddingLeft: '0px'
        }
    },
    selectBox: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
        "& .MuiButton-root": {
            fontSize: '13px',
            fontWeight: '700',
            lineHeight: '24px',
            padding: '8px 16px 8px 16px',
            "& :hover": {
                backgroundColor: '#2A85FF'
            }
        },
        paddingBottom: '40px',
        borderBottom: '2px solid #EFEFEF'
    }
}));