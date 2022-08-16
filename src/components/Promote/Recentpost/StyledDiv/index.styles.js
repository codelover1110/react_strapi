import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiPaper-root": {
            padding: '30px',
            marginBottom: '20px',

            "& .MuiFormControl-root": {
                width: '100px'
            },
            ['@media (max-width:700px)']: {
                padding: '10px'
            }
        },
        "& .MuiButton-root": {
            width: '150px',
            height: '40px',
            fontSize: '15px',
            fontWeight: 'bold',
            textTransform: 'unset',
            borderRadius: '12px',
            padding: '10px',
        },
        // "& apexcharts-tooltip" : {
        //     color : 'red',
        // }
    },
    top: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        "& .MuiFormControl-root": {
            margin: '0px',
            marginRight: '10px',
            "& .MuiOutlinedInput-root": {
                // border: '2px solid #EFEFEF'
            }
        }
    },
    overViewTip: {
        width: '16px',
        height: '32px',
        background: '#B1E5FC;',
        borderRadius: '4px',
    },
    dashPanel: {
        "& .MuiSvgIcon-root": {
            color: '#1A1D1F'
        }
    },
    modalContent : {
        width: '560px',
        minHeight: '410 px',
        borderRadius: '16px', backgroundColor: theme.palette.primary.main,
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        padding : '24px',
        "& .MuiButton-root": {
            width: '150px',
            height: '40px',
            fontSize: '15px',
            fontWeight: 'bold',
            textTransform: 'unset',
            borderRadius: '12px',
            padding: '10px',
        },
        "& video" : {
            width : '300px',
            height : '200px'
        }
    }
}))