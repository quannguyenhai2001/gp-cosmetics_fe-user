import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid, StepLabel, TextareaAutosize, TextField } from '@mui/material';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'utils/Toast';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import convertToVND from 'utils/ConvertToVND';
import CheckEmptyValueInObject from 'utils/CheckEmptyValueInObject';
import { deleteCarts, fetchAsyncCreateBill } from 'redux/slices/productSlice';

const steps = ['Thông Tin Giao Hàng', 'Phương Thức Thanh Toán'];

export default function PaymentScreen() {
    const classes = useStyles();
    const carts = useSelector(state => state.products.carts);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    //dialog
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //step
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    React.useEffect(() => {
        if (carts.length === 0) {
            navigate('/')
        }
    }, [carts, navigate])

    //state
    const [state, setState] = React.useState({
        phone_number: '',
        note: '',
        delivery_address: '',
        payment_method: '',
        receiver_name: '',
        total_price: carts.reduce((total, item) => {
            return total + (parseFloat(((parseFloat(item.price) + parseFloat(item.additional_price)) * (1 - item.promotion / 100))) * item.quantity)
        }, 0)
    });

    const handleChange = (event) => {

        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
        const cloneState = {
            ...state,
            [event.target.name]: event.target.value,
        }
        if (!CheckEmptyValueInObject(cloneState)) {
            setIsDisableButton(false)
        }
    }
    const [isDisableButton, setIsDisableButton] = React.useState(false)

    const handleButtonPayment = () => {
        if (CheckEmptyValueInObject(state)) {
            setIsDisableButton(true)
            Toast("warning", "Hãy điền đầy đủ thông tin!")
            return
        }
        handleClickOpen()
    }
    const handlePayment = async () => {
        try {
            await dispatch(fetchAsyncCreateBill(state)).unwrap();
            dispatch(deleteCarts())
            Toast('success', 'Thanh toán thành công!')
            navigate('/')


        } catch (e) {
            Toast('error', e.message)
            handleClickOpen()

        }
    }

    const a = activeStep === 0 ? (
        <React.Fragment>
            <Box sx={{ margin: '5rem 1rem 1rem 0', width: "100%", padding: "0 20rem" }}>
                <Box>
                    <Grid container spacing={3} sx={{ display: "flex", alignItems: "center", mb: "2rem" }}>
                        <Grid item xs={4} >
                            <Typography textAlign="right" >Người nhận:</Typography>
                        </Grid>
                        <Grid item xs={8} >
                            <TextField onChange={handleChange} fullWidth type="text" value={state.receiver_name} name="receiver_name" className={classes.rootTextField} id="outlined-basic" variant="outlined" size="small" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} sx={{ display: "flex", alignItems: "center", mb: "2rem" }}>
                        <Grid item xs={4}>
                            <Typography textAlign="right">Số điện thoại:</Typography>

                        </Grid>
                        <Grid item xs={8}>
                            <TextField onChange={handleChange} fullWidth type="number" value={state.phone_number} name="phone_number" className={classes.rootTextField1} id="outlined-basic" variant="outlined" size="small" />

                        </Grid>
                    </Grid>
                    <Grid container spacing={3} sx={{ display: "flex", alignItems: "center", mb: "2rem" }}>
                        <Grid item xs={4}>
                            <Typography textAlign="right" >Địa chỉ giao hàng:</Typography>

                        </Grid>
                        <Grid item xs={8}>
                            <TextField onChange={handleChange} fullWidth multiline maxRows="12" type="text" value={state.delivery_address} name="delivery_address" className={classes.rootTextField} id="outlined-basic" variant="outlined" size="small" />

                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                >
                    LÙI
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />

                <Button onClick={handleNext}>
                    TIẾP
                </Button>

            </Box>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <Box sx={{ margin: '5rem 1rem 1rem 0', width: "100%", padding: "0 10rem" }}>
                <Box>
                    <Grid container spacing={3} sx={{ display: "flex", alignItems: "center", mb: "2rem" }}>
                        <Grid item xs={4} >
                            <Typography textAlign="right">Phương thức thanh toán:</Typography>
                        </Grid>
                        <Grid item xs={8} >
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="1"
                                    name="payment_method"
                                    value={state.payment_method}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="Thanh toán khi nhận hàng" control={<Radio />} label="Thanh toán khi nhận hàng" />
                                    <FormControlLabel value="Thanh toán bằng thẻ" disabled control={<Radio />} label="Thanh toán bằng thẻ" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} sx={{ display: "flex", alignItems: "center", mb: "2rem" }}>
                        <Grid item xs={4}>
                            <Typography textAlign="right">Lưu ý:</Typography>

                        </Grid>
                        <Grid item xs={8}>
                            <TextareaAutosize
                                onChange={handleChange}
                                aria-label="minimum height"
                                minRows={8}
                                value={state.note}
                                name="note"
                                placeholder="Note for the order..."
                                style={{ width: 300 }}
                            />

                        </Grid>
                    </Grid>
                    <Grid container spacing={3} sx={{ display: "flex", alignItems: "center", mb: "2rem" }}>
                        <Grid item xs={4}>
                            <Typography textAlign="right" >Tổng hóa đơn:</Typography>

                        </Grid>
                        <Grid item xs={8}>
                            <Typography sx={{ fontSize: '1.6rem' }}>{convertToVND(carts.reduce((total, item) => {
                                return total + (parseFloat(((parseFloat(item.price) + parseFloat(item.additional_price)) * (1 - item.promotion / 100))) * item.quantity)
                            }, 0))}</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>


            {/* bottom */}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                >
                    LÙI
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleButtonPayment} disabled={isDisableButton}>
                    THANH TOÁN
                </Button>

            </Box>
        </React.Fragment>
    )

    return (
        <Box sx={{ minHeight: 'fit-content', padding: "3rem 0rem", backgroundColor: 'lightgray' }}>
            <Container maxWidth="md" >
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: '2rem 0 ' }}>
                    <Typography variant="h4" gutterBottom>THANH TOÁN</Typography>
                </Box>
                <Box className={classes.boxForm} sx={{ width: '100%', padding: "3rem 1rem", backgroundColor: 'white' }}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};

                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>

                    <Box>
                        {a}
                    </Box>
                </Box>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" textAlign="center">
                        {"Bạn có chắn chắn muốn thanh toán?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Hẫy bấm xác nhận để nhận thật nhiều phần quà hấp dẫn
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Hủy</Button>
                        <Button onClick={handlePayment} autoFocus>
                            Xác nhận
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </Box>
    );
}