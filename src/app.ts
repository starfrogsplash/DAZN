import express from 'express'
import {json} from 'body-parser'
import {mainRouter} from './routes/index'

const app = express()

app.use(json())
app.use(mainRouter)

export {
    app
}

