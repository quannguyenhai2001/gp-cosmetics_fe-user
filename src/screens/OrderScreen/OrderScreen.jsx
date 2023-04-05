
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { fetchAsyncGetAllBills } from 'redux/slices/productSlice';
import { useState } from 'react';
import Card from '@mui/material/Card';
import { CardMedia, Divider, Grid, Rating, Button } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const OrderScreen = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [bills, setBills] = useState([])

    const dispatch = useDispatch();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    React.useEffect(() => {
        (async () => {
            const res = await dispatch(fetchAsyncGetAllBills({ user_id: 32 })).unwrap();
            setBills(res.data)
            console.log(res)
        })()

    }, [dispatch]);

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} className={classes.rootTab} aria-label="basic tabs example">
                    <Tab label="Tất cả" {...a11yProps(0)} />
                    <Tab label="Đang giao " {...a11yProps(1)} />
                    <Tab label="Hoàn thành" {...a11yProps(2)} />
                    <Tab label="Đã hủy" {...a11yProps(3)} />

                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {bills.length > 0 ?

                    (bills.map((item, index) => {
                        return (
                            <Box key={index}>
                                {
                                    item.status === "Success" ?
                                        (<Box>
                                            <Box sx={{ marginBottom: '3rem' }} >
                                                <Card sx={{ minWidth: 275, padding: '2rem 2rem' }} elevation={4}>
                                                    <Box sx={{ marginBottom: '1rem' }}>
                                                        <Grid container spacing={1}>
                                                            <Grid item xs={1}>
                                                                {item.image ? (<CardMedia
                                                                    component="img"
                                                                    height="80"
                                                                    image={JSON.parse(item.image)[0]}
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
                                                                <Typography sx={{
                                                                    fontSize: '1.5rem',
                                                                    marginBottom: '1rem'
                                                                }}>
                                                                    {item.name}
                                                                </Typography>
                                                                <Typography
                                                                    sx={{

                                                                        marginBottom: '1rem'
                                                                    }}
                                                                >
                                                                    Nhà cung cấp: {item.ManufacturerName}
                                                                </Typography>
                                                                <Box
                                                                    sx={{
                                                                        display: 'flex',
                                                                        justifyContent: 'space-between',
                                                                    }}
                                                                >
                                                                    <Typography>
                                                                        Số lượng: {item.amount}
                                                                    </Typography>
                                                                    <Box>
                                                                        <Typography variant="subtitle1" component="span" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: '100', marginRight: '1rem', textDecoration: 'line-through', opacity: '70%' }}>
                                                                            ${item.price}
                                                                        </Typography>
                                                                        <Typography variant="subtitle1" component="span" gutterBottom sx={{ fontSize: '1.5rem', color: 'red' }}>
                                                                            ${parseFloat(item.price - (item.price * item.promotion), 2).toFixed(2)}
                                                                        </Typography>
                                                                    </Box>
                                                                </Box>

                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                    <Divider />
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem', margin: '1.5rem 0' }}>
                                                        <Box sx={{ display: 'flex', gap: '1rem', color: 'blue', alignItems: 'baseline' }}>
                                                            <LocalShippingIcon sx={{ transform: 'translateY(4px)' }} />
                                                            <Typography >Sản phẩm đã được giao</Typography>
                                                        </Box>
                                                        <Box>
                                                            Tổng:
                                                            <Typography variant="subtitle1" component="span" gutterBottom sx={{ fontSize: '1.8rem', fontWeight: '600', textAlign: 'right', color: 'red' }}>
                                                                ${((parseFloat(item.price - (item.price * item.promotion), 2).toFixed(2)) * item.amount).toFixed(2)}
                                                            </Typography>
                                                        </Box>
                                                    </Box>

                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                                                        <Box>
                                                            {item.rated ? (
                                                                <Typography>Đã nhận đánh giá</Typography>
                                                            )
                                                                : (<Typography>Chưa được đánh giá </Typography>)}
                                                        </Box>
                                                        <Box sx={{ display: 'flex', gap: '2rem' }}>
                                                            {/* {!item.rated ? (
                                                                <>
                                                                    <Button variant="contained" sx={{ width: '10rem' }} onClick={() => handleClickOpen(item.id, item.pro_Id)}>ĐÁNH GIÁ</Button>
                                                                    {valueArray.bill_details_Id === item.id ?
                                                                        (<SimpleDialog
                                                                            open={open}
                                                                            arrayId={valueArray}
                                                                            onClose={handleClose}
                                                                        />) :
                                                                        null}
                                                                </>
                                                            ) :
                                                                (<Button variant="contained" onClick={() => handleNavigate(item.pro_Id)} sx={{ width: '10rem' }}>MUA LẠI</Button>)} */}
                                                            <Button variant="outlined">LIÊN HỆ NGƯỜI BÁN</Button>
                                                        </Box>
                                                    </Box>
                                                </Card>
                                            </Box>

                                        </Box>)
                                        : (<Box>
                                            <Box sx={{ marginBottom: '3rem' }}>
                                                <Card sx={{ minWidth: 275, padding: '2rem 2rem' }} elevation={4}>
                                                    <Box sx={{ marginBottom: '1rem' }}>
                                                        <Grid container spacing={1}>
                                                            <Grid item xs={1}>
                                                                {item.image ? (<CardMedia
                                                                    component="img"
                                                                    height="80"
                                                                    image={JSON.parse(item.image)[0]}
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
                                                                <Typography sx={{
                                                                    fontSize: '1.5rem',
                                                                    marginBottom: '1rem'
                                                                }}>
                                                                    {item.name}
                                                                </Typography>
                                                                <Typography
                                                                    sx={{

                                                                        marginBottom: '1rem'
                                                                    }}
                                                                >
                                                                    Nhà cung cấp: {item.ManufacturerName}
                                                                </Typography>
                                                                <Box
                                                                    sx={{
                                                                        display: 'flex',
                                                                        justifyContent: 'space-between',
                                                                    }}
                                                                >
                                                                    <Typography>
                                                                        Số lượng: {item.amount}
                                                                    </Typography>
                                                                    <Box>
                                                                        <Typography variant="subtitle1" component="span" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: '100', marginRight: '1rem', textDecoration: 'line-through', opacity: '70%' }}>
                                                                            ${item.price}
                                                                        </Typography>
                                                                        <Typography variant="subtitle1" component="span" gutterBottom sx={{ fontSize: '1.5rem', color: 'red' }}>
                                                                            ${parseFloat(item.price - (item.price * item.promotion), 2).toFixed(2)}
                                                                        </Typography>
                                                                        {/* <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: '100', textDecoration: 'line-through' }}>
                                            ${product.price}
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1.5rem', color: 'red' }}>
                                            ${parseFloat(product.price - (product.price * product.promotion), 2).toFixed(2)}
                                        </Typography> */}
                                                                    </Box>
                                                                </Box>

                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                    <Divider />
                                                    <Box sx={{ textAlign: 'right', margin: '1.5rem 0' }}>
                                                        Tổng:
                                                        <Typography variant="subtitle1" component="span" gutterBottom sx={{ fontSize: '1.8rem', fontWeight: '600', textAlign: 'right', color: 'red' }}>
                                                            ${((parseFloat(item.price - (item.price * item.promotion), 2).toFixed(2)) * item.amount).toFixed(2)}
                                                        </Typography>
                                                    </Box>

                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                                                        <Box sx={{ display: 'flex', gap: '1rem', color: 'red' }}>
                                                            <LocalShippingIcon />
                                                            <Typography >Sản phẩm đang được giao</Typography>
                                                        </Box>
                                                        <Box sx={{ display: 'flex', gap: '2rem' }}>
                                                            <Button variant="contained" sx={{ width: '8rem' }} disabled>CHỜ</Button>
                                                            <Button variant="outlined">LIÊN HỆ NGƯỜI BÁN</Button>
                                                        </Box>
                                                    </Box>
                                                </Card>

                                            </Box>
                                        </Box>)
                                }
                            </Box>
                        )
                    }))
                    :
                    null
                }
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
        </Box>
    );
};

export default OrderScreen;





