import React, { useEffect, useState } from 'react';
import { Paper, Typography, CircularProgress, Divider, Grow } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useNavigate } from 'react-router-dom';
import { getPost } from '../../../actions/posts';
import useStyles from './styles';

function PostDetails() {
    const { post, posts } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();
    const { id } = useParams();
    const [isLoading, setLoading] = useState(true);
    useEffect (() => {
        setLoading(true);
        dispatch(getPost(id,setLoading));
    }, [id]);
    if(!post) return null;
    
    if(isLoading) {
        return(
            <Paper elevation={6} className={classes.loadingPaper}>
                <CircularProgress size='7em' />
            </Paper>
        )
    }
 
    return (
        <Grow in>
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
            </Paper>
        </Grow>
    )
}

export default PostDetails