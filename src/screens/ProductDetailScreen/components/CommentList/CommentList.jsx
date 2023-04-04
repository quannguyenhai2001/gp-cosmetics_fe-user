import React, { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Avatar, Box, Grid, Typography } from '@mui/material';
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





  const render = (ratings.length) === 0 ? (<div>No comment...</div>) :
    (
      ratings.map((value, index) => {
        return (<Box className={classes.eachComment} key={index}>
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

                <Typography component="span" sx={{ fontWeight: "600", fontSize: "1.7rem", marginRight: '0.4rem' }}>{value.display_name}</Typography>
                <Typography component="span">{value.create_at}</Typography>

                <Typography component="span">{value.comment}</Typography>





              </Box>
              <Box className={classes.eachCommentButton}>

              </Box>
            </Grid>
          </Grid>
        </Box >)
      })
    )
  return (
    <Box className={classes.box}>
      {render}
    </Box>
  );
};

export default memo(CommentList);