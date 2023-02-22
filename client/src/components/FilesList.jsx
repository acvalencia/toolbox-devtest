import React, { useEffect, useState } from 'react'
import FilesListTable from './filesListTable'

const FilesList = () => {
  const [files, setFiles] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/files/list')
      .then((res) => res.json())
      .then((data) => setFiles(data))
  }, [])

  return <FilesListTable list={files} />
}

export default FilesList
