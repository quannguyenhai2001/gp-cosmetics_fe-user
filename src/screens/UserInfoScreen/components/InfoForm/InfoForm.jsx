import { Avatar, Box, Button, FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './InfoForm.styles';
import StringAvatar from 'utils/StringAvatar';
import { getUser, patchUserInfo } from 'redux/slices/UserSlice';

const InfoForm = () => {
    const classes = useStyles();
    const userInfo = useSelector(state => state.user.userInfo);
    const dispatch = useDispatch();
    const [valueArray, setValueArray] = React.useState('');

    //set value array
    React.useEffect(() => {
        if (userInfo) {
            setValueArray(
                {
                    display_name: userInfo.display_name,
                    address: userInfo.address,
                    sex: userInfo.sex,
                    age: parseInt(userInfo.age),
                    avatar: userInfo.avatar
                }
            )
        }
    }, [userInfo]);

    const [base64, setBase64] = React.useState(userInfo.avatar);
    const changeHandle = (e) => {
        function getBase64(file) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                setBase64(reader.result);
            };
            reader.onerror = function (error) {
                console.log('Error: ', error);
            };
        }
        setValueArray({ ...valueArray, [e.target.name]: e.target.files[0] });
        getBase64(e.target.files[0]); // prints the base64 string

    }

    const handleChange = (event) => {
        setValueArray({ ...valueArray, [event.target.name]: event.target.value });

    };

    const handleSubmit = (e) => {
        console.log(valueArray);
        let data = new FormData();
        data.append("avatar", valueArray.avatar);
        data.append("display_name", valueArray.display_name);
        data.append("sex", valueArray.sex);
        data.append("age", valueArray.age);
        data.append("address", "faff");
        console.log(data)
        dispatch(patchUserInfo(data)).unwrap().then(() => {
            dispatch(getUser())
            // Toast('success', 'Update user success!');
        }).catch(err => {
            console.log(err)
        })

    }
    const image = userInfo.avatar ? <Avatar className={classes.rootAvatar} src={userInfo.avatar} /> : <Avatar className={classes.rootAvatar} {...StringAvatar(userInfo.display_name)} />;
    return (
        <>
            {
                userInfo && valueArray ?
                    (<Box sx={{ padding: '2rem 0' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <Box className={classes.Typo}>
                                    <Typography className={classes.rootTypo}>Tên người dùng:</Typography>
                                    <Typography className={classes.rootTypo} >Tên hiển thị:</Typography>
                                    <Typography className={classes.rootTypo}>Email:</Typography>
                                    <Typography className={classes.rootTypo}>Điện thoại:</Typography>
                                    <Typography className={classes.rootTypo}>Giới tính:</Typography>
                                    <Typography className={classes.rootTypo}>Tuổi:</Typography>
                                    <Typography className={classes.rootTypo}>Địa chỉ:</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography className={classes.rootTyp1}>{userInfo.username}</Typography>
                                <TextField onChange={handleChange} value={valueArray.display_name} name="display_name" className={classes.rootTextField} id="outlined-basic" variant="outlined" size="small" />
                                <Typography >{userInfo.email}</Typography>
                                <Typography className={classes.rootTyp1}>{userInfo.phone_number}</Typography>
                                <FormControl>
                                    <RadioGroup className={classes.rootRadio}
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue={valueArray.gnder}
                                        onChange={handleChange}
                                        name="sex"
                                    >
                                        <FormControlLabel value="nam" control={<Radio />} label="nam" />
                                        <FormControlLabel value="nữ" control={<Radio />} label="nữ" />
                                    </RadioGroup>
                                </FormControl>

                                {/* age */}
                                <TextField
                                    id="outlined-number"
                                    className={classes.rootTextField1}
                                    type="number"
                                    size="small"
                                    onChange={handleChange}
                                    value={valueArray.age}
                                    name="age"
                                />

                                {/* address */}
                                <TextField onChange={handleChange} value={valueArray.address} name="address" className={classes.rootTextField} id="outlined-basic" variant="outlined" size="small" />

                                {/* button */}
                                <Button variant="contained" onClick={handleSubmit}>Lưu</Button>
                            </Grid>

                            {/* divide */}
                            <Grid item xs={1}>
                                <Box sx={{
                                    height: '100%',
                                    width: '1px',
                                    backgroundColor: '#f5f5f5',
                                }}></Box>
                            </Grid>
                            <Grid item xs={3}>
                                {base64 ? (
                                    <Avatar className={classes.rootAvatar} src={base64} />
                                ) : (
                                    <>
                                        {image}
                                    </>
                                )}
                                <label className={classes.labelFile} htmlFor="upload-photo">Chọn ảnh</label>
                                <input type="file" className={classes.customFileInput} onChange={changeHandle} name="avatar" id="upload-photo" />
                            </Grid>
                        </Grid>
                    </Box>) :
                    null
            }
        </>
    );
};

export default InfoForm;