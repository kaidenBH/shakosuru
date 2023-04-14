import React, { useState,useEffect } from 'react'
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { getPosts } from '../../actions/posts';
import { Posts } from '../';
import  PopIcons from './PopIcons';
import  PopSearch from './PopSearch';

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorSearch, setAnchorSearch] = useState(null);

    useEffect(() => {
      dispatch(getPosts());
    }, [dispatch]);

    useEffect(() => {
        currentId && setAnchorEl(document.querySelector('.EditPostButton'));
    }, [currentId]);
    
    return (
        <Grow in>
            <Container className={classes.container}  maxWidth={false}>
                <PopIcons currentId={currentId} setCurrentId={setCurrentId} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
                <PopSearch anchorEl={anchorSearch} setAnchorEl={setAnchorSearch} />
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