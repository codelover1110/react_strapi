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
            height: '48px',
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
            "& .MuiOutlinedInput-root": {
                // border: '2px solid #EFEFEF'
            }
        }
    },
    overViewTip: {
        width: '16px',
        height: '32px',
        background: '#FFBC99',
        borderRadius: '4px',
    },
    dashPanel: {
        "& .MuiSvgIcon-root": {
            color: '#1A1D1F'
        },
    },
}))