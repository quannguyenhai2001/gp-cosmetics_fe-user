import * as React from 'react';
import useStyles from './Navbar.styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { Avatar, Badge, Divider, IconButton, List, ListItem, TextField, Tooltip, tooltipClasses, Typography } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import StoreIcon from '@mui/icons-material/Store';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import FaceIcon from '@mui/icons-material/Face';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import logo from 'assets/images/logo/logo_web.png';
import { Link } from 'react-router-dom';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import { useSelector } from 'react-redux';
import Cart from './components/Cart';

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
    const userInfo = useSelector(state => state.user.userInfo);
    const classes = useStyles();

    return (
        <HideOnScroll {...props}>
            <AppBar className={classes.rootAppBarTop} elevation={0}>
                <Toolbar className={classes.rootToolBar}>
                    <Box className={classes.centerItem}>
                        <Box component={Link} to="/" sx={{ height: "2.5rem", mr: 2 }}>
                            <img style={{ width: "100%", height: "100%" }} src={logo} alt="green iguana" />
                        </Box>
                    </Box>
                    <TextField
                        className={classes.searchInput}
                        placeholder="Tìm kiếm"
                        InputProps={{
                            endAdornment: (
                                <IconButton>
                                    <SearchOutlinedIcon />
                                </IconButton>
                            )
                        }}
                    />
                    <Box className={classes.centerItem} >
                        {Object.keys(userInfo).length ? (<>
                            <CustomTooltip
                                title={
                                    <>
                                        <Typography color="inherit">Tính năng đang phát triển</Typography>

                                    </>
                                }
                            >
                                <Box className={classes.BoxLeftIcon}>
                                    <IconButton
                                        size="medium"
                                        sx={{ "&:hover": { color: "blue" } }}
                                    >
                                        <Badge badgeContent={0} color="primary">
                                            <ContactMailOutlinedIcon />
                                        </Badge>
                                    </IconButton>
                                    <Typography>Cửa Hàng & Dịch Vụ</Typography>
                                </Box>
                            </CustomTooltip>

                            {/* Community */}
                            <CustomTooltip
                                title={
                                    <>
                                        <Typography color="inherit">Tính năng đang phát triển</Typography>

                                    </>
                                }
                            >
                                <Box className={classes.BoxRightIcon}>
                                    <IconButton
                                        size="medium"
                                        sx={{ "&:hover": { color: "blue" } }}
                                    >
                                        <Badge badgeContent={0} color="primary">
                                            <ContactMailOutlinedIcon />
                                        </Badge>
                                    </IconButton>
                                    <Typography>Cộng Đồng</Typography>
                                </Box>
                            </CustomTooltip>

                            {/* line */}
                            <Divider className={classes.divideRoot} orientation="vertical" variant="middle" flexItem />

                            {/* Profile */}
                            <CustomTooltip
                                title={
                                    <>
                                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                            <ListItem className={classes.rootListItem} disablePadding>
                                                <Box sx={{ marginRight: 1 }}>
                                                    <AccountCircleIcon />
                                                </Box>
                                                <Typography component={Link} to={`/user/${userInfo.id}`} sx={{ transform: 'translateY(-1px)' }}>
                                                    Hồ Sơ
                                                </Typography>

                                            </ListItem>
                                            <ListItem className={classes.rootListItem1} disablePadding>
                                                <Box sx={{ marginRight: 1 }}>
                                                    <ReceiptIcon />
                                                </Box>
                                                <Typography component={Link} to={`/user/${userInfo.id}/order/all`} sx={{ transform: 'translateY(-1px)' }}>
                                                    Đơn Đặt Hàng
                                                </Typography>

                                            </ListItem>

                                            <Divider sx={{ margin: '0.5rem 0' }} />
                                            <ListItem className={classes.rootListItem2} disablePadding>
                                                <Box sx={{ marginRight: 1 }}>
                                                    <LogoutIcon />
                                                </Box>
                                                <Typography>
                                                    Đăng Xuất
                                                </Typography>
                                            </ListItem>

                                        </List>
                                    </>
                                }
                            >
                                <Box sx={{ display: "flex", alignItems: "center", margin: "0 1rem 0 1.5rem", "&:hover": { color: "blue", cursor: "pointer" } }}>
                                    {userInfo.avatar ? (
                                        <Avatar className={classes.rootAvatar} src={userInfo.avatar} />
                                    ) : (
                                        <Avatar className={classes.rootAvatarString} {...stringAvatar(userInfo.display_name)} />
                                    )}
                                    <Typography className={classes.typoAvatar}>{userInfo.display_name}</Typography>
                                </Box>
                            </CustomTooltip>


                            {/* cart */}
                            <Cart />
                        </>) : (<>
                            <CustomTooltip
                                title={
                                    <>
                                        <Typography color="inherit">
                                            Bạn chưa đăng nhập!
                                        </Typography>
                                    </>
                                }
                            >
                                <Box className={classes.BoxLeftIcon}>
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

                                <Box className={classes.BoxRightIcon}>
                                    <IconButton
                                        size="medium"
                                        sx={{ "&:hover": { color: "blue" } }}
                                    >
                                        <PeopleIcon />
                                    </IconButton>
                                    <Typography>Cộng Đồng</Typography>
                                </Box>
                            </CustomTooltip>

                            <Divider className={classes.divideRoot} orientation="vertical" variant="middle" flexItem />


                            <CustomTooltip
                                title={
                                    <>
                                        <Typography color="inherit">
                                            Bạn chưa đăng nhập!
                                        </Typography>
                                    </>
                                }
                            >

                                <Box className={classes.BoxRightIcon}>
                                    <IconButton
                                        size="medium"
                                        sx={{ "&:hover": { color: "blue" } }}
                                    >
                                        <FaceIcon />
                                    </IconButton>
                                    <Typography component={Link} to="/sign-in">Đăng Nhập</Typography>
                                </Box>
                            </CustomTooltip>
                            <IconButton
                                size="medium"
                                aria-label="cart"
                                sx={{ "&:hover": { color: "blue" }, margin: "0 0 0 1rem" }}
                            >
                                <ShoppingBasketOutlinedIcon />

                            </IconButton></>)}
                    </Box>

                </Toolbar>
            </AppBar>
        </HideOnScroll >
    );
}