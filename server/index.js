import express from 'express'
import { getFiles, getFilesList } from './controller/filesController.js'
import cors from 'cors'

const port = 3001

export const app = express()

app.use(cors())

app.get('/files/data', getFiles)
app.get('/files/list', getFilesList)

app.listen(port, () => {
  console.log('server listening on port: ' + port)
})
