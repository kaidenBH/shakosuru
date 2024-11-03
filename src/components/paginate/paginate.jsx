import React from 'react'
import uStyles from './styles';
import { Pagination, PaginationItem  } from '@mui/material';
import { Link } from 'react-router-dom';

const paginate = () => {
    const classes = uStyles();
  return (
    <Pagination 
        classes={{ ul: classes.ul }}
        count={5}
        page={1}
        variant='outlined'
        color='primary'
        renderItem={(item) => (
            <PaginationItem {...item} component={Link} to={`/posts?page=${1}`} />
        )}
    />
  )
}

export default paginate