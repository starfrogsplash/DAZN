import { Router } from 'express'
import {userStreamCount} from '../database/index'

const checkStreamRouter = Router()

checkStreamRouter.get('/:userId', async (req, res) => {
    const {userId} = req.params

    if(userStreamCount[userId]){
        userStreamCount[userId]++
    } else{
        userStreamCount[userId]=1
    }

    if(userStreamCount[userId] > 3) return res.status(400).json('Error: Too many cuncurrent streams')
    res.status(200).json('Success! able to watch stream')
})


export {checkStreamRouter}