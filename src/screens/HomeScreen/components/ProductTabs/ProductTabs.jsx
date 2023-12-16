import StartIcon from '@mui/icons-material/Start';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useStyles from './styles'
// import required modules
import { Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import { Button } from '@mui/material';
// import GetRandomNumber from 'utils/GetRandomNumber';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAsyncGetBestSellerProducts, fetchAsyncGetLatestProducts, fetchAsyncGetRelativeProducts } from 'redux/slices/productSlice';
import { Toast } from 'utils/Toast';
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function ProductTabs() {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const navigate = useNavigate();
    const [productsTabOne, setProductsTabOne] = useState([])
    const [productsTabTwo, setProductsTabTwo] = useState([])

    const dispatch = useDispatch()
    useEffect(() => {
        (async () => {
            try {
                let responseOne = await dispatch(fetchAsyncGetLatestProducts()).unwrap()
                let responseTwo = await dispatch(fetchAsyncGetBestSellerProducts()).unwrap()
                setProductsTabOne(responseOne.data)
                setProductsTabTwo(responseTwo.data)
            } catch (e) {
                Toast('error', 'Lỗi!');
            }
        })();
    }, [dispatch]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //navigate
    const handleNavigate = (id) => {
        navigate(`/products/detail/${id}`);
    }
    return (

        <Box sx={{ width: '100%', margin: '5rem 0' }}>
            <Box>
                <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
                    SẢN PHẨM NỔI BẬT
                </Typography>
            </Box>
            <Box sx={{ margin: "2rem 0" }}>
                <Tabs sx={{ justifyContent: 'center', display: 'grid' }} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Mới nhất" {...a11yProps(0)} />
                    <Tab label="Bán chạy" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <Box>
                <TabPanel value={value} index={0}>
                    <Swiper
                        className={classes.swiper}
                        slidesPerView={6}
                        spaceBetween={45}
                        navigation={true}
                        modules={[Navigation]}
                    >
                        {productsTabOne.length > 0 ?
                            (
                                productsTabOne.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Box className={classes.boxContent} onClick={() => handleNavigate(item.id)}>
                                            <Box className={classes.boxContentNumber}>
                                                #{index + 1}
                                            </Box>
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
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Swiper
                        className={classes.swiper}
                        slidesPerView={6}
                        spaceBetween={45}
                        navigation={true}
                        modules={[Navigation]}
                    >
                        {productsTabTwo.length > 0 ?
                            (
                                productsTabTwo.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Box className={classes.boxContent} onClick={() => handleNavigate(item.id)}>
                                            <Box className={classes.boxContentNumber}>
                                                #{index + 1}
                                            </Box>
                                            {item.product_thumbnail_url && (<img className={classes.swiperSlideImg} src={item.product_thumbnail_url} alt="Product" />)}
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
                            <SwiperSlide>  <Typography>Không có sản phẩm nào!</Typography>   </SwiperSlide>}
                    </Swiper>
                </TabPanel>

            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: '1rem 0 3rem 0' }}>
                <Button variant="outlined">XEM THÊM</Button>
            </Box>
        </Box >

    );
}
