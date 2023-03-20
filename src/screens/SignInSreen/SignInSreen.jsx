import { Avatar, Box, Button, Container, Divider, Grid, Typography } from '@mui/material'
import React, { useState } from 'react';
import useStyles from './SignInSreen.styles';
import { Field, Form, Formik } from 'formik';
import Logo from 'assets/images/logo/logo_web.png';
import { Link } from 'react-router-dom';
import InputField from 'components/FormElements/InputField/InputField';

const SignInScreen = () => {

    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')

    const changeError = (e) => {
        setError('')
    }
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <Box className={classes.boxSignIn}>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container className={classes.gridContainer}>
                    <Grid item xs={12} md={6} className={classes.signIn}>
                        <Box className={classes.signInForm}>
                            <Formik
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
                                                        error={error}
                                                        changeError={changeError}
                                                    />

                                                    <Field
                                                        name="password"
                                                        component={InputField}
                                                        label="Mật khẩu"
                                                        type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}
                                                        error={error}
                                                        changeError={changeError}
                                                    />

                                                </Grid>
                                                <Button fullWidth variant="contained" color="primary" className={classes.submitButton}>
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




