import React from 'react'

const FilesTableRow = ({ row }) => {
  return (
    <>
      {row.lines.map((element, i) => (
        <tr key={i}>
          <td>{row.file}</td>
          <td>{element.text}</td>
          <td>{element.number}</td>
          <td>{element.hex}</td>
        </tr>
      ))}
    </>
  )
}

export default FilesTableRow
