import React, { useState } from 'react'
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Container} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import LoadingButton from '@mui/lab/LoadingButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import moment from 'moment';
import Popover from '@mui/material/Popover';
import Skeleton from '@mui/material/Skeleton';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleConfirmation = () => {
    setLoading(true);
    dispatch(deletePost(post._id, handleClose));
  }
  const handleClose = () => {
    setLoading(false);
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const popid = open ? 'simple-popover' : undefined;
    
  
  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?.id || user?.result?._id))
      ? (
          <><ThumbUpAltIcon fontSize='small'/> &nbsp;{ post.likes.length > 2 ? `You and ${post.likes.length -1} others` : `${post.likes.length} Like${post.likes.length > 1 ? 's' : ''}`}</>
        ) : (
          <><ThumbUpOffAltIcon fontSize='small'/> &nbsp;{ post.likes.length } { post.likes.length === 1 ? 'Like' : 'Likes' } </>
      )
    }
    return <><ThumbUpOffAltIcon fontSize='small' />&nbsp;Like</>
  }

  return (
    <Card className={classes.card}>
      {post.selectedFile? (
        <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
        ) : (
        <Skeleton className={classes.media} sx={{ bgcolor: 'grey.700' }} animation="wave" variant="rectangular" />
      )}
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.name}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
      {((user?.result?.id === post?.creator || user?.result?._id === post?.creator) && (post.creator)) &&
        <Button 
          className='EditPostButton'
          style={{color: 'white'}} 
          size='small' 
          onClick={() => setCurrentId(post._id)}>
          <EditOutlinedIcon fontSize='medium' />
        </Button>
      } 
      </div> 
      <div className={classes.bottomSection}>
        <div>
          <div className={classes.details}>
            <Typography variant='body2' color='textSecondary'>{post.tags.map((tag) => `#${tag} `)}</Typography>
          </div>
          <Typography className={classes.title} variant='h5' gutterBottom>{post.title}</Typography>
          <CardContent>
            <Typography noWrap={true}	variant='body2' color='textSecondary' component='p'>{post.message}</Typography>
          </CardContent> 
        </div>
        <CardActions className={classes.cardActions}>
          <Button style={{flex:1}} size='small' color='primary' disabled={!user?.result} onClick={()=> dispatch(likePost(post._id))}>
            <Likes />
          </Button>
          {((user?.result?.id === post?.creator || user?.result?._id === post?.creator) && (post.creator)) && <div className={classes.separator}></div>}
          {((user?.result?.id === post?.creator || user?.result?._id === post?.creator) && (post.creator)) &&
            <Container className={classes.popover}>
              <Button aria-describedby={popid} onClick={handleClick}  size='small' color='primary'>
                <DeleteIcon fontSize='small' />
                &nbsp;Delete
              </Button>
              <Popover  id={popid} open={open} anchorEl={anchorEl} onClose={handleClose}
                  anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                  }}
                  transformOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                  }}
                  >
                  <div className={classes.confirmationPop}>
                    <Typography variant='h6'>Are you sure you want to delete this Post?</Typography>
                    <Container className={classes.ConfirmationButtons}>
                      <LoadingButton variant="contained" color="secondary" size="large"  onClick={handleConfirmation} loading={loading}>Yes</LoadingButton>
                      <Button variant="contained" color="primary" size="large" onClick={() => setAnchorEl(null)}>No</Button>
                    </Container>
                  </div>
              </Popover>
            </Container>
          } 
        </CardActions>
      </div>
    </Card>
  )
}

export default Post