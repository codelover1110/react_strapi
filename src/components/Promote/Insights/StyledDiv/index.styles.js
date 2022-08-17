import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiPaper-root": {
            padding: '30px',
            marginBottom: '20px',

            "& .MuiFormControl-root": {
                width: '100px'
            },
            "@media (max-width:768px)": {
                padding: '20px 16px'
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
            }
        }
    },
    overViewTip: {
        width: '16px',
        height: '32px',
        background: '#FFBC99',
        borderRadius: '4px',
    },

    customerItem: {
        padding: '32px 0',
        "&+ .MuiGrid-item": {
            "@media (min-width: 1200px)": {
                borderLeft: '1px solid #EFEFEF',
            },
            "@media (max-width: 1200px)": {
                borderLeft: '1px solid #EFEFEF',
            },
            "@media (max-width: 900px)": {
                border: 0
            },
            "@media (max-width: 766px)": {
                borderTop: '1px solid #EFEFEF',
            },
        }
    },
    InsightIcon: {
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        width: '48px', height: '48px',
        borderRadius: '50%',
        marginBottom: '24px',
        "& .MuiSvgIcon-root": {
            width: '20px',
            height: '20px'
        }
    },
    InsightTitle: {
        display: 'flex', justifyContent: 'between', alignItems: 'center',
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '8px'
    },
    InsigtValue: {
        marginBottom: '8px',
        fontSize: '48px', fontWeight: '600'
    },
    IncDecState: {
        display: 'flex'
    }
}))