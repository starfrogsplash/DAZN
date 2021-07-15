import { UserStreams } from '../../src/database/index'


it('starts at 0', () => {
    const res = new UserStreams()
    expect(res.getUserStreamCount('abc1')).toBe(0)
})


it('starts at 3', () => {
    const res = new UserStreams()

    res.addUserStream('abc1').addUserStream('abc1').addUserStream('abc1')
    expect(res.getUserStreamCount('abc1')).toBe(3)
})







