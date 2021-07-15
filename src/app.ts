import express from 'express'
import { json } from 'body-parser'
import { checkStreamRouter } from './routes/mainRoute'

const app = express()

app.use(json())
app.use(checkStreamRouter)

export {
    app
}

