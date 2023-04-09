import * as React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import { Badge, Button, CardMedia, Drawer, Grid, IconButton, Typography, Stack, Paper } from '@mui/material';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { Toast } from 'utils/Toast';

import convertToVND from 'utils/ConvertToVND';
import { fetchAsyncDeleteCart, fetchAsyncGetAllCarts, fetchAsyncUpdateCart } from 'redux/slices/productSlice';

const Cart = () => {
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.user.userInfo);
    const carts = useSelector(state => state.products.carts);
    const classes = useStyles();
    //cart
    const [state, setState] = React.useState(false);



    React.useEffect(() => {
        (async () => {
            await dispatch(fetchAsyncGetAllCarts()).unwrap();
        })()

    }, [dispatch]);
    const handleClickIncrease = (item) => {
        console.log(item)
        dispatch(fetchAsyncUpdateCart({
            id: item.id,
            quantity: +item.quantity + 1
        })).unwrap().then(() => {
            dispatch(fetchAsyncGetAllCarts());
        }).catch(err => {
            console.log(err);
        })
    }
    const handleClickDecrease = (item) => {
        console.log(item)
        dispatch(fetchAsyncUpdateCart({
            id: item.id,
            quantity: +item.quantity - 1
        })).unwrap().then(() => {
            dispatch(fetchAsyncGetAllCarts());
        }).catch(err => {
            console.log(err);
        })
    }

    const handleClickDelete = (id) => {
        dispatch(fetchAsyncDeleteCart({ id })).unwrap().then(() => {
            dispatch(fetchAsyncGetAllCarts());
            Toast('success', 'Xóa sản phẩm thành công!');
        }).catch(err => {
            console.log(err);
        })
    }


    const RenderlistProductInCart = () => (
        <Box className={classes.cartBox}>
            {carts.length > 0 ?
                (carts.map((item, index) => (
                    <Card className={classes.cartCard} key={index}>
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                {Number(item.promotion) > 0 ?
                                    (
                                        <Box className={classes.sale}>
                                            <span className="home-product-item__sale-off-percent">{item.promotion * 100}%</span>

                                        </Box>

                                    ) : null}

                                {item.thumbnail_url ? (<CardMedia
                                    component="img"
                                    sx={{ width: '100%', height: '100%' }}
                                    image={item.thumbnail_url}
                                    alt="green iguana"
                                />) : (
                                    <CardMedia className={classes.rootCardMedia}
                                        component="img"
                                        sx={{ width: '100%', height: '100%' }}
                                        image='https://res.cloudinary.com/cosmeticv1/image/upload/v1653237466/cosmetic/products/Product17_2.webp'
                                        alt="green iguana"
                                    />
                                )}
                            </Grid>
                            <Grid item xs={9}>
                                <CardContent className={classes.rootCartContent}>
                                    <Typography noWrap gutterBottom>
                                        {item.name}
                                    </Typography>
                                    <Typography noWrap variant="body2" gutterBottom>
                                        Phân loại:  {item.label}
                                    </Typography>
                                    <Box sx={{ display: 'flex', margin: '1rem 0' }}>
                                        <Typography variant="body2" color="textSecondary" sx={{ marginRight: '2rem' }}>
                                            Giá: {convertToVND(parseFloat(item.price) + parseFloat(item.additional_price))}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" >
                                            Tổng: {convertToVND(parseFloat(((parseFloat(item.price) + parseFloat(item.additional_price)) * (1 - item.promotion))) * item.quantity)}

                                        </Typography>
                                    </Box>
                                    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                                        <Box>
                                            <Stack direction="row" alignItems="center" spacing={1}>
                                                <IconButton disabled={item.quantity === '1' ? true : false} onClick={() => handleClickDecrease(item)} aria-label="decrease" size="small"  >
                                                    <RemoveIcon fontSize="inherit" />
                                                </IconButton>
                                                <Typography>{item.quantity}</Typography>
                                                <IconButton aria-label="add" size="small">
                                                    <AddIcon fontSize="inherit" onClick={() => handleClickIncrease(item)} />
                                                </IconButton>
                                            </Stack>
                                        </Box>
                                        <IconButton aria-label="delete" size="small" sx={{ transformX: '2rem' }}>
                                            <DeleteIcon fontSize="inherit" onClick={() => handleClickDelete(item.id)} />
                                        </IconButton>
                                    </Stack>

                                </CardContent>


                            </Grid>
                        </Grid>
                    </Card>
                )))
                : (
                    <Typography sx={{ display: 'grid', placeItems: 'center', height: '70vh' }}>
                        Giỏ hàng trống!
                    </Typography>
                )
            }
        </Box>
    );

    return (
        <IconButton
            size="medium"
            sx={{ "&:hover": { color: "blue" }, margin: "0 0 0 1rem" }}
        >
            <Badge badgeContent={carts.length > 0 ? carts.length : null} color="primary">
                <ShoppingBasketOutlinedIcon onClick={toggleDrawer(true)} />
                <Drawer className={classes.cartDrawer}
                    anchor={'right'}
                    open={state}
                    onClose={toggleDrawer(false)}
                >
                    {RenderlistProductInCart()}

                    {/* total */}
                    <Box className={classes.cartBoxTotal} onClick={toggleDrawer(false)}>
                        <Paper className={classes.cartBoxTotalPaper} elevation={3}>
                            <Typography>
                                Tổng thanh toán ({carts.length} sản phẩm): {convertToVND(carts.reduce((total, item) => {
                                    return total + (item.price - (item.price * item.promotion)) * item.quantity
                                }, 0))}
                            </Typography>

                        </Paper>
                    </Box>

                    {/* button order */}
                    <Box className={classes.cartDivButton} onClick={toggleDrawer(false)}>
                        <Button component={Link} to={`/user/${userInfo.id}/payment`} className={classes.cartButtonOrder} disabled={carts.length > 0 ? false : true} fullWidth variant="contained">ĐẶT HÀNG</Button>
                    </Box>
                </Drawer>
            </Badge>
        </IconButton>
    );
};

export default Cart;