import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncGetAllBills } from 'redux/slices/productSlice';
import { useState } from 'react';
import Card from '@mui/material/Card';
import { CardMedia, Divider, Grid, Rating, Button } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import convertToVND from 'utils/ConvertToVND';
import { BILL_STATUS } from 'constants/contants';
import { Link, useNavigate } from 'react-router-dom';

const OrderTabs = ({ bills }) => {
    const userInfo = useSelector(state => state.user.userInfo);
    const navigate = useNavigate();
    const getOptionLabel = (value, optionsType) => {
        const optionValue = optionsType.find(option => option.value === value);
        return optionValue?.label;
    };
    return (
        <>
            {bills.length > 0 ?
                (bills.map((item, index) => {
                    return (
                        <Box key={index}>
                            <Box>
                                <Box sx={{ marginBottom: '3rem' }} >
                                    <Card sx={{ minWidth: 275, padding: '2rem 2rem 1rem 2rem' }} elevation={4}>

                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", gap: '1rem', mb: "10px" }}>
                                            <Box>
                                                <Typography>
                                                    {item.create_at}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ gap: '1rem', color: 'blue', alignItems: 'baseline' }}>
                                                <LocalShippingIcon sx={{ transform: 'translate(-5px,4px)', display: 'inline-block' }} />
                                                <Typography component="span">{getOptionLabel(item.status, BILL_STATUS)}</Typography>
                                            </Box>

                                        </Box>


                                        <Divider />

                                        <Box sx={{ padding: "1.5rem 0" }}>
                                            <Grid container spacing={1} sx={{ marginBottom: '0.5rem' }}>
                                                <Grid item xs={2}>
                                                    <Typography>
                                                        Địa chỉ nhận
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={0.5}>
                                                    <Typography>
                                                        :
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Typography>
                                                        {item.delivery_address}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={1} sx={{ marginBottom: '0.5rem' }}>
                                                <Grid item xs={2}>
                                                    <Typography>
                                                        Số điện thoại
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={0.5}>
                                                    <Typography>
                                                        :
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Typography>
                                                        {item.phone_number}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={1} sx={{ marginBottom: '0.5rem' }}>
                                                <Grid item xs={2}>
                                                    <Typography>
                                                        Phương thức thanh toán
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={0.5}>
                                                    <Typography>
                                                        :
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Typography>
                                                        {item.payment_method}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={1}>
                                                <Grid item xs={2}>
                                                    <Typography>
                                                        Ghi chú
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={0.5}>
                                                    <Typography>
                                                        :
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Typography>
                                                        {item.note}
                                                    </Typography>
                                                </Grid>
                                            </Grid>

                                        </Box>
                                        <Divider />
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", gap: '1rem', mt: "10px" }}>
                                            <Box>
                                                Tổng hóa đơn:
                                                <Typography variant="subtitle1" component="span" gutterBottom sx={{ fontSize: '1.8rem', display: "inline-block", marginLeft: "2px", fontWeight: '600', textAlign: 'right', color: 'red' }}>
                                                    {convertToVND(item.total_price)}
                                                </Typography>
                                            </Box>
                                            <Box >
                                                <Button variant="outlined" onClick={() => navigate(
                                                    `/user/${userInfo.id}/order/${item.id}`,
                                                    {
                                                        state: { status: item.status }
                                                    }
                                                )}>Chi tiết hóa đơn</Button>
                                            </Box>

                                        </Box>



                                    </Card>
                                </Box>

                            </Box>
                        </Box >
                    )
                }))
                : (
                    <Box sx={{ height: '60vh', display: 'grid', placeItems: 'center' }}>
                        <img style={{ width: '16rem' }} src={require('assets/images/order/img1.png')} alt='img' />
                        <Typography sx={{ fontSize: '2rem', fontWeight: '600', color: '#828282' }}>
                            Bạn chưa có bất kỳ đơn hàng nào
                        </Typography>
                    </Box>
                )
            }</>
    );
};

export default OrderTabs;