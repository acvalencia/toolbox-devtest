import React from 'react'
import Table from 'react-bootstrap/Table'
import FilesTableRow from './filesTableRow'

const FilesTable = ({ files }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {files.map((file, i) => (
          <FilesTableRow key={i} row={file} />
        ))}
      </tbody>
    </Table>
  )
}

export default FilesTable
