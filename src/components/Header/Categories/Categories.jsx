
import * as React from 'react';
import useStyles from './Categories.styles';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories } from 'redux/slices/productSlice';
import { Link } from 'react-router-dom';
import GetCategoryList from 'utils/ListCategories';
import { CallApiByBody } from 'api/configApi';


const Categories = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const categories = useSelector(state => state.products.categories)

    //hidden nav
    const [isCheck, setIsCheck] = React.useState(false);
    const handleHiddenNav = () => {
        setIsCheck(true);
    }
    useEffect(() => {
        (async () => {
            try {
                let response = await CallApiByBody("categories/get-all-categories.php", "get", null);
                console.log(response)
                dispatch(setCategories(GetCategoryList(response.data.data)))
            } catch (e) {
                toast.error('Lỗi!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        })();
    }, [dispatch]);

    //check if have param in url
    useEffect(() => {
        if (isCheck) {
            setIsCheck(false)
        }
    }, [isCheck]);



    const handleMouseLeave = (event) => {
        if (event.target.id === 'overlay') {
            setIsCheck(true)
        }
    }
    // list categories render
    const listNav = categories.map((category, index) => {
        return (
            <li key={index} className={classes.primaryCategories}>
                {category.name}
                <Box className={!isCheck ? classes.secondaryCategories : classes.isOff}  >
                    <Grid container spacing={3}>
                        {category.childCategoryList ? category.childCategoryList.map((childCategory, index) => {
                            return (
                                <Grid item xs={3} key={index} >
                                    <Box sx={{ display: 'grid', placeItems: 'center' }} >
                                        <Box className={classes.boxEachChildCate} onClick={handleHiddenNav}>
                                            <Typography component={Link} to={`/products/${childCategory.id}`} className={classes.eachChildCate}> {childCategory.name}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>

                            )
                        }) : null}
                    </Grid>
                </Box>
                <Box id="overlay" className={!isCheck ? classes.overlay : classes.isOff} >

                </Box>
            </li >
        )
    })

    return (
        <Box sx={{ mt: "8rem" }} onMouseMove={handleMouseLeave}>
            <nav className={classes.nav}>
                <ul className={classes.ul}>
                    {categories.length > 0 ?
                        (
                            <>
                                {listNav}
                                <li>
                                    Blogs
                                </li>
                                <li>
                                    Về chúng tôi
                                </li>
                                <li>
                                    Liên hệ
                                </li>
                            </>
                        )
                        : null}
                </ul >
            </nav >
        </Box >
    );
};

export default Categories;