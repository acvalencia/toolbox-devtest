import React from 'react'

const FilesTableRow = ({ row }) => {
  return (
    <>
      {row.lines.map((element, i) => (
        <tr key={i}>
          <td>
            <a href={`/?fileName=${row.file}`}>
              {row.file}
            </a>
          </td>
          <td>{element.text}</td>
          <td>{element.number}</td>
          <td>{element.hex}</td>
        </tr>
      ))}
    </>
  )
}

export default FilesTableRow
