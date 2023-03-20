import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    nav: {
        backgroundColor: 'black',
        padding: '15px 25px',
        color: 'white',
        position: 'relative',
        zIndex: 950,
        fontSize: '1.4285714285714286rem',
        '& a': {
            color: 'black',
            textDecoration: 'none',
        }
    },

    //list
    ul: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    primaryCategories: {
        cursor: 'pointer',
        zIndex: 1000,

        '&:hover': {
            color: '#e3eefa',
            // '&:after': {
            //     content: '""',
            //     position: 'absolute',
            //     zIndex: 1000,
            //     transition: '0.2s',
            //     left: 0,
            //     top: ' 46px',
            //     width: 0,
            //     height: 0,
            //     borderLeft: '5px solid transparent',
            //     borderRight: '5px solid transparent',
            //     borderBottom: '5px solid #ffff',
            // },
            '& $secondaryCategories': {
                transitionDelay: '0.2s',
                visibility: 'visible',
                opacity: 1,
                transform: 'scale(1)',
                top: '100%',
            },
            '& $overlay': {
                transitionDelay: '0.2s',
                visibility: 'visible',
                opacity: 1,
            }
        }
    },
    secondaryCategories: {
        position: 'absolute',
        zIndex: '1000',
        backgroundColor: 'white',
        color: 'black',
        right: '0',
        top: '4.5rem',
        padding: 20,
        width: '100%',
        visibility: 'hidden',
        opacity: 0,
        transition: 'all 0.2s',
        transformOrigin: 'top',
        '&:after': {
            content: '""',
            position: 'absolute',
            left: '0',
            top: '-15px',
            width: '100%',
            height: '20px',
            borderTop: '10px solid transparent',
        },
        // '&:before': {
        //     content: '""',
        //     borderStyle: 'solid',
        //     borderWidth: '10px 15px 10px 0',
        //     borderColor: 'transparent #dd4397 transparent transparent',
        //     position: 'absolute',
        //     left: '-15px'
        // }
    },

    //overlay
    overlay: {
        content: '""',
        position: 'absolute',
        top: '100%',
        left: 0,
        width: '100%',
        visibility: 'hidden',
        opacity: 0,
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.5)',
        transition: 'all 0.2s',
        zIndex: 900,
    },

    // click
    isOff: {
        display: 'none',
        visibility: 'visible',
        opacity: 0,
    },
    //item
    boxEachChildCate: {
        position: 'relative',
        width: 'fit-content',
        transform: 'translateX(-30px)',
    },
    eachChildCate: {

        '&:before': {
            content: '""',
            position: 'absolute',
            left: '0',
            bottom: '0',
            right: '0',
            height: '2px',
            backgroundColor: '#1976d2',
            transformOrigin: '50% 50%',
            transform: 'scaleX(0)',
            transition: 'transform 0.2s ease',
        },
        '&:hover': {
            '&:before': {
                transformOrigin: 'bottom left',
                transform: 'scaleX(1)'
            }
        }
    }

}));