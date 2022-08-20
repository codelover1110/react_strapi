import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {

    },
    top: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    postContent: {
        display: 'inline-flex',
        overflow: 'auto',
        "&::-webkit-scrollbar": {
            display: 'none'
        }
    },
    eachPost: {
        padding: '24px 0px',
        borderRadius: '1px',
        borderBottom: '1px solid #EFEFEF',
    },
    info: {
        display: 'flex',
        "media(max-width: 768px)": {
            justifyContent: 'start'
        }

    },
    poster_img: {
        borderRadius: '50%'
    },
    img_box: {
        borderRadius: '50%',
        marginRight: '15px',

    },
    posterName: {
        fontSize: '20px',
        fontWeight: '600',
        display: 'flex',
        lineHeight: '32px',
        alignItems: 'center'
    },
    num_state: {
        display: 'flex',
        color: '#6F767E',
        alignItems: 'center'
    },
    productNum: {
        display: 'flex'
    },
    followNum: {
        display: 'flex'
    },
    postBtn: {
        "& .MuiButton-root": {
            padding: '12px 20px 12px 20px',
        }
    },
    productImg: {
        position: 'relative',
        margin: '5px'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
        transparency: 0,
        opacity: '0',
        "&:hover": {
            opacity: '1',
            backdropFilter: 'brightness(40%)',
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));