import React, { useState,useEffect } from 'react'
import { Container, Grow, Grid, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import useStyles from './styles';
import { getPosts } from '../../actions/posts';
import { Posts, Form } from '../';

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);

    useEffect(() => {
      dispatch(getPosts());
    }, [dispatch]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    useEffect(() => {
        currentId && setAnchorEl(document.querySelector('.EditPostButton'));
    }, [currentId]);

    const handleClose = () => {
        setAnchorEl(null);
        setCurrentId(null);
    };
      const open = Boolean(anchorEl);
      const popid = open ? 'simple-popover' : undefined;
    
    return (
        <Grow in>
            <Container className={classes.container}  maxWidth={false}>
                <Container className={classes.popover}>
                    <IconButton aria-describedby={popid} onClick={handleClick}>
                        <AddCircleIcon color='primary' sx={{ fontSize: 60 }}></AddCircleIcon>
                    </IconButton>
                    <Popover 
                        id={popid}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        >
                        <div className={classes.formpop}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} setAnchorEl={setAnchorEl} />
                        </div>
                    </Popover>
                </Container>
                <Grid className={classes.mainContainer} container >
                    <Grid item xs={12} sm={12}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home