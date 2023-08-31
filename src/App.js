//rafce

import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <div>
    <Header/>
    <main className='py-3'>
      <Container>
      <Outlet>
        <HomeScreen></HomeScreen>
      </Outlet>
        
      </Container>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
