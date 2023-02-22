import React from 'react'
import Table from 'react-bootstrap/Table'

const FilesListTable = ({ list }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Full Name</th>
        </tr>
      </thead>
      <tbody>
        {list.map((file, i) => (
          <tr key={i}>
            <td>{file}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default FilesListTable
