import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    swiper: {
        width: '100%',
        height: '30rem',
        '& .swiper-button-prev': {
            '&:after': {
                fontSize: '3rem',
                transform: 'translateY(-20px)',
                color: 'black'
            },
        },
        '& .swiper-button-next': {
            '&:after': {
                fontSize: '3rem',
                transform: 'translateY(-20px)',
                color: 'black'
            },
        }
    },
    swiperSlide: {
        padding: '0.1rem'
    },
    swiperSlideImg: {
        display: 'block',
        width: '100%',
        height: '70%',
        objectFit: 'fill',
        marginBottom: '2rem'

    },

    //number 
    boxContent: {
        position: 'relative',
        width: '100%',
        height: '95%',
        padding: '0.5rem',
        cursor: 'pointer',

        // boxShadow: '7px 7px 9px #ebebeb,-7px -7px 9px #ffffff'
    },


}));