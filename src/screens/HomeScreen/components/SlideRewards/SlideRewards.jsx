import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useStyles from './styles'
// import required modules
import { Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAsyncGetRelativeProducts } from 'redux/slices/productSlice';
import { Toast } from 'utils/Toast';
const SlideRewards = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [productsTab, setProductsTab] = useState([])

    const dispatch = useDispatch()
    useEffect(() => {
        (async () => {
            try {
                let responseOne = await dispatch(fetchAsyncGetRelativeProducts({ use_page: 1, page: 1 })).unwrap()
                setProductsTab(responseOne.data)


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
            <Box className={classes.boxTitle}>
                <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginBottom: '4rem' }}>
                    SẢN PHẨM SẮP RA MẮT
                </Typography>
                <Button className={classes.boxTitleButton} endIcon={<ArrowForwardIcon />} variant="text">THÊM</Button>
            </Box>

            <Swiper
                className={classes.swiper}
                slidesPerView={6}
                spaceBetween={45}
                navigation={true}
                modules={[Navigation]}
            >
                {productsTab.length > 0 ?
                    (
                        productsTab.slice(1, 15).map((item, index) => (
                            <SwiperSlide key={index}>
                                <Box className={classes.boxContent} onClick={() => handleNavigate(item.id)}>
                                    {item.thumbnail_url && (<img className={classes.swiperSlideImg} src={item.thumbnail_url} alt="Product" />)}
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography component="div" noWrap sx={{ fontWeight: 'bold', margin: '1rem 0' }}>
                                            {item.manufacturer_name}
                                        </Typography>
                                        <Typography component="div" sx={{ height: '2rem' }}>
                                            {item.product_name}
                                        </Typography>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))
                    ) :
                    null}
            </Swiper >
        </Box>
    );
};

export default SlideRewards;