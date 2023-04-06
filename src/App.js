import React from 'react'
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, Navbar, Auth} from './components';

const App = () => {
  return (
      <BrowserRouter>
        <Container maxWidth= "lg">
            <Navbar />
            <Routes>
                <Route path='/' exact Component={Home} />
                <Route path='/auth' exact Component={Auth} />
            </Routes>
        </Container>
      </BrowserRouter>
  )
}

export default App