import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import FilesTable from './filesTable'
import { useSearchParams } from 'react-router-dom'

function App () {
  const [files, setFiles] = useState([])
  const [searchParams] = useSearchParams()

  useEffect(() => {
    fetch('http://localhost:3001/files/data')
      .then((res) => res.json())
      .then((data) => {
        const param = searchParams.get('fileName')
        const list = param ? data.filter((file) => file.file === param) : data
        setFiles(list)
      })
  }, [searchParams])

  return (
    <FilesTable files={files} />
  )
}

export default App
