import { Container, Typography, Grid, Button, Box, Paper, Divider, Rating, Stack, IconButton } from '@mui/material';
import React, { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Toast } from 'utils/Toast';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useStyles from './styles';
import { fetchAsyncCreateCart, fetchAsyncGetAllCarts, fetchAsyncGetAllSizes, fetchAsyncGetDetailProduct } from 'redux/slices/productSlice';
import ProductImagesSlider from './components/productImagesSlider';
import Description from './components/Description/Description';
import ProductRelativeSlide from './components/ProductRelativeSlide/ProductRelativeSlide';
import CommentList from './components/CommentList/CommentList';
import convertToVND from 'utils/ConvertToVND';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const ProductDetailScreen = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [detailProduct, setDetailProduct] = useState({})
    const [sizes, setSizes] = useState([])
    const [currentSize, setCurrentSize] = useState({})
    const [quantity, setQuantity] = useState(1)

    const params = useParams();
    const { id } = params;


    useEffect(() => {
        (async () => {
            const res1 = await dispatch(fetchAsyncGetDetailProduct({
                "product_id": id
            })).unwrap();
            const res2 = await dispatch(fetchAsyncGetAllSizes({
                "product_id": id
            })).unwrap();
            setDetailProduct(res1.data)
            setSizes(res2.data)
        })()
    }, [dispatch, id]);


    const handleClickSize = (value) => {
        if (value.id === currentSize.id) {
            setCurrentSize({})
            return
        }
        setCurrentSize(value)
    }
    const handleReduceQuantity = () => {
        setQuantity(quantity - 1)
    }
    const handleAddQuantity = () => {
        setQuantity(quantity + 1)
    }


    const handleClickAddToCart = () => {
        if (Object.keys(currentSize).length > 0) {
            dispatch(fetchAsyncCreateCart({
                quantity,
                product_id: detailProduct.id,
                size_id: currentSize.id
            })).unwrap().then(() => {
                dispatch(fetchAsyncGetAllCarts());
                Toast('success', 'Thêm sản phẩm thành công!');
            }).catch(err => {
                console.log(err);
            })
        }
        else {
            Toast('warning', 'Hãy chọn phân loại hàng!');

        }

    }

    const isEnabledSizeButton = (size) => {
        if (Object.keys(currentSize).length > 0 && currentSize.id === size.id) {
            return true
        }
        return false

    }
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
                                <Typography className={classes.typoRating1}>{detailProduct.rating ? parseFloat(detailProduct?.rating?.star_average, 10) : 0}</Typography>
                                <Rating className={classes.rootRating} name="half-rating-read" defaultValue={detailProduct.rating ? parseFloat(detailProduct?.rating?.star_average, 10) : 0} precision={0.5} readOnly />
                                <Divider orientation="vertical" flexItem />
                                <Typography className={classes.typoRating2}>{detailProduct.rating ? parseFloat(detailProduct?.rating?.user_rating_total, 10) : 0} Đánh giá</Typography>
                            </Box>

                            {parseFloat(detailProduct.promotion) > 0 ?
                                (<Box className={classes.boxPrice}>
                                    <Typography gutterBottom sx={{ fontSize: '1.4rem', fontWeight: '100', opacity: '70%', textDecoration: 'line-through' }}>
                                        {convertToVND(detailProduct.price)}
                                    </Typography>

                                    <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1.5rem', color: 'red' }}>
                                        {convertToVND(parseFloat(detailProduct.price - (detailProduct.price * detailProduct.promotion)))}
                                    </Typography>
                                    <Typography sx={{ fontSize: 10 }}>
                                        {detailProduct.promotion * 100}% Giảm
                                    </Typography>
                                </Box>) : (
                                    <Box className={classes.boxPrice}>
                                        <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: '600', }}>
                                            {convertToVND(detailProduct.price)}
                                        </Typography>
                                    </Box>
                                )}
                            <Grid container sx={{ display: "flex", alignItems: "center", mb: "2rem", alignContent: "center" }}>
                                <Grid item xs={2}>
                                    <Typography mt="5px">Kích Thước</Typography>
                                </Grid>

                                <Grid item xs={10}>
                                    {
                                        sizes.length > 0 ? (
                                            <>
                                                {sizes.map((size, index) => (<Button className={classes.customButton} key={index} disabled={parseFloat(size.quantity) ? false : true} variant={isEnabledSizeButton(size) ? "contained" : "outlined"} size="small" sx={{ mr: 1 }} onClick={() => handleClickSize(size)}>{size.label}</Button>))}
                                            </>)
                                            : null
                                    }
                                </Grid>
                            </Grid>


                            <Grid container sx={{ display: "flex", alignItems: "center", alignContent: "center" }}>
                                <Grid item xs={2}>
                                    <Typography mt="5px">Số lượng</Typography>
                                </Grid>

                                <Grid item xs={10}>
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <Box sx={{ marginRight: "2rem" }}>
                                            <Stack direction="row" alignItems="center" spacing={1}>
                                                <IconButton disabled={quantity === '1' ? true : false} onClick={handleReduceQuantity} aria-label="delete" size="small"  >
                                                    <RemoveIcon fontSize="inherit" />
                                                </IconButton>
                                                <Typography>{quantity}</Typography>
                                                <IconButton aria-label="delete" size="small" onClick={handleAddQuantity} disabled={quantity === currentSize.quantity ? true : false}>
                                                    <AddIcon fontSize="inherit" />
                                                </IconButton>
                                            </Stack>
                                        </Box>
                                        <Box>
                                            {currentSize.quantity && (<Typography>
                                                {currentSize.quantity} sản phẩm có sẵn
                                            </Typography>)}
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Button variant="contained" size="small" onClick={handleClickAddToCart} className={classes.buttonCart} startIcon={<ShoppingCartIcon />} >Thêm vào giỏ hàng</Button>
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
                        <Divider sx={{ marginBottom: '2rem' }}></Divider>

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