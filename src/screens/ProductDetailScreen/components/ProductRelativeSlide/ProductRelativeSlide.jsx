import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import useStyles from './styles'
import { useDispatch, useSelector } from 'react-redux';
// import required modules
import { Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

// import GetRandomNumber from 'utils/GetRandomNumber';
import { useNavigate } from 'react-router-dom';
import { Paper } from '@mui/material';
import { fetchAsyncGetRelativeProducts } from 'redux/slices/productSlice';
import { Toast } from 'utils/Toast';
const ProductRelativeSlide = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        (async () => {
            try {
                let response = await dispatch(fetchAsyncGetRelativeProducts({ use_page: 1, page: 2 })).unwrap()
                setProducts(response.data)

            } catch (e) {
                Toast('error', 'Lỗi!');
            }
        })();
    }, [dispatch]);
    const handleNavigate = (id) => {
        navigate(`/products/detail/${id}`);
    }
    return (
        <Box sx={{ marginBottom: '5rem' }}>
            <Typography variant="h5" gutterBottom sx={{ textAlign: 'Left', fontWeight: 'bold', marginBottom: '2rem' }}>
                Bạn Có Thể Thích
            </Typography>
            <Swiper
                className={classes.swiper}
                slidesPerView={6}
                spaceBetween={20}
                navigation={true}
                modules={[Navigation]}
            >
                {products.length > 0 ?
                    (
                        products.map((item, index) => (
                            <SwiperSlide key={index} className={classes.swiperSlide}>
                                <Paper className={classes.boxContent} onClick={() => handleNavigate(item.id)}>
                                    {item.thumbnail_url && (<img className={classes.swiperSlideImg} src={item.thumbnail_url} alt="Product" />)}
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography component="div" noWrap sx={{ fontWeight: 'bold', margin: '1rem 0' }}>
                                            {item.manufacturer_name}
                                        </Typography>
                                        <Typography component="div" sx={{ height: '2rem' }}>
                                            {item.product_name}
                                        </Typography>
                                    </Box>

                                </Paper>
                            </SwiperSlide>
                        ))
                    ) :
                    null}
            </Swiper >
        </Box>
    );
};

export default ProductRelativeSlide;