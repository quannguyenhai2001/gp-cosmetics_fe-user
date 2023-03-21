
import * as React from 'react';
import useStyles from './Categories.styles';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';

const listCategories = [
    {
        name: "test", listChildCategories: [
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
        ]
    }, {
        name: "test", listChildCategories: [
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
        ]
    }, {
        name: "test", listChildCategories: [
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
        ]
    }, {
        name: "test", listChildCategories: [
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
        ]
    }, {
        name: "test", listChildCategories: [
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
        ]
    }, {
        name: "test", listChildCategories: [
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
        ]
    }, {
        name: "test", listChildCategories: [
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
        ]
    }, {
        name: "test", listChildCategories: [
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
            { name: "test" },
        ]
    },
]

const Categories = () => {
    const classes = useStyles()

    //hidden nav
    const [isCheck, setIsCheck] = React.useState(false);
    const handleHiddenNav = () => {
        setIsCheck(true);
    }

    //check if have param in url
    React.useEffect(() => {
        if (isCheck) {
            setIsCheck(false)
            console.log("check")
        }
    }, [isCheck]);


    const handleMouseLeave = (event) => {
        if (event.target.id === 'overlay') {
            setIsCheck(true)
        }
    }
    // list categories render
    const listNav = listCategories.map((category, index) => {
        return (
            <li key={index} className={classes.primaryCategories}>
                {category.name}
                <Box className={!isCheck ? classes.secondaryCategories : classes.isOff}  >
                    <Grid container spacing={3}>
                        {category.listChildCategories ? category.listChildCategories.map((childCategory, index) => {
                            return (
                                <Grid item xs={3} key={index} >
                                    <Box sx={{ display: 'grid', placeItems: 'center' }} >
                                        <Box className={classes.boxEachChildCate} onClick={handleHiddenNav}>
                                            <Typography className={classes.eachChildCate}> {childCategory.name}</Typography>
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
                    {listCategories.length > 0 ?
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