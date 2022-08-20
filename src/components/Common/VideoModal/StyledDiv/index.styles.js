import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    modalContent: {
        background: theme.palette.common.black,
        position:'fixed',
        maxWidth: '1440px',
        height: '768px',
        "@media(max-width:700px)": {
            height: '100vh'
        },
        width: '100%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '40px',
    },
    ContentH: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '20px',
        fontWeight: '600',
        color: theme.palette.primary.contrastText,
    },
    action: {
        display: 'flex',
        alignItems: 'center',
    },
    ContentB: {

    },
    videoBox: {
        position:'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',   
    },
    Favorite: {
        width: 80,
        height: 40,
        background: theme.palette.primary.main,
        padding: '8px 16px 8px 16px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.text.primary
    },
    chainIcon: {
        width:'40px', 
        height: '40px', 
        borderRadius: '50%', 
        border:'1px solid #272b30', 
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center',
        marginRight:'5px',
        cursor: 'pointer'
    },
    closeIcon: {
        cursor: 'pointer'
    }
}));