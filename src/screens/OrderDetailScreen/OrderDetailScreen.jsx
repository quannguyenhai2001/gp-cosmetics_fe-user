import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncGetAllBillDetails } from 'redux/slices/productSlice';
import { useLocation, useParams } from 'react-router-dom';
import { CardMedia, Divider, Grid, Typography, Rating } from '@mui/material';
import Card from '@mui/material/Card';

import useStyles from './styles';

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';

import { blue } from '@mui/material/colors';
import { Toast } from 'utils/Toast';
import { useNavigate } from 'react-router-dom';
import convertToVND from 'utils/ConvertToVND';
import { BILL_STATUS } from 'constants/contants';

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };



    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Set backup account</DialogTitle>

        </Dialog>
    );
}

const OrderDetailScreen = () => {
    const [billDetails, setBillDetails] = useState([])
    const { orderID } = useParams();
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const status = location.state.status;

    const getOptionLabel = (value, optionsType) => {
        const optionValue = optionsType.find(option => option.value === value);
        return optionValue?.label;
    };
    React.useEffect(() => {
        (async () => {
            const res = await dispatch(fetchAsyncGetAllBillDetails({ bill_id: orderID })).unwrap();
            setBillDetails(res.data)
            console.log(res)
        })()

    }, [dispatch, orderID]);


    const handleNavigate = (id) => {
        navigate(`/products/detail/${id}`);
    }

    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };
    return (
        <Box>
            <Box mb="1.5rem">
                <Button startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)}>
                    Trở lại
                </Button>
            </Box>
            {billDetails.length > 0 ?

                (billDetails.map((item, index) => {
                    return (
                        <Box key={index}>

                            <Box>
                                <Box sx={{ marginBottom: '3rem' }} >
                                    <Card sx={{ minWidth: 275, padding: '2rem 2rem' }} elevation={4}>
                                        <Box sx={{ marginBottom: '1rem' }}>
                                            <Grid container spacing={1}>
                                                <Grid item xs={1}>
                                                    {item.product_thumbnail_url ? (<CardMedia
                                                        component="img"
                                                        height="80"
                                                        image={item.product_thumbnail_url}
                                                        alt="green iguana"
                                                    />) : (
                                                        <CardMedia className={classes.rootCardMedia}
                                                            component="img"
                                                            height="80"
                                                            image='https://res.cloudinary.com/cosmeticv1/image/upload/v1653237466/cosmetic/products/Product17_2.webp'
                                                            alt="green iguana"
                                                        />
                                                    )}
                                                </Grid>
                                                <Grid item xs={11}>

                                                    <Typography sx={{ fontWeight: 600 }} variant="h5" >
                                                        {item.product_name}
                                                    </Typography>


                                                    <Typography variant="h6" >
                                                        {item.product_name}
                                                    </Typography>


                                                    <Grid container
                                                    >
                                                        <Grid item xs={5}>
                                                            <Grid container sx={{ marginBottom: '0.5rem' }}>
                                                                <Grid item xs={3}>
                                                                    <Typography>
                                                                        Phân loại hàng
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item xs={0.5}>
                                                                    <Typography>
                                                                        :
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item xs={2}>
                                                                    <Typography>
                                                                        {item.size_label}
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>

                                                        <Grid item xs={7} textAlign="right">
                                                            <Box>
                                                                <Typography variant="subtitle1" component="span" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: '100', marginRight: '1rem', textDecoration: 'line-through', opacity: '70%' }}>
                                                                    {convertToVND(parseFloat(item.product_price) + parseFloat(item.size_additional_price))}
                                                                </Typography>
                                                                <Typography variant="subtitle1" component="span" gutterBottom sx={{ fontSize: '1.5rem', color: 'red' }}>
                                                                    {convertToVND(parseFloat(((parseFloat(item.product_price) + parseFloat(item.size_additional_price)) * (1 - item.product_promotion))))}
                                                                </Typography>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>

                                                    <Typography>
                                                        x {item.quantity}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Divider />

                                        <Box textAlign="right" m="10px 0">
                                            Thành tiền:
                                            <Typography variant="subtitle1" component="span" gutterBottom sx={{ fontSize: '1.8rem', fontWeight: '600', textAlign: 'right', color: 'red' }}>
                                                {convertToVND(parseFloat(((parseFloat(item.product_price) + parseFloat(item.size_additional_price)) * (1 - item.product_promotion))) * item.quantity)}
                                            </Typography>
                                        </Box>


                                        {status === "delivered" && (
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", gap: '1rem' }}>
                                                <Box>
                                                    {
                                                        item.is_rated ? (
                                                            <Typography>Đã nhận đánh giá</Typography>
                                                        )
                                                            : (<Typography>Chưa được đánh giá </Typography>)
                                                    }
                                                </Box>
                                                <Box sx={{ display: 'flex', gap: '2rem' }}>
                                                    {!item.is_rated ? (
                                                        <>
                                                            <Button variant="contained" sx={{ width: '10rem' }} onClick={handleClickOpen}>ĐÁNH GIÁ</Button>

                                                            <SimpleDialog
                                                                selectedValue={selectedValue}
                                                                open={open}
                                                                onClose={handleClose}
                                                            />
                                                        </>)
                                                        :
                                                        (<Button variant="contained" onClick={() => handleNavigate(item.product_id)} sx={{ width: '10rem' }}>MUA LẠI</Button>)
                                                    }
                                                    <Button variant="outlined">LIÊN HỆ NGƯỜI BÁN</Button>
                                                </Box>
                                            </Box>

                                        )}
                                        {status === "delivering" &&
                                            (
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", gap: '1rem' }}>

                                                    <Box sx={{ display: 'flex', gap: '1rem', color: 'red' }}>
                                                        <LocalShippingIcon />
                                                        <Typography >Sản phẩm đang được giao</Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', gap: '2rem' }}>
                                                        <Button variant="contained" sx={{ width: '8rem' }} disabled>CHỜ</Button>
                                                        <Button variant="outlined">LIÊN HỆ NGƯỜI BÁN</Button>
                                                    </Box>
                                                </Box>

                                            )}
                                        {status === "cancelled" &&
                                            (
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", gap: '1rem' }}>

                                                    <Box sx={{ display: 'flex', gap: '1rem', color: 'red' }}>

                                                        <Typography >Sản phẩm đã được hủy</Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', gap: '2rem' }}>

                                                        <Button variant="outlined">LIÊN HỆ NGƯỜI BÁN</Button>
                                                    </Box>
                                                </Box>

                                            )}


                                    </Card>
                                </Box>

                            </Box>

                        </Box >
                    )
                }))
                :
                null
            }
        </Box >
    );
};

export default OrderDetailScreen;
