import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react'
import useStyles from './Footer.tyles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GoogleIcon from '@mui/icons-material/Google';
import USIcon from 'assets/img/language/united-states.png'
import CanadaIcon from 'assets/img/language/canada.png'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AddCardIcon from '@mui/icons-material/AddCard';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ApprovalIcon from '@mui/icons-material/Approval';

const Footer = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box>
                <Typography className={classes.boxFeedback} variant="button" color="black">Phản hồi về website? Hãy cho chúng tôi biết ▸</Typography>
            </Box>
            <Box className={classes.boxFooter}>
                <Container maxWidth="lg">
                    <Grid container sx={{ padding: '2rem 0' }}>
                        <Grid item xs={12} md={2} className={classes.headerFooter}>
                            <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }} >
                                <LocalGroceryStoreIcon fontSize='large' />
                                <Typography component='span'>
                                    Tìm Cửa Hàng
                                </Typography>
                            </Box>

                        </Grid>
                        <Grid item xs={12} md={2} className={classes.headerFooter}>
                            <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }} >
                                <ChatBubbleOutlineIcon fontSize='large' />
                                <Typography component='span'>
                                    Trợ Giúp Trực Tiếp
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={2} className={classes.headerFooter}>
                            <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }} >
                                <LocalPhoneIcon fontSize='large' />
                                <Typography component='span'>
                                    1-877-737-4672
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={2} className={classes.headerFooter}>
                            <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }} >
                                <ApprovalIcon fontSize='large' />
                                <Typography component='span'>
                                    Tải Ứng Dụng
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4} className={classes.headerFooter}>
                            <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }} >
                                <AddCardIcon fontSize='large' />
                                <Typography component='span'>
                                    Muốn giảm giá 25% khi mua sản phẩm ASP? CHI TIẾT
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Divider sx={{ borderColor: 'gray' }} />
                    {/* > md */}
                    <Grid container sx={{ padding: '1rem 0' }}>
                        <Grid item xs={12} md={2} mb={2}>
                            <Box className={classes.boxThreeSide}>
                                <Typography sx={{ fontWeight: 'bold' }}>
                                    Về ASP
                                </Typography>
                                <Typography>
                                    Tòa Soạn
                                </Typography>
                                <Typography>
                                    Nghề Nghiệp
                                </Typography>
                                <Typography>
                                    Tác Động Xã Hội
                                </Typography>
                                <Typography>
                                    Trang Toàn Cầu
                                </Typography>
                                <Typography>
                                    Chi Nhánh
                                </Typography>
                                <Typography>
                                    ASP Sự Kiện
                                </Typography>
                                <Typography>
                                    Thẻ Quà Tặng
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Box className={classes.boxThreeSide}>
                                <Typography sx={{ fontWeight: 'bold' }}>
                                    Trang ASP
                                </Typography>
                                <Typography>
                                    Vẻ Đẹp Bên Trong
                                </Typography>
                                <Typography>
                                    Hồ sơ Cộng Đồng
                                </Typography>
                                <Typography>
                                    Tình Trạng Đơn
                                </Typography>
                                <Typography>
                                    Lịch Sử Đặt Hàng
                                </Typography>
                                <Typography>
                                    Cài Đặt Tài Khoản
                                </Typography>
                                <Typography>
                                    Phần Thưởng Bazzar
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Box className={classes.boxThreeSide}>
                                <Typography sx={{ fontWeight: 'bold' }}>
                                    Trợ Giúp
                                </Typography>
                                <Typography>
                                    Dịch Vụ Khách Hàng
                                </Typography>
                                <Typography>
                                    Sở Giao Dịch
                                </Typography>
                                <Typography>
                                    Tùy chọn Giao hàng
                                </Typography>
                                <Typography>
                                    Vận Chuyển
                                </Typography>
                                <Typography>
                                    Địa Điểm Cửa Hàng
                                </Typography>
                                <Typography>
                                    Đặt Hàng Trực Tuyến
                                </Typography>
                                <Typography>
                                    Khả Năng Tiếp Cận
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Box className={classes.boxThreeSide}>
                                <Typography sx={{ fontWeight: 'bold' }}>
                                    Ngôn Ngữ & Vùng
                                </Typography>
                                <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <img src={USIcon} alt="US" style={{ width: '2.5rem', height: '2.5rem' }} />
                                    <Typography component='span'>
                                        United States - English
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <img src={CanadaIcon} alt="canada" style={{ width: '2.5rem', height: '2.5rem' }} />
                                    <Typography component='span'>
                                        Canada - English
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <img src={CanadaIcon} alt="canada" style={{ width: '2.5rem', height: '2.5rem' }} />
                                    <Typography component='span'>
                                        Canada - Français
                                    </Typography>
                                </Box>


                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box className={classes.boxRightSide}>
                                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                                    Chúng Tôi Luôn Mang Đến Cho Bạn Trải Nghiệm Tuyệt Vời Nhất
                                </Typography>
                                <Typography>
                                    Tại ASP, sứ mệnh đa dạng và hòa nhập của chúng tôi rất đơn giản: Không ngừng tôn vinh vẻ đẹp
                                    không sợ hãi và xây dựng môi trường hòa nhập cho nhân viên, người tiêu dùng và cộng đồng của chúng tôi. Mục tiêu của nghiên cứu là kêu gọi sự chú ý đến sự bất bình đẳng trong mua sắm bán lẻ
                                    trải nghiệm cho người tiêu dùng và quan trọng hơn là xác định các giải pháp có thể hành động để thúc đẩy sự thay đổi.
                                </Typography>

                                <Box sx={{ marginTop: '3rem' }}>
                                    <Typography sx={{ fontWeight: 'bold', marginBottom: '2rem' }}>
                                        Đăng ký email ASP
                                    </Typography>
                                    <Box>
                                        <input className={classes.input} type="text" placeholder="Nhập email của bạn..." />
                                        <Button variant="contained" className={classes.buttonSignUp}>ĐĂNG KÝ</Button>
                                    </Box>
                                </Box>

                            </Box>
                        </Grid>
                    </Grid>
                    {/* < md */}
                    <Divider sx={{ borderColor: 'gray' }} />
                    <Grid container sx={{ padding: '2rem 0 2rem 0' }}>
                        <Grid item xs={12} md={9}>
                            <Typography sx={{ padding: '0rem 0 1.5rem 0' }}>© 2022 ASP VIETNAM, Inc. All rights reserved.</Typography>
                            <Box className={classes.boxFooterBottom}>
                                <Typography component="span">
                                    Chính sách bảo mật
                                </Typography>
                                <Typography component="span">
                                    Điều khoản sử dụng
                                </Typography>
                                <Typography component="span">
                                    Khả năng tiếp cận
                                </Typography>
                                <Typography component="span">
                                    Sơ đồ trang web
                                </Typography>
                                <Typography component="span">
                                    CA - Không bán thông tin cá nhân của tôi
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3} className={classes.boxIcon}>
                            <FacebookIcon />
                            <InstagramIcon />
                            <YouTubeIcon />
                            <TwitterIcon />
                            <PinterestIcon />
                            <GoogleIcon />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;