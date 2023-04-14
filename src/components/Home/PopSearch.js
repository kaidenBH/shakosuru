import React from 'react'
import { Container, TextField } from '@material-ui/core';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import { SearchIcon } from '../../assets';
import useStyle from './styles';

const PopSearch = ({ anchorEl, setAnchorEl }) => {
    const classes= useStyle();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const popid = open ? 'simple-popover' : undefined;

    return (
    <Container className={classes.popoverSearch}>
        <IconButton aria-describedby={popid} onClick={handleClick}>
            <img  src={ SearchIcon } alt='Search' height="44" />
        </IconButton>
        <Popover 
            id={popid}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}
            >
            <div >
                <TextField name='search' variant='filled' label='Search ...' style={{width: '70vw'}} onChange={(e) => console.log(e.target.value)}/>
            </div>
        </Popover>
    </Container>
  )
}

export default PopSearch