import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({
    rootCard: {
        '&.MuiPaper-root': {
            height: 330,
            position: 'relative',
            transition: '0.3s',
            cursor: 'pointer',
            '&:hover': {
                transform: 'scale(1.02)',
                transition: '0.3s',
                // '&::before': {
                //     content: '"View"',
                //     position: 'absolute',
                //     zIndex: 234343323232,
                //     top: '50%',
                //     left: '50%',
                //     transform: '-50% -50%',
                //     width: '100px',
                //     height: '100px',
                //     backgroundColor: 'rgba(0,0,0,0.5)',
                // },
            },

            // '&.MuiPaper-root:before': {
            //     display: 'none',
            // },
        },

    },

    rootCardMedia: {
        '&.MuiCardMedia-root': {
            transition: '0.3s',
            objectFit: 'unset'


        },
    },
    sale: {
        position: 'absolute',
        top: 0,
        right: 0,
        background: '#ff0000',
        color: '#fff',
        padding: '7px 10px',
        display: 'grid',
        textAlign: 'center',
        fontSize: '11px',
        fontWeight: 'bold',
        '& span': {
            '&:first-child': {
                transform: 'translateX(1px)',
                marginBottom: '2px',
            }
        },
        '&:after': {
            content: '""',
            position: 'absolute',
            width: 0,
            height: 0,
            top: '100%',
            borderTop: '9px solid transparent',
            borderLeft: '25px solid red',

            borderRight: '25px solid red',
            transform: 'rotate(180deg)',



        },
    },

    //pagination
    stackPagination: {
        alignItems: 'center',
    },

    rootRatting: {
        '&.MuiRating-root': {
            fontSize: '1.4rem'
        }
    }
}));