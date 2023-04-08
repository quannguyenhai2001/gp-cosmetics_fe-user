import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { Box, Grid, Pagination, Skeleton, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles';
import Rating from '@mui/material/Rating';
import convertToVND from 'utils/ConvertToVND';

const Products = (props) => {
    const classes = useStyles();
    const listProducts = useSelector(state => state.products.products);
    const pageInfo = useSelector(state => state.products.pageInfo);

    console.log(listProducts);
    const errorListProducts = useSelector(state => state.products.errorListProducts);
    const navigate = useNavigate();
    const [valueRating, setValueRating] = React.useState(2);

    //navigate
    const handleClick = (id) => {
        navigate(`/products/detail/${id}`);
    }
    //skeleton
    let arraySkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    //pagination
    const handleChange = (event, value) => {
        props.setPage(value);
    };

    //render lissProducts
    let renderList = listProducts.length > 0 ?
        (<Grid container spacing={4}>
            {listProducts.map((product, index) => {
                return (
                    <Grid item xs={2.4} key={index}>
                        <Card className={classes.rootCard} onClick={() => { handleClick(product.id) }}>
                            {/* sale */}
                            {Number(product.promotion) > 0 ?
                                (
                                    <Box className={classes.sale}>
                                        <span className="home-product-item__sale-off-percent">{product.promotion * 100}%</span>
                                        <span className="home-product-item__sale-off-sale">Giảm</span>
                                    </Box>

                                ) : null}

                            {/* image */}
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

                            {/* content */}
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
                                                {convertToVND(parseFloat(product.price - (product.price * product.promotion)))}
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
            })}
        </Grid>)
        : (
            <Grid container spacing={4}>
                {arraySkeleton.map((item, index) => {
                    return (
                        <Grid item xs={3} key={index} >
                            <Stack spacing={3}>
                                <Skeleton variant="rectangular" width="100%" height={220} />
                                <Skeleton variant="text" />
                                <Skeleton variant="text" />
                                <Skeleton variant="text" />
                            </Stack>
                        </Grid>
                    )
                })}
            </Grid>
        )
    //rating

    return (
        <Box>
            <Typography sx={{ marginBottom: '1rem' }} color="text.secondary">
                {pageInfo.total ?? 0} kết quả
            </Typography>
            <Box>
                {
                    !errorListProducts ?
                        (
                            <>
                                {renderList}
                                <Box sx={{ margin: '5rem 0', textAlign: 'center' }}>
                                    <Stack spacing={2} className={classes.stackPagination}>
                                        <Pagination count={pageInfo.total_page} color="primary" page={props.page} onChange={handleChange} />

                                    </Stack>
                                </Box>
                            </>
                        ) :
                        (<Grid item xs={12}>
                            Hết hàng!
                        </Grid>)
                }
            </Box>
        </Box>
    )
}


export default React.memo(Products);
