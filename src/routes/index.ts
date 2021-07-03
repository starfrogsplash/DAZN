import { Router } from 'express'
import axios from 'axios'

const mainRouter = Router()

mainRouter.get('/', (req, res) => {
    res.status(200).json('success')
})

mainRouter.get('/:speciesId', async (req, res) => {
    const {speciesId} = req.params

    const axiosRes = await axios.get(`https://swapi.dev/api/species/${speciesId}`)

    res.status(200).json(axiosRes.data)
})


export {mainRouter}