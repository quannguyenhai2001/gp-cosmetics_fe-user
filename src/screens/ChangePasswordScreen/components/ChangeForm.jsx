import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncGetUser, fetchAsyncUpdateUser } from 'redux/slices/UserSlice';
import { Toast } from 'utils/Toast';
import useStyles from './ChangeForm.styles';


const ChangeForm = () => {
    const classes = useStyles();
    // const userDetail = useSelector(state => state.user.userDetail);
    const dispatch = useDispatch();
    const [valueArray, setValueArray] = React.useState({
        oldPassword: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (event) => {
        setValueArray({ ...valueArray, [event.target.name]: event.target.value });
    };

    const handleConfirm = (event) => {
        event.preventDefault();
        if (valueArray.password !== valueArray.confirmPassword) {
            Toast('error', 'Mật khẩu xác thực không trùng khớp!');
        } else {

            dispatch(fetchAsyncUpdateUser(valueArray)).unwrap().then(() => {

                dispatch(fetchAsyncGetUser())
                Toast('success', 'Thay đổi mật khẩu thành công!');

            }).catch(err => {
                Toast('error', 'Lỗi!');

            })
        }
    }
    return (
        <Box sx={{ padding: '2rem 0' }}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Box className={classes.Typo}>
                        <Typography className={classes.rootTypo}>Mật khẩu cũ:</Typography>
                        <Typography className={classes.rootTypo}>Mật khẩu mới:</Typography>
                        <Typography className={classes.rootTypo}>Xác nhận mật khẩu:</Typography>
                    </Box>
                </Grid>
                <Grid item xs={10}>
                    <TextField onChange={handleChange} type="password" className={classes.rootTextField} name="oldPassword" variant="outlined" size="small" value={valueArray.oldPassword} />
                    <TextField onChange={handleChange} type="password" className={classes.rootTextField} name="password" variant="outlined" size="small" value={valueArray.password} />
                    <TextField onChange={handleChange} type="password" className={classes.rootTextField} name="confirmPassword" variant="outlined" size="small" value={valueArray.confirmPassword} />
                    <Button onClick={handleConfirm} variant="contained">Lưu</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ChangeForm;