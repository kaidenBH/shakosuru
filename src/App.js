import React from 'react'
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useStyles from './styles';
import { Home, Navbar, Auth} from './components';

const App = () => {
  const classes = useStyles();
  return (
      <BrowserRouter>
        <Container className={classes.mainContainer} maxWidth= {false}>
            <Navbar />
            <Routes>
                <Route path='/thoughts/' exact Component={Home} />
                <Route path='/thoughts/auth' exact Component={Auth} />
            </Routes>
        </Container>
      </BrowserRouter>
  )
}

export default App