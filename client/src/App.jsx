import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import React, { useEffect, useState } from 'react'
import FilesTable from './components/filesTable'
import MainNav from './components/Nav'

function App () {
  const [files, setFiles] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/files/data')
      .then((res) => res.json())
      .then((data) => setFiles(data))
  }, [])

  return (
    <div className='App'>
      <MainNav />
      <Container>
        <FilesTable files={files} />
      </Container>
    </div>
  )
}

export default App
