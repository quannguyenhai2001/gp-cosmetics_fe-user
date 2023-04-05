import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    //cart
    cartDrawer: {
        '& .MuiDrawer-paper': {
            width: '41.7rem',
            height: '100vh',
            paddingRight: '6rem',
            paddingBottom: '10rem',
        },
        '& .MuiPaper-root': {
            overflowX: 'hidden',

        }
    },

    cartBox: {
        minWidth: '41.7rem',

    },
    cartCard: {
        display: 'grid',
        height: '11rem',
        marginBottom: '0.5rem',
        overflowY: 'hidden',
        position: 'relative',
    },


    //sale
    sale: {
        position: 'absolute',
        top: 0,
        left: '15.5%',
        background: '#ff0000',
        color: '#fff',
        padding: '4px 10px',
        display: 'grid',
        textAlign: 'center',
        fontSize: '9px',
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
            right: 0,
            borderTop: '3px solid #ff0000',
            borderLeft: '4px solid transparent',
            borderRight: '4px solid transparent',
            transform: 'rotate(135deg)',




        },
    },

    //box total
    cartBoxTotal: {
        position: "fixed",
        bottom: 50,
        right: 0,
        textAlign: "center",
        zIndex: "3000",
        transition: "all 0.3s ease-in-out",
        fontWeight: '500',
        width: '41.7rem',
    },
    cartBoxTotalPaper: {
        '&.MuiPaper-root': {
            display: 'flex',
            padding: '1rem',
        }
    },


    //box button order
    cartDivButton: {
        position: "fixed",
        bottom: 0,
        right: 0,
        textAlign: "center",
        zIndex: "3000",
        transition: "all 0.3s ease-in-out",
        width: '41.7rem',
    },
    cartButtonOrder: {
        height: 50,
        borderRadius: 0
    },


    rootCartContent: {
        '& .MuiCardContent-root': {
            '&:last-child': {
                paddingBottom: 0
            }
        },
        padding: '1rem 1rem',
        paddingRight: '2rem'
    },


}));