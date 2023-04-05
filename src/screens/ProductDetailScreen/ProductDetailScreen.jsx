import { Container, Typography, Grid, Button, Box, Paper, Divider, Rating } from '@mui/material';
import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Toast } from 'utils/Toast';

import useStyles from './styles';
import { fetchAsyncGetDetailProduct } from 'redux/slices/productSlice';
import ProductImagesSlider from './components/productImagesSlider';
import Description from './components/Description/Description';
import ProductRelativeSlide from './components/ProductRelativeSlide/ProductRelativeSlide';
import CommentList from './components/CommentList/CommentList';
const ProductDetailScreen = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [detailProduct, setDetailProduct] = useState({})
    const params = useParams();
    const { id } = params;


    useEffect(() => {
        (async () => {
            const res = await dispatch(fetchAsyncGetDetailProduct({
                "product_id": id
            })).unwrap();
            setDetailProduct(res.data)

        })()
    }, [dispatch, id]);


    // const handleAddProduct = () => {
    //     dispatch(fetchAsyncAddProductToCart({ id })).unwrap().then(() => {
    //         Toast('success', 'Thêm vào giỏ hàng thành công!');
    //         dispatch(fetchAsyncGetListProductInCart());
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }
    // console.log(detailProduct)

    return (
        <Container maxWidth='xl' sx={{ height: 'fit-content', marginBottom: '3rem', bgColor: 'gray' }}>
            {/* <Typography>Title</Typography> */}
            <Box sx={{ marginBottom: '4rem', marginTop: '3rem' }} className={classes.boxDetail}>
                {Object.keys(detailProduct).length > 0 && (
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={5}>
                            {detailProduct?.gallery_image_urls && <ProductImagesSlider images={JSON.parse(detailProduct.gallery_image_urls)} />}
                        </Grid>
                        <Grid item xs={12} sm={7} sx={{ fontSize: '3rem' }}>
                            <Typography variant='h6' sx={{ fontWeight: 650 }}>{detailProduct.product_name}</Typography>

                            <Typography variant='subtitle1' sx={{
                                marginBottom: '1rem'
                            }} >{detailProduct.manufacturer_name}</Typography>

                            <Box className={classes.boxRating}>
                                <Typography className={classes.typoRating1}>{parseFloat(detailProduct?.rating?.star_average, 10)}</Typography>
                                <Rating className={classes.rootRating} name="half-rating-read" defaultValue={parseFloat(detailProduct?.rating?.star_average, 10)} precision={0.5} readOnly />
                                <Divider orientation="vertical" flexItem />
                                <Typography className={classes.typoRating2}>{parseFloat(detailProduct?.rating?.user_rating_total, 10)} Đánh giá</Typography>
                            </Box>

                            {parseFloat(detailProduct.promotion) > 0 ?
                                (<Box className={classes.boxPrice}>
                                    <Typography gutterBottom sx={{ fontSize: '1.4rem', fontWeight: '100', opacity: '70%', textDecoration: 'line-through' }}>
                                        {detailProduct.price}
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1.5rem', color: 'red' }}>
                                        <Typography component="span">đ</Typography>{parseFloat(detailProduct.price - (detailProduct.price * detailProduct.promotion), 2).toFixed(2)}
                                    </Typography>
                                    <Typography>
                                        {detailProduct.promotion * 100}% Giảm
                                    </Typography>
                                </Box>) : (
                                    <Box className={classes.boxPrice}>
                                        <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: '600', }}>
                                            ${detailProduct.price}
                                        </Typography>
                                    </Box>
                                )}

                            {/* code */}
                            <Box className={classes.boxMargin}>
                                <Box className={classes.boxSale}>
                                    <Typography>
                                        Mã Giảm Giá
                                    </Typography>
                                    <Box>
                                        <Button variant="contained">5% off</Button>
                                        <Button variant="contained">10% off</Button>
                                        <Button variant="contained">15% off</Button>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className={classes.boxMargin}>
                                <Box className={classes.boxSize}>
                                    <Typography>Kích Thước</Typography>
                                    <Box>
                                        {detailProduct.size === "Small" ?
                                            (<>
                                                <Button variant="outlined" color="primary">Nhỏ</Button>
                                                <Button variant="outlined" color="primary" disabled>To</Button>
                                            </>) :
                                            (<>
                                                <Button variant="outlined" color="primary" disabled>Nhỏ</Button>
                                                <Button variant="outlined" color="primary" >To</Button>
                                            </>)}
                                    </Box>
                                </Box>
                            </Box>
                            <Box className={classes.boxMargin}>
                                <Box className={classes.boxSize}>
                                    <Typography>Dung Tích</Typography>
                                    <Box>
                                        {detailProduct.size === "Small" ?
                                            (<>
                                                <Button variant="outlined" color="primary">8.5 oz/250 mL</Button>
                                                <Button variant="outlined" color="primary" disabled>3.04 oz/90 mL</Button>
                                            </>) :
                                            (<>
                                                <Button variant="outlined" color="primary" disabled>8.5 oz/250 mL</Button>
                                                <Button variant="outlined" color="primary" >3.04 oz/90 mL</Button>
                                            </>)}
                                    </Box>
                                </Box>
                            </Box>
                            <Divider />
                            <Button variant="contained" className={classes.buttonCart} >Thêm vào giỏ hàng</Button>
                        </Grid>
                    </Grid>
                )}
            </Box>
            <Divider />
            <Grid container spacing={5}>
                <Grid item xs={9}>
                    <Box>
                        <Description detailProduct={detailProduct} />
                    </Box>
                    <Box>
                        <ProductRelativeSlide />
                    </Box>
                    <Box>
                        <Divider></Divider>

                        <CommentList />
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper} elevation={1} >
                        {/* <Typography variant='subtitle1'> Các nhãn hàng nổi tiếng </Typography> */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '2rem', height: 'fit-content', marginBottom: '5rem' }}>
                            <img src={require('assets/images/brand/img1.webp')} alt="img" />
                            <img src={require('assets/images/brand/img2.webp')} alt="img" />
                            <img src={require('assets/images/brand/img3.jpg')} alt="img" />
                            <img src={require('assets/images/brand/img4.jpg')} alt="img" />
                            <img src={require('assets/images/brand/img5.webp')} alt="img" />
                        </Box>
                    </Paper>

                </Grid>
            </Grid>

        </Container >
    );
};

export default memo(ProductDetailScreen);