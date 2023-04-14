import React, { useEffect } from 'react'
import { Container } from '@material-ui/core';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import { Form } from '../';

import useStyle from './styles';

const PopIcons = ({ currentId, setCurrentId, anchorEl, setAnchorEl }) => {
    const classes= useStyle();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setCurrentId(null);
    };
    const open = Boolean(anchorEl);
    const popid = open ? 'simple-popover' : undefined;

    return (
    <Container className={classes.popoverNewPost}>
        <IconButton aria-describedby={popid} onClick={handleClick}>
            <AddCircleIcon color='primary' sx={{ fontSize: 50 }}></AddCircleIcon>
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
  )
}

export default PopIcons