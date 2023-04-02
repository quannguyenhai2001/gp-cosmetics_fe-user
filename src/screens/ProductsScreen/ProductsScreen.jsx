import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useStyles from './ProductsScreen.styles';

const ProductsScreen = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const params = useParams();

    //get title category
    const categories = useSelector(state => state.products.categories)
    console.log(categories)
    const [titleCategory, setTitleCategory] = React.useState({});
    useEffect(() => {
        categories.forEach(category => {
            category.childCategoryList.forEach(childCategory => {
                if (childCategory.id === params.categoryId) {
                    setTitleCategory({ fatherCategory: category, childCategory });
                }
            })
        })
    }, [categories, params.categoryId]);

    // //get manu and delete list manu
    // useEffect(() => {
    //     dispatch(fetchAsyncGetManu())
    //     return () => {
    //         dispatch(deleteListProducts());

    //     }
    // }, [dispatch, params.categoryId]);


    //page panigation
    const [page, setPage] = React.useState(1);
    const handleSetPage = () => {
        setPage(1);
    }
    return (
        <Container maxWidth="xl" className={classes.screen}>
            <Grid container spacing={4}>
                <Grid item xs={2}>
                    <Typography sx={{ marginBottom: '1rem' }}>
                        {Object.keys(titleCategory).length > 0 ?
                            (<>
                                {titleCategory.fatherCategory.name} &gt; {titleCategory.childCategory.name}
                            </>)
                            : ''}
                    </Typography>
                    {/* <Filter page={page} handleSetPage={handleSetPage} /> */}
                </Grid>
                <Grid item xs={10}>
                    {/* <ListProducts setPage={setPage} page={page} /> */}
                </Grid>
            </Grid>
            <Divider sx={{ margin: '2rem 0' }} />
            <Box>
                {/* <SlideProductRelative /> */}
            </Box>
        </Container >

    );
};

export default ProductsScreen;