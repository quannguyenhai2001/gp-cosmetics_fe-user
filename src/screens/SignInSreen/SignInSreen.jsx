import { Avatar, Box, Button, Container, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import useStyles from './SignInSreen.styles';
import { Field, Form, Formik } from 'formik';
import Logo from 'assets/images/logo/logo_web.png';
import { Link, useNavigate } from 'react-router-dom';
import InputField from 'components/FormElements/InputField/InputField';
import { signInSchema, signInValues } from 'utils/FormValidate';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchAsyncSignIn } from 'redux/slices/UserSlice';

const SignInScreen = () => {
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)
    const [isError, setIsError] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("access_token")) {
            navigate("/")
        }
    }, [])
    const changeError = () => {
        setIsError(false)
    }
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleSubmit = async (value) => {
        try {
            await dispatch(fetchAsyncSignIn(value)).unwrap()
            navigate("/")
            toast.success('Đăng nhập thành công!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        catch (err) {
            setIsError(err)
            toast.error('Lỗi!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    return (
        <Box className={classes.boxSignIn}>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container className={classes.gridContainer}>
                    <Grid item xs={12} md={6} className={classes.signIn}>
                        <Box className={classes.signInForm}>
                            <Formik
                                initialValues={signInValues}
                                validationSchema={signInSchema}
                                onSubmit={(value, { setFieldError }) => {
                                    handleSubmit(value, setFieldError);
                                }}
                            >
                                {() => {
                                    return (
                                        <Form>
                                            <Container sx={{ width: '30rem' }}>
                                                <Typography variant="h5" className={classes.typoTitleRight}>
                                                    ĐĂNG NHẬP
                                                </Typography>
                                                <Grid container spacing={2}>

                                                    <Field
                                                        name="email"
                                                        component={InputField}
                                                        label="Email"
                                                        type="email"
                                                        onClick={changeError}
                                                    />

                                                    <Field
                                                        name="password"
                                                        component={InputField}
                                                        label="Mật khẩu"
                                                        onClick={changeError}
                                                        type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}
                                                    />

                                                </Grid>
                                                {isError ? <Typography color="error">Email hoặc mật khẩu chưa đúng</Typography> : null}
                                                <Button fullWidth variant="contained" type='submit' color="primary" className={classes.submitButton}>
                                                    Xác nhận
                                                </Button>
                                            </Container>
                                        </Form>
                                    )
                                }}
                            </Formik >
                            <Divider>HOẶC</Divider>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6} className={classes.introduce}>
                        <Typography sx={{ textAlign: "center" }}>
                            Nhà cung cấp các sản phẩm làm đẹp chất lượng cao
                        </Typography>
                        <Typography variant='h6' sx={{ fontWeight: 600 }}>
                            Hãy đến với chúng tôi
                        </Typography>
                        <Avatar className={classes.avatar} src={Logo} alt="logo" />
                        <Typography sx={{ display: 'inline-block' }}>
                            Bạn không có tài khoản?
                        </Typography>
                        <Typography component={Link} to='/sign-up' sx={{ display: 'inline-block' }}>
                            Đăng ký
                        </Typography>
                    </Grid>
                </Grid>
            </Container >
        </Box >

    );
};

export default SignInScreen;




