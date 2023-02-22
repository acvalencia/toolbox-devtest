import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Outlet, Link } from 'react-router-dom'

const headerStyle = {
  backgroundColor: 'red',
  width: '100%'
}

const titleStyle = {
  color: 'white',
  fontWeight: '700',
  padding: '20px',
  fontSize: '1.5rem', // /* 14px */;
  lineHeight: '1.25rem' /// * 20px */;
}

const subTitleStyle = {
  color: 'white',
  fontWeight: '500',
  padding: '20px',
  fontSize: '1.3rem', // /* 14px */;
  lineHeight: '1.15rem' /// * 20px */;
}

const MainNav = () => {
  return (
    <>
      <header style={headerStyle} className='mb-5'>
        <nav className='d-flex justify-content-between'>
          <div style={titleStyle}>React Test App</div>
          <div style={{ padding: '20px' }}>
            <Link style={subTitleStyle} to='/'>Home</Link>
            <Link style={subTitleStyle} to='/list'>Files list</Link>
          </div>
        </nav>
      </header>
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default MainNav
