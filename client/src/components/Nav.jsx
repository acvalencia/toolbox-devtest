import React from 'react'

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

const MainNav = () => {
  return (
    <header style={headerStyle} className='mb-5'>
      <nav>
        <div style={titleStyle}>React Test App</div>
      </nav>
    </header>
  )
}

export default MainNav
