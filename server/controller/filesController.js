import fetch from 'node-fetch'
import { validateRow } from '../utils/csvFormater.js'

const url = 'https://echo-serv.tbxnet.com/v1/secret'
const options = {
  headers: {
    authorization: 'Bearer aSuperSecretKey'
  }
}

/**
 * @param  {Request} req
 * @param  {Response} res
 * returns an array with files info
 */
export const getFiles = (req, res) => {
  const param = req.query.fileName.trim()

  fetch(`${url}/files`, options)
    .then((response) => response.json())
    .then((data) => {
      const files = data.files

      const promises = files.map((file) =>
        fetch(`${url}/file/${file}`, options).then((response) =>
          response.text()
        )
      )

      Promise.allSettled(promises)
        .then((data) => {
          const result = []

          data.forEach(({ value }) => {
            const rows = value.split('\n')
            if (rows.length < 2) return

            const lines = []
            const file = rows[1].split(',')[0]

            for (let i = 1; i < rows.length; i++) {
              const row = rows[i].split(',')

              validateRow(row) &&
                lines.push({
                  text: row[1],
                  number: row[2],
                  hex: row[3]
                })
            }

            lines.length > 0 &&
              result.push({
                file,
                lines
              })
          })

          const list = param
            ? result.filter((file) => file.file === param)
            : result

          console.log('Get files data successfully')
          res.contentType('application/json')
          res.status(200).json(list)
        })
        .catch((err) => {
          console.error('ERROR RUNNING PROMISES: ', err)
          res.status(400).json({
            message: err,
            info: 'Something went wrong'
          })
        })
    })
    .catch((err) => {
      console.error(err)
      res.status(400).json({
        message: err,
        info: 'Something went wrong'
      })
    })
}

export const getFilesList = (req, res) => {
  fetch(`${url}/files`, options)
    .then((response) => response.json())
    .then((data) => {
      const files = data.files
      console.log('Get files successfully')
      res.contentType('application/json')
      res.status(200).json(files)
    })
    .catch((err) => {
      console.error(err)
      res.status(400).json({
        message: err,
        info: 'Something went wrong'
      })
    })
}
