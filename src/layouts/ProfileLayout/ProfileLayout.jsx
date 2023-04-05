
import Header from 'components/Header/Header';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Avatar, Grid, Typography } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import LockResetIcon from '@mui/icons-material/LockReset';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import useStyles from './ProfileLayout.styles';
import StringAvatar from 'utils/StringAvatar';
import Footer from 'components/Footer/Footer';

const ProfileLayout = (props) => {
    const classes = useStyles();
    const { children } = props;
    const { id, display_name, avatar } = useSelector(state => state.user.userInfo)
    //select list item
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const params = useLocation();
    React.useEffect(() => {
        if (params.pathname.includes('order')) {
            setSelectedIndex(2)
        }
        else if (params.pathname.includes('change-password')) {
            setSelectedIndex(1)
        }
        else {
            setSelectedIndex(0)
        }


    }, [params])

    return (
        <Box>
            <Header />
            <Box sx={{ overflowX: 'hidden', padding: '2rem 5rem', minHeight: '90vh', bgcolor: 'rgb(245,245,245)' }}>
                <Box sx={{ display: 'flex', padding: '2rem 0' }}>
                    {avatar ? (
                        <Avatar className={classes.rootAvatar} src={avatar} />
                    ) : (
                        <Avatar className={classes.rootAvatar} {...StringAvatar(display_name)} />
                    )}
                    <Box sx={{ marginLeft: '1rem' }}>
                        <Typography variant="h7" sx={{ marginBottom: '2px' }} component="div">{display_name}</Typography>
                        <Box sx={{ display: 'flex', alignItems: "center" }}>
                            <BuildIcon fontSize='5px' sx={{ mr: "2px" }} />
                            <Typography color="text.secondary" >Chỉnh Sửa Hồ Sơ</Typography>
                        </Box>
                    </Box>
                </Box>
                <Grid container>
                    <Grid item xs={12} sm={2}>
                        <Box sx={{ width: '100%' }}>
                            <nav aria-label="main mailbox folders">
                                <List className={classes.rootList}>
                                    <ListItem disablePadding component={Link} to={`/user/${id}`}>
                                        <ListItemButton
                                            selected={selectedIndex === 0}
                                            onClick={(event) => handleListItemClick(event, 0)}
                                        >
                                            <ListItemIcon className={classes.rootListIcon}>
                                                <AccountCircleIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Thông tin người dùng" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding component={Link} to={`/user/${id}/change-password`}>
                                        <ListItemButton
                                            selected={selectedIndex === 1}
                                            onClick={(event) => handleListItemClick(event, 1)}
                                        >
                                            <ListItemIcon className={classes.rootListIcon}>
                                                <LockResetIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Thay đổi mật khẩu" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </nav>
                            <Divider />
                            <nav aria-label="secondary mailbox folders">
                                <List className={classes.rootList}>
                                    <ListItem disablePadding component={Link} to={`/user/${id}/order`}>
                                        <ListItemButton selected={selectedIndex === 2}
                                            onClick={(event) => handleListItemClick(event, 2)}>
                                            <ListItemIcon className={classes.rootListIcon}>
                                                <InventoryIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Đơn hàng" />
                                        </ListItemButton>
                                    </ListItem >
                                    <ListItem disablePadding component={Link} to={`/user/${id}/delete-account`}>
                                        <ListItemButton
                                            selected={selectedIndex === 3}
                                            onClick={(event) => handleListItemClick(event, 3)}
                                        >
                                            <ListItemIcon className={classes.rootListIcon}>
                                                <DeleteForeverIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Cài đặt" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </nav>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        {children}
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </Box>
    );
};

export default memo(ProfileLayout);