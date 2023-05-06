import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncCreateRating, fetchAsyncGetAllBillDetails } from 'redux/slices/productSlice';
import { useLocation, useParams } from 'react-router-dom';
import { CardMedia, Divider, Grid, Typography, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import TextareaAutosize from '@mui/base/TextareaAutosize';
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
import StarIcon from '@mui/icons-material/Star';
const labels = {

    1: 'Vô dụng',

    2: 'Không tốt',

    3: 'Tạm ổn',

    4: 'Tốt',

    5: 'Tuyệt vời',
};
function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}
function SimpleDialog(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id, orderID } = useParams();

    const [value, setValue] = React.useState(0);
    const [conmentValue, setCommentValue] = React.useState("");
    const [hover, setHover] = React.useState(-1);
    const { onClose, open, billDetailItem, setIsRating } = props;
    console.log(billDetailItem)
    const handleClose = () => {
        onClose();
    };

    const handleRating = async () => {
        try {
            const payload = {
                star_rating: value,
                comment: conmentValue,
                size_id: billDetailItem.size_id,
                bill_detail_id: billDetailItem.id
            }
            await dispatch(fetchAsyncCreateRating(payload)).unwrap();
            setIsRating(value => !value)
            Toast('success', 'Đánh giá sản phẩm thành công!')
            onClose();

        } catch (e) {
            Toast('error', "Đánh giá thất bại!")
            onClose();
        }
    }
    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle><Typography sx={{ textAlign: "center" }} variant='h5' fontWeight="bold">Hãy đánh giá cho sản phẩm của chúng tôi! </Typography> </DialogTitle>
            <List sx={{ p: "0 40px" }}>
                <Box sx={{
                    mb: "20px",
                    width: "400px",
                    justifyContent: "center",
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <Rating className={classes.rootRating}
                        name="simple-controlled"
                        value={value}
                        getLabelText={getLabelText}
                        size="large"
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                            setHover(newHover);
                        }}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    {value !== null && (
                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                    )}
                </Box>
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={8}
                    onChange={(e) => setCommentValue(e.target.value)}
                    placeholder="Bình luận..."
                    style={{ width: 400 }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'center', margin: '2rem 0 2rem 0' }}>
                    <Button variant="contained" onClick={handleRating} >XÁC NHẬN</Button>
                </Box>
            </List>
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
    const [isRating, setIsRating] = useState(false)

    React.useEffect(() => {
        (async () => {
            const res = await dispatch(fetchAsyncGetAllBillDetails({ bill_id: orderID })).unwrap();
            setBillDetails(res.data)

        })()

    }, [dispatch, orderID, isRating]);


    const handleNavigate = (id) => {
        navigate(`/products/detail/${id}`);
    }

    const [open, setOpen] = React.useState(false);
    const [billDetailItem, setBillDetailItem] = React.useState({});
    const handleClickOpen = (item) => {
        setOpen(true);
        setBillDetailItem(item);
    };

    const handleClose = (value) => {
        setOpen(false);
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
                                                                        {item.size_name}
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
                                                                    {convertToVND(parseFloat(((parseFloat(item.product_price) + parseFloat(item.size_additional_price)) * (1 - item.product_promotion / 100))))}
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
                                                {convertToVND(parseFloat(((parseFloat(item.product_price) + parseFloat(item.size_additional_price)) * (1 - item.product_promotion / 100))) * item.quantity)}
                                            </Typography>
                                        </Box>


                                        {status === "Đã giao" && (
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
                                                            <Button variant="contained" sx={{ width: '10rem' }} onClick={() => handleClickOpen(item)}>ĐÁNH GIÁ</Button>

                                                            <SimpleDialog
                                                                open={open}
                                                                onClose={handleClose}
                                                                billDetailItem={billDetailItem}
                                                                setIsRating={setIsRating}
                                                            />
                                                        </>)
                                                        :
                                                        (<Button variant="contained" onClick={() => handleNavigate(item.product_id)} sx={{ width: '10rem' }}>MUA LẠI</Button>)
                                                    }
                                                    <Button variant="outlined">LIÊN HỆ NGƯỜI BÁN</Button>
                                                </Box>
                                            </Box>

                                        )}
                                        {(status === "Đang giao" || status === "Chờ xác nhận") &&
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
                                        {status === "Hủy" &&
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
