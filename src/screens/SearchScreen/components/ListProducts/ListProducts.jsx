import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid, Rating } from '@mui/material';
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';
import convertToVND from 'utils/ConvertToVND';
const ListProducts = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const products = useSelector(state => state.products.products);

    //navigate
    const handleClick = (id) => {
        navigate(`/products/detail/${id}`);
    }
    return (
        <Grid container spacing={4}>
            {products.length > 0 ?
                (products.map((product, index) => {
                    return (
                        <Grid item xs={2} key={index}>
                            <Card className={classes.rootCard} onClick={() => { handleClick(product.id) }}>
                                {/* sale */}
                                {Number(product.promotion) > 0 ?
                                    (<Typography className={classes.sale} color="text.secondary">
                                        Sale: {product.promotion}%
                                    </Typography>) : null}
                                {product.thumbnail_url ? (<CardMedia className={classes.rootCardMedia}
                                    component="img"
                                    height="180"
                                    image={product.thumbnail_url}
                                    alt="green iguana"
                                />) : (
                                    <CardMedia className={classes.rootCardMedia}
                                        component="img"
                                        height="180"
                                        image='https://res.cloudinary.com/cosmeticv1/image/upload/v1653237466/cosmetic/products/Product17_2.webp'
                                        alt="green iguana"
                                    />
                                )}
                                <CardContent>
                                    <Typography gutterBottom noWrap sx={{ fontWeight: 650 }} component="div">
                                        {product.manufacturer_name}

                                    </Typography>
                                    <Typography gutterBottom sx={{ height: 42 }} component="div">
                                        {product.product_name}

                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'baseline' }}>
                                        {parseFloat(product.promotion) > 0 ?
                                            (<>
                                                <Typography gutterBottom sx={{ fontSize: '1.4rem', fontWeight: '100', opacity: '70%', textDecoration: 'line-through' }}>
                                                    {convertToVND(product.price)}
                                                </Typography>
                                                <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1.5rem', color: 'red' }}>
                                                    {convertToVND(parseFloat(product.price - (product.price * product.promotion / 100)))}
                                                </Typography>
                                            </>) : (
                                                <>
                                                    <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: '600', }}>
                                                        ${product.price}
                                                    </Typography>
                                                </>
                                            )}

                                    </Box>
                                    <Box sx={{ transform: 'translateY(-2px)' }}>
                                        <Rating className={classes.rootRatting} name="half-rating-read" defaultValue={product.rating ? parseFloat(product.rating?.star_average) : 0} precision={0.5} readOnly />

                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                }))
                : (<Grid item xs={12} >
                    <h1>Không có kết quả!</h1>
                </Grid>)}
        </Grid>

    );
};

export default ListProducts;