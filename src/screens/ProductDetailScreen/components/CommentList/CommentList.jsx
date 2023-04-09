import React, { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Avatar, Box, Divider, Grid, Rating, Typography } from '@mui/material';
import useStyles from './styles';

import StringAvatar from 'utils/StringAvatar';

import { useParams } from 'react-router-dom';

import { fetchAsyncGetRatings } from 'redux/slices/productSlice';
const CommentList = () => {
  const [ratings, setRatings] = useState([])
  const classes = useStyles();
  const dispatch = useDispatch()
  const params = useParams();
  const { id } = params;


  useEffect(() => {
    (async () => {
      const res = await dispatch(fetchAsyncGetRatings({
        "product_id": id
      })).unwrap();
      setRatings(res.data)
    })()
  }, [dispatch, id]);

  return (
    <Box className={classes.box}>
      <Box>
        <Typography variant="h5" gutterBottom sx={{ textAlign: 'Left', fontWeight: 'bold', marginBottom: '2rem' }}>
          Đánh giá sản phẩm
        </Typography>
        <Box>
          Tổng kết (chưa làm)
        </Box>
      </Box>
      <Box>
        {
          ratings.length > 0 ?
            (
              ratings.map((value, index) => (<Box className={classes.eachComment} key={index}>
                <Grid container>
                  <Grid item >
                    <Box>
                      {value.avatar ? (
                        <Avatar className={classes.rootAvatar} src={value.avatar} />
                      ) : (
                        <Avatar className={classes.rootAvatar} {...StringAvatar(value.displayName)} />
                      )}
                    </Box>
                  </Grid>
                  <Grid item xs={11}>
                    <Box className={classes.eachCommentContent}>

                      <Typography sx={{ fontWeight: "600", marginRight: '0.4rem' }}>{value.display_name}</Typography>
                      <Rating name="half-rating-read" defaultValue={parseFloat(value.star_rating, 10)} precision={0.5} readOnly />
                      <Typography mb={1}>{value.create_at} | Phân loại hàng: {value.size_label}</Typography>
                      <Typography mb={2}>{value.comment}</Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Divider sx={{ mb: "10px" }} />

              </Box >)
              )
            ) : (<div>Không có đánh giá...</div>)
        }
      </Box>
    </Box>
  );
};

export default CommentList;