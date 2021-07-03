import { Router } from 'express'

const mainRouter = Router()

mainRouter.get('/', (req, res) => {
    res.status(200).json('success')
})

mainRouter.get('/:id', (req, res) => {
    const {id} = req.params
    res.status(200).json(`id is ${id}`)
})


export {mainRouter}