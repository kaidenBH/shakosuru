import React from 'react'
import { Container } from '@material-ui/core';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import { AddIcon } from '../../assets';
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
            <img  src={ AddIcon } alt='Add' height="50" />
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
            <div>
                <Form currentId={currentId} setCurrentId={setCurrentId} setAnchorEl={setAnchorEl} />
            </div>
        </Popover>
    </Container>
  )
}

export default PopIcons