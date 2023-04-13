import React, { useEffect, useState } from 'react';
import { Container, Button, CardActions, Paper, Typography, CircularProgress, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import { useParams, useNavigate } from 'react-router-dom';
import { likespecificPost, getPost,deletePost, likePost } from '../../../actions/posts';
import useStyles from './styles';
import LoadingButton from '@mui/lab/LoadingButton';
import Popover from '@mui/material/Popover';

function PostDetails() {
    const { post, posts } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();
    const { id } = useParams();
    const [isLoading, setLoading] = useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect (() => {
        setLoading(true);
        dispatch(getPost(id,setLoading));
    }, [id]);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleConfirmation = () => {
        setLoading(true);
        dispatch(deletePost(post._id, handleClose));
    }
    const handleClose = () => {
        navigate('/thoughts/');
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
        
    if(!post) return null;
    if(isLoading) {
        return(
            <Paper elevation={6} className={classes.loadingPaper}>
                <CircularProgress size='7em' />
            </Paper>
        )
    }
 
    return (
        <Paper className={classes.postPaper} elevation={6}>
            <div className={classes.card}>
                <div className={classes.section}>
                    <Typography className={classes.postTitle} variant="h3" component="h2">{post.title}</Typography>
                    <Typography className={classes.postTags} gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
                    <Typography className={classes.postMessage} gutterBottom variant="body1" component="p">{post.message}</Typography>
                    <Typography className={classes.postCreator} variant="h6">Created by: {post.name}</Typography>
                    <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
                    <Divider style={{ margin: '20px 0' }} />
                    <Typography variant="body1"><strong>Comments - coming soon!</strong></Typography>
                    <Divider style={{ margin: '20px 0' }} />
                </div>
                <div className={classes.imageSection}>
                    <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
                </div>
            </div>
            <CardActions className={classes.cardActions}>
                <Button style={{flex:1}} size='small' color='primary' disabled={!user?.result} onClick={()=> dispatch(likespecificPost(post._id, setLoading))}>
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
                            <LoadingButton variant="contained" color="secondary" size="large"  onClick={handleConfirmation} loading={isLoading}>Yes</LoadingButton>
                            <Button variant="contained" color="primary" size="large" onClick={() => setAnchorEl(null)}>No</Button>
                            </Container>
                        </div>
                    </Popover>
                    </Container>
                } 
            </CardActions>
        </Paper>
    )
}

export default PostDetails