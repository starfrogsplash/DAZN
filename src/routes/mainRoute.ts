import { Router, Request, Response } from 'express'
import { UserStreams } from '../database/index'

const checkStreamRouter = Router()

const result = new UserStreams()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
checkStreamRouter.get('/:userId', async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    const { userId } = req.params
    if (result.getUserStreamCount(userId) >= 3) return res.status(403).json('Forbidden: Too many cuncurrent streams')
    result.addUserStream(userId)
    return res.status(200).json('Success! able to watch stream')
})

export { checkStreamRouter }