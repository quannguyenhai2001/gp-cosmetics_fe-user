import * as React from 'react';
import useStyles from './Navbar.styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import { Container, Divider, IconButton, TextField, Tooltip, tooltipClasses, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import PeopleIcon from '@mui/icons-material/People';
import StoreIcon from '@mui/icons-material/Store';
import logo from 'assets/img/logo/logo_web.png';

//hide and show navbar
function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

//create circle avatar
function stringToColor(string) {
    let hash = 0;
    let i;
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
    return color;
}
function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
            width: '30px',
            height: '30px',
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

//box
const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip arrow={true} {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        border: '1px solid #dadde9',
        position: 'relative',
        top: '-10px',
    },
}));

export default function NavBar(props) {
    const classes = useStyles();

    return (
        <Container maxWidth="xl">
            <HideOnScroll {...props}>
                <AppBar className={classes.rootAppBarTop} elevation={0}>
                    <Toolbar className={classes.rootToolBar}>
                        <Box sx={{ width: "15rem", height: "2.8rem", marginRight: 4 }}>
                            <img style={{ width: "100%", height: "100%" }} src={logo} alt="green iguana" />
                        </Box>

                        <TextField
                            className={classes.searchInput}
                            InputProps={{
                                endAdornment: (
                                    <IconButton>
                                        <SearchOutlinedIcon />
                                    </IconButton>
                                )
                            }}
                        />


                        <CustomTooltip
                            title={
                                <>
                                    <Typography color="inherit">
                                        Bạn chưa đăng nhập!
                                    </Typography>
                                </>
                            }
                        >
                            <Box sx={{ display: "flex", alignItems: "center", margin: "0 0 0 10rem", "&:hover": { color: "blue", cursor: "pointer" } }}>
                                <IconButton
                                    size="medium"
                                    sx={{ "&:hover": { color: "blue" } }}
                                >
                                    <StoreIcon />
                                </IconButton>
                                <Typography>Cửa Hàng & Dịch Vụ</Typography>
                            </Box>
                        </CustomTooltip>

                        <CustomTooltip
                            title={
                                <>
                                    <Typography color="inherit">
                                        Bạn chưa đăng nhập!
                                    </Typography>
                                </>
                            }
                        >

                            <Box sx={{ display: "flex", alignItems: "center", margin: "0 2rem 0 2rem", "&:hover": { color: "blue", cursor: "pointer" } }}>
                                <IconButton
                                    size="medium"
                                    sx={{ "&:hover": { color: "blue" } }}
                                >
                                    <PeopleIcon />
                                </IconButton>
                                <Typography>Cộng Đồng</Typography>
                            </Box>
                        </CustomTooltip>

                        <Divider sx={{
                            height: "30px",
                            marginTop: "23px",
                            marginLeft: "11px"
                        }} orientation="vertical" variant="middle" flexItem />

                        <Box sx={{ display: "flex", alignItems: "center", margin: "0 2rem 0 2rem", "&:hover": { color: "blue", cursor: "pointer" } }}>
                            <Typography >Đăng Nhập</Typography>
                        </Box>

                        <IconButton
                            size="medium"
                            aria-label="Like"
                            sx={{ "&:hover": { color: "blue" }, margin: "0 0 0 4rem" }}
                        >
                            <FavoriteBorderIcon />
                        </IconButton>

                        <IconButton
                            size="medium"
                            aria-label="Like"
                            sx={{ "&:hover": { color: "blue" }, margin: "0 0 0 1rem" }}
                        >

                            <ShoppingBasketOutlinedIcon />

                        </IconButton>

                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </Container>
    );
}